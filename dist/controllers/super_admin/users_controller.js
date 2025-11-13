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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.allUser = allUser;
exports.singleUser = singleUser;
exports.deleteUser = deleteUser;
const models_1 = require("../../models");
const argon2 = __importStar(require("argon2"));
const express_validator_1 = require("express-validator");
const emailSender_1 = require("../../utils/emailSender");
const prisma = new models_1.PrismaClient();
async function createUser(request, response) {
    const { organization, organization_short_code, contact_person, contact_person_email, username, password } = request.body;
    const admin_id = request.admin.adminId;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        const validationRules = [
            (0, express_validator_1.body)('organization').notEmpty().withMessage('Organization is required'),
            (0, express_validator_1.body)('organization_short_code').notEmpty().withMessage('Organization Short Code is required'),
            (0, express_validator_1.body)('contact_person').notEmpty().withMessage('Contact Person is required'),
            (0, express_validator_1.body)('contact_person_email').isEmail().withMessage('Invalid email address'),
            (0, express_validator_1.body)('username').notEmpty().withMessage('Username is required'),
            (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const admin_role = check_admin?.role;
        // Check if the role is not 'User'
        if (admin_role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const existing = await prisma.users.findUnique({ where: { contact_person_email } });
        if (existing) {
            return response.status(400).json({ message: 'Email already registered' });
        }
        const hashedPassword = await argon2.hash(password);
        const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
        const newUser = await prisma.users.create({
            data: {
                organization,
                organization_short_code,
                contact_person,
                contact_person_email,
                username,
                password: hashedPassword,
            },
        });
        await (0, emailSender_1.sendWelcomeEmail)(contact_person_email, 'Welcome to International Civil Service Conference', newUser, password);
        return response.status(201).json({ message: 'User created successfully', newUser });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function allUser(request, response) {
    const admin_id = request.admin.adminId;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'User'
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const allUsers = await prisma.users.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return response.status(200).json({ message: 'User(s) fetched', data: allUsers });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function singleUser(request, response) {
    const id = parseInt(request.query.user_id, 10);
    const admin_id = request.admin.adminId;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    if (!id) {
        return response.status(403).json({ message: 'User ID required' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'User'
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const singleUser = await prisma.users.findUnique({
            where: {
                id: id
            },
        });
        if (!singleUser) {
            return response.status(404).json({ message: 'User not found' });
        }
        return response.status(200).json({ message: 'User fetched', data: singleUser });
    }
    catch (error) {
        console.log(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function deleteUser(request, response) {
    const id = parseInt(request.query.user_id, 10);
    const admin_id = request.admin.adminId;
    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    if (!id) {
        return response.status(403).json({ message: 'User ID required' });
    }
    try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
        // Check if the role is not 'User'
        if (role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
        const user = await prisma.users.findUnique({
            where: { id }
        });
        if (!user) {
            return response.status(404).json({ message: 'Record not found' });
        }
        // Create a new delivery entry in the database
        const deleteUser = await prisma.users.delete({
            where: {
                id
            },
        });
        if (!deleteUser) {
            return response.status(403).json({ message: 'Unable to delete User' });
        }
        return response.status(200).json({ message: 'User was deleted successfully', data: deleteUser });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
