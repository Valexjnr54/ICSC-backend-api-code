// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../models';
import { Config } from '../../config/config';
import { body, validationResult } from "express-validator";
import bcrypt from 'bcrypt';
import { validateRequestBody } from '../../utils/requestValidator';
import { sendWelcomeEmail } from '../../utils/emailSender';

const prisma = new PrismaClient();

export async function registerAttendee(request: Request, response: Response) {
    try {
        // Run validation before accessing request.body
        const validationRules = [
          body('firstName').notEmpty().withMessage('Full Name is required'),
          body('lastName').notEmpty().withMessage('Full Name is required'),
          body('phone_number').notEmpty().withMessage('Phone Number is required'),
          body('jobTitle').notEmpty().withMessage('Job Title is required'),
          // nin is optional — don't attach a "required" message to an optional validator
          body('nin').optional(),
          body('email').isEmail().withMessage('Invalid email address'),
          body('position').optional().notEmpty().withMessage('Position is required'),
          body('organization').optional().notEmpty().withMessage('Organization is required'),
          body('department').optional().notEmpty().withMessage('Department is required'),
          body('department_agency').optional().notEmpty().withMessage('Department/Agency is required'),
          body('staff_id').optional(),
          body('office_location').optional(),
          body('remark').optional(),
          body('grade').optional().notEmpty().withMessage('Grade is required'),
          body('password').notEmpty().withMessage('Password is required').bail().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));
    
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
          return response.status(400).json({ errors: errors.array() });
        }
    
        // destructure after validation (request.body will be populated by body-parser middleware)
        const { firstName, lastName, organization, phone_number, email, nin, position, jobTitle,
            department, department_agency, staff_id, office_location, remark, grade, password
         } = request.body;
    
        const existing = await prisma.attendees.findUnique({ where: { email } });
        if (existing) {
          return response.status(400).json({ message: 'Email already registered' });
        }

        const fullname = `${firstName} ${lastName}`;
        
        const hashedPassword = await bcrypt.hash(password, 10);
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
    
        await sendWelcomeEmail(email, 'Welcome to International Civil Service Conference', newAttendee, password);

        const token = jwt.sign({ attendeeId: newAttendee.id, attendee: newAttendee, email: newAttendee.email, fullname: newAttendee.fullname }, Config.secret);

        return response.status(201).json({ message: 'Attendee registered successfully', token, newAttendee });
      } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
      }
}

export async function loginAttendee(request: Request, response: Response) {
    // validate input
    await body('email').notEmpty().withMessage('email is required').isEmail().withMessage('Invalid email format').bail().isString().run(request);
    await body('password').notEmpty().withMessage('password is required').bail().isString().run(request);

    const errors = validationResult(request);
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
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            response.status(401).json({ error: 'Invalid email or password' });
            return;
        }

        if (!Config.secret) {
            console.error('Jwt_secret is not defined!');
            response.status(500).json({ message: 'Internal Server Error' });
            return;
        }

        if (!user.status || user.status !== 'Approved') {
            console.error('Account Not Approved:', user.password);
            return response.status(400).json({ message: 'Account Not Approved' });
        }

        // Generate a JWT token for the admin
        const token = jwt.sign({ 
            id: user.id, 
            organization: user.organization,
            email: user.email,
            fullname: user.fullname,
            role: user.role,
            user
        }, 
            Config.secret,
            { expiresIn: '24h' } // Add token expiration
        );

        response.status(200).json({ 
            token,
            success: true,
            message: 'Login successful',
            user
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function logoutAttendee(request: Request, response: Response) {
    try {
        // If you are using JWT tokens, you can clear the token on the client side by removing it from cookies or local storage.
        // Here, we'll focus on clearing the token from cookies.

        // Clear the JWT token from the client-side cookies
        response.clearCookie('jwt');

        // Optionally, you can perform additional tasks here, such as logging the Admin's logout action.

        // Send a success response to the client
        response.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        // Handle any potential errors that may occur during the logout process.
        console.error('Error during logout:', error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
}