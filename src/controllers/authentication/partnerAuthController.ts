// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../models';
import { Config } from '../../config/config';
import { body, validationResult } from "express-validator";
import bcrypt from 'bcrypt';
import { sendWelcomeEmail } from '../../utils/emailSender';

const prisma = new PrismaClient();

export async function registerPartner(request: Request, response: Response) {
    try {
        // Validate request using frontend field names
        const validationRules = [
            body('companyName').notEmpty().withMessage('Company/Organization/MDA name is required'),
            body('prefix').notEmpty().withMessage('Prefix is required'),
            body('contactFirstName').notEmpty().withMessage('Contact first name is required'),
            body('contactLastName').notEmpty().withMessage('Contact last name is required'),
            body('contactEmail').isEmail().withMessage('Invalid contact email'),
            body('country').notEmpty().withMessage('Country is required'),
            body('jobTitle').notEmpty().withMessage('Job title is required'),
            body('contactPhone').notEmpty().withMessage('Contact phone is required'),
            body('password').notEmpty().withMessage('Password is required').bail().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }

        // Map frontend fields to DB fields (frontend uses these names)
        const {
            prefix,
            companyName,
            contactFirstName,
            contactLastName,
            contactEmail,
            contactPhone,
            password,
            jobTitle,
            country,
        } = request.body;

        const existing = await prisma.partner.findUnique({ where: { email: contactEmail } });
        if (existing) {
            return response.status(400).json({ message: 'Email already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newPartner = await prisma.partner.create({
            data: {
                prefix: prefix || '',
                firstname: contactFirstName || '',
                lastname: contactLastName || '',
                email: contactEmail,
                phone_number: contactPhone || '',
                entity_name: companyName || '',
                password: hashedPassword,
                job_title: jobTitle || '',
                country: country || '',
            }
        });
        
        try { await sendWelcomeEmail(contactEmail, 'Welcome to International Civil Service Conference', newPartner, password); } catch (e) { console.warn('sendWelcomeEmail failed', e); }

        if (!Config.secret) {
            console.error('Jwt secret is not defined');
            return response.status(500).json({ message: 'Internal Server Error' });
        }

        // Build fullname/company name fields for token payload using created record fields
        const fullname = `${newPartner.firstname || ''} ${newPartner.lastname || ''}`.trim();
        const company_name = newPartner.entity_name || '';

        const token = jwt.sign({ id: newPartner.id, email: newPartner.email, fullname, company_name }, Config.secret, { expiresIn: '24h' });

        return response.status(201).json({ message: 'Event partner registered successfully', token, partner: newPartner });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function loginPartner(request: Request, response: Response) {
    // validate input
    await body('email').notEmpty().withMessage('email is required').isEmail().withMessage('Invalid email format').bail().isString().run(request);
    await body('password').notEmpty().withMessage('password is required').bail().isString().run(request);

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ status: 'fail', errors: errors.array() });
    }

    const { email, password } = request.body;
    try {
        const partner = await prisma.partner.findFirst({ where: { email } });
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

        const passwordMatch = await bcrypt.compare(password, partner.password);
        if (!passwordMatch) {
            return response.status(401).json({ error: 'Invalid email or password' });
        }

        if (!Config.secret) {
            console.error('Jwt secret is not defined');
            return response.status(500).json({ message: 'Internal Server Error' });
        }

        const fullname = `${partner.firstname || ''} ${partner.lastname || ''}`.trim();
        const company_name = partner.entity_name || '';
        const token = jwt.sign({ id: partner.id, email: partner.email, fullname, company_name }, Config.secret, { expiresIn: '24h' });

        return response.status(200).json({ token, success: true, message: 'Login successful', partner });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function logoutPartner(request: Request, response: Response) {
    try {
        response.clearCookie('jwt');
        return response.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error during logout:', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}