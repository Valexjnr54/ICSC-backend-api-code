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
exports.registerExhibitor = registerExhibitor;
exports.loginExhibitor = loginExhibitor;
exports.logoutExhibitor = logoutExhibitor;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../models");
const config_1 = require("../../config/config");
const express_validator_1 = require("express-validator");
const argon2 = __importStar(require("argon2"));
const prisma = new models_1.PrismaClient();
async function registerExhibitor(request, response) {
    try {
        const validationRules = [
            (0, express_validator_1.body)('company_name').notEmpty().withMessage('Company name is required'),
            (0, express_validator_1.body)('contact_person').notEmpty().withMessage('Contact person is required'),
            (0, express_validator_1.body)('contact_email').isEmail().withMessage('Invalid contact email'),
            (0, express_validator_1.body)('contact_phone').notEmpty().withMessage('Contact phone is required'),
            (0, express_validator_1.body)('password').notEmpty().withMessage('Password is required').bail().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
            (0, express_validator_1.body)('website').optional(),
            (0, express_validator_1.body)('description').optional(),
            (0, express_validator_1.body)('service_product_to_exhibit').optional(),
            (0, express_validator_1.body)('prefix').optional(),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const { company_name, contact_person, contact_email, contact_phone, website, description, service_product_to_exhibit, prefix, password } = request.body;
        const existing = await prisma.exhibitors.findUnique({ where: { contact_email } });
        if (existing) {
            return response.status(400).json({ message: 'Email already registered' });
        }
        const hashedPassword = await argon2.hash(password);
        const newExhibitor = await prisma.exhibitors.create({
            data: {
                prefix: prefix || null,
                company_name,
                contact_person,
                contact_email,
                contact_phone,
                website: website || null,
                description: description || null,
                service_product_to_exhibit: service_product_to_exhibit || null,
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
    await (0, express_validator_1.body)('contact_email').notEmpty().withMessage('email is required').isEmail().withMessage('Invalid email format').bail().isString().run(request);
    await (0, express_validator_1.body)('password').notEmpty().withMessage('password is required').bail().isString().run(request);
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ status: 'fail', errors: errors.array() });
    }
    const { contact_email, password } = request.body;
    try {
        const exhibitor = await prisma.exhibitors.findFirst({ where: { contact_email } });
        if (!exhibitor) {
            return response.status(401).json({ message: 'Invalid credentials' });
        }
        if (exhibitor.password === null) {
            return response.status(401).json({ error: 'Invalid email or password' });
        }
        if (!exhibitor.password.startsWith('$argon2')) {
            console.error('Password format invalid for exhibitor:', exhibitor.password);
            return response.status(400).json({ message: 'Invalid password format in database' });
        }
        const passwordMatch = await argon2.verify(exhibitor.password, password);
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
