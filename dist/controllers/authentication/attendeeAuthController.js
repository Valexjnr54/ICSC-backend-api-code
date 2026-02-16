"use strict";
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
const bcrypt_1 = __importDefault(require("bcrypt"));
const emailSender_1 = require("../../utils/emailSender");
const prisma = new models_1.PrismaClient();
async function registerAttendee(request, response) {
    try {
        // Run validation before accessing request.body
        const validationRules = [
            (0, express_validator_1.body)('firstName').notEmpty().withMessage('Full Name is required'),
            (0, express_validator_1.body)('lastName').notEmpty().withMessage('Full Name is required'),
            (0, express_validator_1.body)('phone_number').notEmpty().withMessage('Phone Number is required'),
            (0, express_validator_1.body)('jobTitle').notEmpty().withMessage('Job Title is required'),
            // nin is optional — don't attach a "required" message to an optional validator
            (0, express_validator_1.body)('nin').optional(),
            (0, express_validator_1.body)('email').isEmail().withMessage('Invalid email address'),
            (0, express_validator_1.body)('position').optional().notEmpty().withMessage('Position is required'),
            (0, express_validator_1.body)('organization').optional().notEmpty().withMessage('Organization is required'),
            (0, express_validator_1.body)('department').optional().notEmpty().withMessage('Department is required'),
            (0, express_validator_1.body)('department_agency').optional().notEmpty().withMessage('Department/Agency is required'),
            (0, express_validator_1.body)('staff_id').optional(),
            (0, express_validator_1.body)('office_location').optional(),
            (0, express_validator_1.body)('remark').optional(),
            (0, express_validator_1.body)('grade').optional().notEmpty().withMessage('Grade is required'),
            (0, express_validator_1.body)('password').notEmpty().withMessage('Password is required').bail().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        // destructure after validation (request.body will be populated by body-parser middleware)
        const { firstName, lastName, organization, phone_number, email, nin, position, jobTitle, department, department_agency, staff_id, office_location, remark, grade, password } = request.body;
        const existing = await prisma.attendees.findUnique({ where: { email } });
        if (existing) {
            return response.status(400).json({ message: 'Email already registered' });
        }
        const fullname = `${firstName} ${lastName}`;
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
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
                job_title: jobTitle,
                staff_id,
                office_location,
                remark,
                grade,
                password: hashedPassword,
                temporal_password: false,
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
        if (!user.password.startsWith('$2')) {
            console.error('Password format is invalid:', user.password);
            return response.status(400).json({ message: 'Invalid password format in database' });
        }
        // Verify the password
        const passwordMatch = await bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            response.status(401).json({ error: 'Invalid email or password' });
            return;
        }
        if (!config_1.Config.secret) {
            console.error('Jwt_secret is not defined!');
            response.status(500).json({ message: 'Internal Server Error' });
            return;
        }
        // if (!user.status || user.status !== 'Approved') {
        //     console.error('Account Not Approved:', user.password);
        //     return response.status(400).json({ message: 'Account Not Approved' });
        // }
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
