"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerEventPartner = registerEventPartner;
exports.loginEventPartner = loginEventPartner;
exports.logoutEventPartner = logoutEventPartner;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../models");
const config_1 = require("../../config/config");
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new models_1.PrismaClient();
async function registerEventPartner(request, response) {
    try {
        // Validate request using frontend field names
        const validationRules = [
            (0, express_validator_1.body)('companyName').notEmpty().withMessage('Company/Organization name is required'),
            (0, express_validator_1.body)('contactFirstName').notEmpty().withMessage('Contact first name is required'),
            (0, express_validator_1.body)('contactLastName').notEmpty().withMessage('Contact last name is required'),
            (0, express_validator_1.body)('contactEmail').isEmail().withMessage('Invalid contact email'),
            (0, express_validator_1.body)('contactPhone').notEmpty().withMessage('Contact phone is required'),
            (0, express_validator_1.body)('password').notEmpty().withMessage('Password is required').bail().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
            (0, express_validator_1.body)('companyLogo').optional(),
            (0, express_validator_1.body)('website').optional(),
            (0, express_validator_1.body)('socialMedia').optional(),
            (0, express_validator_1.body)('partnerDescription').optional(),
            (0, express_validator_1.body)('partnerInterest').optional(),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Map frontend fields to DB fields
        const { companyPrefix, companyName, companyLogo, contactFirstName, contactLastName, contactEmail, contactPhone, website, socialMedia, partnerDescription, partnerInterest, password, } = request.body;
        const existing = await prisma.eventPartners.findUnique({ where: { email: contactEmail } });
        if (existing) {
            return response.status(400).json({ message: 'Email already registered' });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const fullname = `${contactFirstName.trim()} ${contactLastName.trim()}`.trim();
        const newPartner = await prisma.eventPartners.create({
            data: {
                fullname,
                email: contactEmail,
                phone_number: contactPhone,
                company_name: companyName,
                logo: companyLogo || '',
                website: website || null,
                social_media: socialMedia || null,
                description: partnerDescription || null,
                why_interested: partnerInterest || null,
                password: hashedPassword,
            }
        });
        // send welcome email (non-blocking)
        // send welcome email (non-blocking)
        // try { await sendWelcomeEmail(contactEmail, 'Welcome to International Civil Service Conference', newPartner, password); } catch (e) { console.warn('sendWelcomeEmail failed', e); }
        if (!config_1.Config.secret) {
            console.error('Jwt secret is not defined');
            return response.status(500).json({ message: 'Internal Server Error' });
        }
        const token = jsonwebtoken_1.default.sign({ id: newPartner.id, email: newPartner.email, fullname: newPartner.fullname, company_name: newPartner.company_name }, config_1.Config.secret, { expiresIn: '24h' });
        return response.status(201).json({ message: 'Event partner registered successfully', token, partner: newPartner });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function loginEventPartner(request, response) {
    // validate input
    await (0, express_validator_1.body)('email').notEmpty().withMessage('email is required').isEmail().withMessage('Invalid email format').bail().isString().run(request);
    await (0, express_validator_1.body)('password').notEmpty().withMessage('password is required').bail().isString().run(request);
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ status: 'fail', errors: errors.array() });
    }
    const { email, password } = request.body;
    try {
        const partner = await prisma.eventPartners.findFirst({ where: { email } });
        if (!partner) {
            return response.status(401).json({ message: 'Invalid credentials' });
        }
        if (partner.password === null) {
            return response.status(401).json({ error: 'Invalid email or password' });
        }
        if (!partner.password.startsWith('$2')) {
            console.error('Password format invalid for event partner:', partner.password);
            return response.status(400).json({ message: 'Invalid password format in database' });
        }
        const passwordMatch = await bcrypt_1.default.compare(password, partner.password);
        if (!passwordMatch) {
            return response.status(401).json({ error: 'Invalid email or password' });
        }
        if (!config_1.Config.secret) {
            console.error('Jwt secret is not defined');
            return response.status(500).json({ message: 'Internal Server Error' });
        }
        const token = jsonwebtoken_1.default.sign({ id: partner.id, email: partner.email, fullname: partner.fullname, company_name: partner.company_name }, config_1.Config.secret, { expiresIn: '24h' });
        return response.status(200).json({ token, success: true, message: 'Login successful', partner });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function logoutEventPartner(request, response) {
    try {
        response.clearCookie('jwt');
        return response.status(200).json({ message: 'Logout successful' });
    }
    catch (error) {
        console.error('Error during logout:', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
