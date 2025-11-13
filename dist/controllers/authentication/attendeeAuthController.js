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
exports.registerAttendee = registerAttendee;
exports.loginAttendee = loginAttendee;
exports.logoutAttendee = logoutAttendee;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../models");
const config_1 = require("../../config/config");
const express_validator_1 = require("express-validator");
const argon2 = __importStar(require("argon2"));
const emailSender_1 = require("../../utils/emailSender");
const prisma = new models_1.PrismaClient();
async function registerAttendee(request, response) {
    try {
        // Run validation before accessing request.body
        const validationRules = [
            (0, express_validator_1.body)('fullname').notEmpty().withMessage('Full Name is required'),
            (0, express_validator_1.body)('phone_number').notEmpty().withMessage('Phone Number is required'),
            // nin is optional — don't attach a "required" message to an optional validator
            (0, express_validator_1.body)('nin').optional(),
            (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email address'),
            (0, express_validator_1.body)('position').notEmpty().withMessage('Position is required'),
            (0, express_validator_1.body)('organization').notEmpty().withMessage('Organization is required'),
            (0, express_validator_1.body)('department').notEmpty().withMessage('Department is required'),
            (0, express_validator_1.body)('department_agency').notEmpty().withMessage('Department/Agency is required'),
            (0, express_validator_1.body)('staff_id').optional(),
            (0, express_validator_1.body)('office_location').optional(),
            (0, express_validator_1.body)('remark').optional(),
            (0, express_validator_1.body)('grade').notEmpty().withMessage('Grade is required'),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // destructure after validation (request.body will be populated by body-parser middleware)
        const { fullname, organization, phone_number, email, nin, position, department, department_agency, staff_id, office_location, remark, grade, password } = request.body;
        const existing = await prisma.attendees.findUnique({ where: { email } });
        if (existing) {
            return response.status(400).json({ message: 'Email already registered' });
        }
        const hashedPassword = await argon2.hash(password);
        const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
        const newAttendee = await prisma.attendees.create({
            data: {
                fullname,
                organization,
                phone_number,
                email,
                nin,
                position,
                department,
                department_agency,
                staff_id,
                office_location,
                remark,
                grade,
                password: hashedPassword,
            },
        });
        await (0, emailSender_1.sendWelcomeEmail)(email, 'Welcome to International Civil Service Conference', newAttendee, password);
        const token = jsonwebtoken_1.default.sign({ attendeeId: newAttendee.id, attendee: newAttendee, email: newAttendee.email, fullname: newAttendee.fullname }, config_1.Config.secret);
        return response.status(201).json({ message: 'Attendee registered successfully', token, newAttendee });
    }
    catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function loginAttendee(request, response) {
    // validate input
    await (0, express_validator_1.body)('email').notEmpty().withMessage('email is required').isEmail().withMessage('Invalid email format').bail().isString().run(request);
    await (0, express_validator_1.body)('password').notEmpty().withMessage('password is required').bail().isString().run(request);
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ status: 'fail', errors: errors.array() });
    }
    const { email, password } = request.body;
    try {
        const user = await prisma.attendees.findFirst({
            where: {
                email
            }
        });
        if (!user) {
            return response.status(401).json({ message: 'Invalid credentials' });
        }
        // Check if user password is null
        if (user.password === null) {
            return response.status(401).json({ error: 'Invalid email/username or password' });
        }
        if (!user.password.startsWith('$argon2')) {
            console.error('Password format is invalid:', user.password);
            return response.status(400).json({ message: 'Invalid password format in database' });
        }
        // Verify the password
        const passwordMatch = await argon2.verify(user.password, password);
        if (!passwordMatch) {
            response.status(401).json({ error: 'Invalid email or password' });
            return;
        }
        if (!config_1.Config.secret) {
            console.error('Jwt_secret is not defined!');
            response.status(500).json({ message: 'Internal Server Error' });
            return;
        }
        // Generate a JWT token for the admin
        const token = jsonwebtoken_1.default.sign({
            id: user.id,
            organization: user.organization,
            email: user.email,
            fullname: user.fullname,
            role: user.role,
            user
        }, config_1.Config.secret, { expiresIn: '24h' } // Add token expiration
        );
        response.status(200).json({
            token,
            success: true,
            message: 'Login successful',
            user
        });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
}
async function logoutAttendee(request, response) {
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
