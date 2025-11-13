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
exports.registerAdmin = registerAdmin;
exports.loginAdmin = loginAdmin;
exports.logoutAdmin = logoutAdmin;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../models");
const config_1 = require("../../config/config");
const express_validator_1 = require("express-validator");
const argon2 = __importStar(require("argon2"));
const requestValidator_1 = require("../../utils/requestValidator");
const prisma = new models_1.PrismaClient();
async function registerAdmin(request, response) {
    (0, requestValidator_1.validateRequestBody)(['fullname', 'email', 'password']);
    const { fullname, email, username, password } = request.body;
    try {
        const validationRules = [
            (0, express_validator_1.body)('fullname').notEmpty().withMessage('Full Name is required'),
            (0, express_validator_1.body)('username').notEmpty().withMessage('Username is required'),
            (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email address'),
            (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        ];
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // Check if the email is already registered
        const existingAdmin = await prisma.admin.findUnique({ where: { email } });
        if (existingAdmin) {
            return response.status(400).json({ message: 'Email already registered' });
        }
        // Hash the password before storing it
        const hashedPassword = await argon2.hash(password);
        //Uploading Image to Cloudinary
        let imageUrl = "https://res.cloudinary.com/dx2gbcwhp/image/upload/v1699044872/noimage/uyifdentpdqjeyjnmowa.png"; // Default URL
        // Create a new Admin in the database
        const newAdmin = await prisma.admin.create({
            data: {
                fullname,
                email,
                username,
                profile_image: imageUrl,
                password: hashedPassword, // Store the salt along with the hash
            },
        });
        // Generate a JWT token for the newly registered Admin
        const token = jsonwebtoken_1.default.sign({ adminId: newAdmin.id, email: newAdmin.email, fullname: newAdmin.fullname, profile_image: newAdmin.profile_image }, config_1.Config.secret);
        response.status(201).json({ token, newAdmin });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function loginAdmin(request, response) {
    // First check if body exists and has required fields
    if (!request.body || Object.keys(request.body).length === 0) {
        return response.status(400).json({
            error: "Empty request body",
            message: "Request body cannot be empty",
            requiredFields: ["email|username", "password"],
            example: {
                email: "admin@example.com",
                username: "adminuser",
                password: "yourSecurePassword"
            }
        });
    }
    const { email, username, password } = request.body;
    // Additional check for empty fields: allow either email or username
    if ((!email && !username) || !password) {
        return response.status(400).json({
            error: "Missing fields",
            message: "Either email or username, and password are required",
            missingFields: [
                ...(!email && !username ? ["email|username"] : []),
                ...(!password ? ["password"] : [])
            ]
        });
    }
    try {
        // Find the Admin by email or username
        const searchConditions = [];
        if (email)
            searchConditions.push({ email });
        if (username)
            searchConditions.push({ username });
        const admin = await prisma.admin.findFirst({ where: { OR: searchConditions } });
        if (!admin) {
            return response.status(401).json({
                error: 'Authentication failed',
                message: 'Invalid credentials'
            });
        }
        // Verify the password
        const passwordMatch = await argon2.verify(admin.password, password);
        if (!passwordMatch) {
            return response.status(401).json({
                error: 'Authentication failed',
                message: 'Invalid email or password'
            });
        }
        // Generate a JWT token for the admin
        const token = jsonwebtoken_1.default.sign({
            adminId: admin.id,
            email: admin.email,
            fullname: admin.fullname,
            profile_image: admin.profile_image,
            role: admin.role
        }, config_1.Config.secret, { expiresIn: '24h' } // Add token expiration
        );
        // Return response without sensitive data (remove password)
        const { password: _pw, ...adminSafe } = admin;
        response.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            admin: adminSafe
        });
    }
    catch (error) {
        console.error('Login error:', error);
        response.status(500).json({
            error: 'Internal Server Error',
            message: 'An error occurred during login'
        });
    }
}
async function logoutAdmin(request, response) {
    try {
        // If you are using JWT tokens, you can clear the token on the client side by removing it from cookies or local storage.
        // Here, we'll focus on clearing the token from cookies.
        // Clear the JWT token from the client-side cookies
        response.clearCookie('jwt');
        // Optionally, you can perform additional tasks here, such as logging the Admin's logout action.
        // Send a success response to the client
        response.status(200).json({ message: 'Logout successful' });
    }
    catch (error) {
        // Handle any potential errors that may occur during the logout process.
        console.error('Error during logout:', error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
}
