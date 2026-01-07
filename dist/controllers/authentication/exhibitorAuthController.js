"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerExhibitor = registerExhibitor;
exports.loginExhibitor = loginExhibitor;
exports.logoutExhibitor = logoutExhibitor;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../models");
const config_1 = require("../../config/config");
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new models_1.PrismaClient();
async function registerExhibitor(request, response) {
    try {
        // Validate request using frontend field names
        const validationRules = [
            (0, express_validator_1.body)('exhibitorName').notEmpty().withMessage('Company/Organization name is required'),
            (0, express_validator_1.body)('exhibitorFirstName').notEmpty().withMessage('Contact first name is required'),
            (0, express_validator_1.body)('exhibitorLastName').notEmpty().withMessage('Contact last name is required'),
            (0, express_validator_1.body)('exhibitorEmail').isEmail().withMessage('Invalid contact email'),
            (0, express_validator_1.body)('exhibitorPhone').notEmpty().withMessage('Contact phone is required'),
            (0, express_validator_1.body)('password').notEmpty().withMessage('Password is required').bail().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
            (0, express_validator_1.body)('exhibitorWebsite').optional(),
            (0, express_validator_1.body)('exhibitorDescription').notEmpty().withMessage('Company/Organization description is required'),
            (0, express_validator_1.body)('exhibitorProducts').optional(),
            (0, express_validator_1.body)('exhibitorPrefix').optional(),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Map frontend fields to DB fields
        const { exhibitorPrefix, exhibitorName, exhibitorFirstName, exhibitorLastName, exhibitorEmail, exhibitorPhone, exhibitorWebsite, exhibitorDescription, exhibitorProducts, password, } = request.body;
        const existing = await prisma.exhibitors.findUnique({ where: { contact_email: exhibitorEmail } });
        if (existing) {
            return response.status(400).json({ message: 'Email already registered' });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const contact_person = `${exhibitorFirstName.trim()} ${exhibitorLastName.trim()}`.trim();
        const newExhibitor = await prisma.exhibitors.create({
            data: {
                prefix: exhibitorPrefix || null,
                company_name: exhibitorName,
                contact_person,
                contact_email: exhibitorEmail,
                contact_phone: exhibitorPhone,
                website: exhibitorWebsite || null,
                description: exhibitorDescription || null,
                service_product_to_exhibit: exhibitorProducts || null,
                password: hashedPassword,
            }
        });
        if (!config_1.Config.secret) {
            console.error('Jwt secret is not defined');
            return response.status(500).json({ message: 'Internal Server Error' });
        }
        const token = jsonwebtoken_1.default.sign({ id: newExhibitor.id, contact_email: newExhibitor.contact_email, company_name: newExhibitor.company_name }, config_1.Config.secret, { expiresIn: '24h' });
        return response.status(201).json({ message: 'Exhibitor registered successfully', token, exhibitor: newExhibitor });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function loginExhibitor(request, response) {
    await (0, express_validator_1.body)('email').notEmpty().withMessage('email is required').isEmail().withMessage('Invalid email format').bail().isString().run(request);
    await (0, express_validator_1.body)('password').notEmpty().withMessage('password is required').bail().isString().run(request);
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ status: 'fail', errors: errors.array() });
    }
    const { email, password } = request.body;
    try {
        const exhibitor = await prisma.exhibitors.findFirst({ where: { contact_email: email } });
        if (!exhibitor) {
            return response.status(401).json({ message: 'Invalid credentials' });
        }
        if (exhibitor.password === null) {
            return response.status(401).json({ error: 'Invalid email or password' });
        }
        if (!exhibitor.password.startsWith('$2')) {
            console.error('Password format invalid for exhibitor:', exhibitor.password);
            return response.status(400).json({ message: 'Invalid password format in database' });
        }
        const passwordMatch = await bcrypt_1.default.compare(password, exhibitor.password);
        if (!passwordMatch) {
            return response.status(401).json({ error: 'Invalid email or password' });
        }
        if (!config_1.Config.secret) {
            console.error('Jwt secret is not defined');
            return response.status(500).json({ message: 'Internal Server Error' });
        }
        const token = jsonwebtoken_1.default.sign({ id: exhibitor.id, contact_email: exhibitor.contact_email, company_name: exhibitor.company_name }, config_1.Config.secret, { expiresIn: '24h' });
        return response.status(200).json({ token, success: true, message: 'Login successful', exhibitor });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function logoutExhibitor(request, response) {
    try {
        response.clearCookie('jwt');
        return response.status(200).json({ message: 'Logout successful' });
    }
    catch (error) {
        console.error('Error during logout:', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
