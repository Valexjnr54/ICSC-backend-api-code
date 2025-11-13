// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../models';
import { Config } from '../../config/config';
import { body, validationResult } from "express-validator";
import * as argon2 from 'argon2';
import { sendWelcomeEmail } from '../../utils/emailSender';

const prisma = new PrismaClient();

export async function registerEventPartner(request: Request, response: Response) {
	try {
		// Validate request using frontend field names
		const validationRules = [
			body('companyName').notEmpty().withMessage('Company/Organization name is required'),
			body('contactFirstName').notEmpty().withMessage('Contact first name is required'),
			body('contactLastName').notEmpty().withMessage('Contact last name is required'),
			body('contactEmail').isEmail().withMessage('Invalid contact email'),
			body('contactPhone').notEmpty().withMessage('Contact phone is required'),
			body('password').notEmpty().withMessage('Password is required').bail().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
			body('companyLogo').optional(),
			body('website').optional(),
			body('socialMedia').optional(),
			body('partnerDescription').optional(),
			body('partnerInterest').optional(),
		];
		await Promise.all(validationRules.map(rule => rule.run(request)));

		const errors = validationResult(request);
		if (!errors.isEmpty()) {
			return response.status(400).json({ errors: errors.array() });
		}

		// Map frontend fields to DB fields
		const {
			companyPrefix,
			companyName,
			companyLogo,
			contactFirstName,
			contactLastName,
			contactEmail,
			contactPhone,
			website,
			socialMedia,
			partnerDescription,
			partnerInterest,
			password,
		} = request.body;

		const existing = await prisma.eventPartners.findUnique({ where: { email: contactEmail } });
		if (existing) {
			return response.status(400).json({ message: 'Email already registered' });
		}

		const hashedPassword = await argon2.hash(password);

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
		try { await sendWelcomeEmail(contactEmail, 'Welcome to International Civil Service Conference', newPartner, password); } catch (e) { console.warn('sendWelcomeEmail failed', e); }

		if (!Config.secret) {
			console.error('Jwt secret is not defined');
			return response.status(500).json({ message: 'Internal Server Error' });
		}

		const token = jwt.sign({ id: newPartner.id, email: newPartner.email, fullname: newPartner.fullname, company_name: newPartner.company_name }, Config.secret, { expiresIn: '24h' });

		return response.status(201).json({ message: 'Event partner registered successfully', token, partner: newPartner });
	} catch (error) {
		console.error(error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function loginEventPartner(request: Request, response: Response) {
	// validate input
	await body('email').notEmpty().withMessage('email is required').isEmail().withMessage('Invalid email format').bail().isString().run(request);
	await body('password').notEmpty().withMessage('password is required').bail().isString().run(request);

	const errors = validationResult(request);
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

		if (!Config.secret) {
			console.error('Jwt secret is not defined');
			return response.status(500).json({ message: 'Internal Server Error' });
		}

		const token = jwt.sign({ id: partner.id, email: partner.email, fullname: partner.fullname, company_name: partner.company_name }, Config.secret, { expiresIn: '24h' });

		return response.status(200).json({ token, success: true, message: 'Login successful', partner });
	} catch (error) {
		console.error(error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function logoutEventPartner(request: Request, response: Response) {
	try {
		response.clearCookie('jwt');
		return response.status(200).json({ message: 'Logout successful' });
	} catch (error) {
		console.error('Error during logout:', error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}