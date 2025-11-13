"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const argon2 = __importStar(require("argon2"));
const emailSender_1 = require("../../utils/emailSender");
const prisma = new models_1.PrismaClient();
async function registerEventPartner(request, response) {
    try {
        const validationRules = [
            (0, express_validator_1.body)('fullname').notEmpty().withMessage('Full name is required'),
            (0, express_validator_1.body)('phone_number').notEmpty().withMessage('Phone number is required'),
            (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email address'),
            (0, express_validator_1.body)('company_name').notEmpty().withMessage('Company name is required'),
            (0, express_validator_1.body)('password').notEmpty().withMessage('Password is required').bail().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
            (0, express_validator_1.body)('logo').optional(),
            (0, express_validator_1.body)('website').optional(),
            (0, express_validator_1.body)('social_media').optional(),
            (0, express_validator_1.body)('description').optional(),
            (0, express_validator_1.body)('why_interested').optional(),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const { fullname, email, phone_number, company_name, logo, website, social_media, description, why_interested, password } = request.body;
        const existing = await prisma.eventPartners.findUnique({ where: { email } });
        if (existing) {
            return response.status(400).json({ message: 'Email already registered' });
        }
        const hashedPassword = await argon2.hash(password);
        const newPartner = await prisma.eventPartners.create({
            data: {
                fullname,
                email,
                phone_number,
                company_name,
                logo: logo || '',
                website: website || null,
                social_media: social_media || null,
                description: description || null,
                why_interested: why_interested || null,
                password: hashedPassword,
            }
        });
        // send welcome email (non-blocking)
        try {
            await (0, emailSender_1.sendWelcomeEmail)(email, 'Welcome to International Civil Service Conference', newPartner, password);
        }
        catch (e) {
            console.warn('sendWelcomeEmail failed', e);
        }
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
        if (!partner.password.startsWith('$argon2')) {
            console.error('Password format invalid for event partner:', partner.password);
            return response.status(400).json({ message: 'Invalid password format in database' });
        }
        const passwordMatch = await argon2.verify(partner.password, password);
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
