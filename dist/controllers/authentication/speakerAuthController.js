"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSpeaker = registerSpeaker;
exports.loginSpeaker = loginSpeaker;
exports.logoutSpeaker = logoutSpeaker;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../models");
const config_1 = require("../../config/config");
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const emailSender_1 = require("../../utils/emailSender");
const prisma = new models_1.PrismaClient();
async function registerSpeaker(request, response) {
    try {
        // Validate incoming request using frontend field names
        const validationRules = [
            (0, express_validator_1.body)('speakerPrefix').optional(),
            (0, express_validator_1.body)('speakerFirstName').notEmpty().withMessage('First name is required'),
            (0, express_validator_1.body)('speakerLastName').notEmpty().withMessage('Last name is required'),
            (0, express_validator_1.body)('speakerCountry').notEmpty().withMessage('Country is required'),
            (0, express_validator_1.body)('speakerJobTitle').notEmpty().withMessage('Job title is required'),
            (0, express_validator_1.body)('speakerOrganization').notEmpty().withMessage('Organization is required'),
            (0, express_validator_1.body)('speakerPhone').notEmpty().withMessage('Work phone is required'),
            (0, express_validator_1.body)('socialMedia').optional(),
            (0, express_validator_1.body)('profile_image').optional(),
            (0, express_validator_1.body)('speakerWorkEmail').isEmail().withMessage('Invalid work email'),
            (0, express_validator_1.body)('speakerBio').notEmpty().withMessage('Bio is required'),
            (0, express_validator_1.body)('speakertopic').notEmpty().withMessage('Proposed topic is required'),
            (0, express_validator_1.body)('speakerSecondTopic').optional(),
            (0, express_validator_1.body)('speakerExperience').optional(),
            (0, express_validator_1.body)('speakerExpertise').optional(),
            (0, express_validator_1.body)('password').notEmpty().withMessage('Password is required').bail().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Map frontend fields
        const { speakerPrefix, speakerFirstName, speakerLastName, speakerCountry, speakerJobTitle, speakerOrganization, speakerPhone, socialMedia, speakerWorkEmail, speakerBio, speakertopic, speakerExperience, speakerExpertise, speakerSecondTopic, password, } = request.body;
        // Check existing by work_email
        const existing = await prisma.speakers.findUnique({ where: { work_email: speakerWorkEmail } });
        if (existing) {
            return response.status(400).json({ message: 'Work email already registered' });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const fullname = `${speakerFirstName.trim()} ${speakerLastName.trim()}`.trim();
        // Safely handle socialMedia: if it's a JSON string attempt to parse, otherwise store as-is
        let socialMediaValue = null;
        if (socialMedia) {
            if (typeof socialMedia === 'string') {
                try {
                    socialMediaValue = JSON.parse(socialMedia);
                }
                catch (e) {
                    // not JSON, store raw string
                    socialMediaValue = socialMedia;
                }
            }
            else {
                socialMediaValue = socialMedia;
            }
        }
        const newSpeaker = await prisma.speakers.create({
            data: {
                prefix: speakerPrefix || null,
                first_name: speakerFirstName,
                last_name: speakerLastName,
                fullname,
                country: speakerCountry,
                job_title: speakerJobTitle,
                organization: speakerOrganization,
                phone: speakerPhone,
                social_media: socialMediaValue,
                work_email: speakerWorkEmail,
                bio: speakerBio,
                experience: speakerExperience || null,
                area_of_expertise: speakerExpertise || null,
                password: hashedPassword,
            }
        });
        const speakerAssignment = await prisma.speaker_assignment.create({
            data: {
                speaker_id: newSpeaker.id,
                topic_one: speakertopic,
            }
        });
        if (speakerSecondTopic != null) {
            await prisma.speaker_assignment.update({
                where: { id: speakerAssignment.id },
                data: { topic_two: speakerSecondTopic }
            });
        }
        // optional welcome email (non-blocking)
        try {
            await (0, emailSender_1.sendWelcomeEmail)(speakerWorkEmail, 'Welcome to ICSC Speakers', newSpeaker, password);
        }
        catch (e) {
            console.warn('sendWelcomeEmail failed', e);
        }
        if (!config_1.Config.secret) {
            console.error('Jwt secret is not defined');
            return response.status(500).json({ message: 'Internal Server Error' });
        }
        const token = jsonwebtoken_1.default.sign({ id: newSpeaker.id, email: newSpeaker.work_email, fullname: newSpeaker.fullname, organization: newSpeaker.organization }, config_1.Config.secret, { expiresIn: '24h' });
        return response.status(201).json({ message: 'Speaker registered successfully', token, speaker: newSpeaker });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function loginSpeaker(request, response) {
    await (0, express_validator_1.body)('email').notEmpty().withMessage('workEmail is required').isEmail().withMessage('Invalid email format').bail().isString().run(request);
    await (0, express_validator_1.body)('password').notEmpty().withMessage('password is required').bail().isString().run(request);
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ status: 'fail', errors: errors.array() });
    }
    const { email, password } = request.body;
    try {
        const speaker = await prisma.speakers.findFirst({ where: { work_email: email } });
        if (!speaker) {
            return response.status(401).json({ message: 'Invalid credentials' });
        }
        if (speaker.password === null) {
            return response.status(401).json({ error: 'Invalid email or password' });
        }
        if (!speaker.password.startsWith('$2')) {
            console.error('Password format invalid for speaker:', speaker.password);
            return response.status(400).json({ message: 'Invalid password format in database' });
        }
        const passwordMatch = await bcrypt_1.default.compare(password, speaker.password);
        if (!passwordMatch) {
            return response.status(401).json({ error: 'Invalid email or password' });
        }
        if (!config_1.Config.secret) {
            console.error('Jwt secret is not defined');
            return response.status(500).json({ message: 'Internal Server Error' });
        }
        const token = jsonwebtoken_1.default.sign({ id: speaker.id, email: speaker.work_email, fullname: speaker.fullname, organization: speaker.organization }, config_1.Config.secret, { expiresIn: '24h' });
        return response.status(200).json({ token, success: true, message: 'Login successful', speaker });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function logoutSpeaker(request, response) {
    try {
        response.clearCookie('jwt');
        return response.status(200).json({ message: 'Logout successful' });
    }
    catch (error) {
        console.error('Error during logout:', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
