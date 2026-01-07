// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../models';
import { Config } from '../../config/config';
import { body, validationResult } from "express-validator";
import bcrypt from 'bcrypt';
import { validateRequestBody } from '../../utils/requestValidator';

const prisma = new PrismaClient();

export async function registerExhibitor(request: Request, response: Response) {
	try {
		// Validate request using frontend field names
		const validationRules = [
			body('exhibitorName').notEmpty().withMessage('Company/Organization name is required'),
			body('exhibitorFirstName').notEmpty().withMessage('Contact first name is required'),
			body('exhibitorLastName').notEmpty().withMessage('Contact last name is required'),
			body('exhibitorEmail').isEmail().withMessage('Invalid contact email'),
			body('exhibitorPhone').notEmpty().withMessage('Contact phone is required'),
			body('password').notEmpty().withMessage('Password is required').bail().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
			body('exhibitorWebsite').optional(),
			body('exhibitorDescription').notEmpty().withMessage('Company/Organization description is required'),
			body('exhibitorProducts').optional(),
			body('exhibitorPrefix').optional(),
		];
		await Promise.all(validationRules.map(rule => rule.run(request)));

		const errors = validationResult(request);
		if (!errors.isEmpty()) {
			return response.status(400).json({ errors: errors.array() });
		}

		// Map frontend fields to DB fields
		const {
			exhibitorPrefix,
			exhibitorName,
			exhibitorFirstName,
			exhibitorLastName,
			exhibitorEmail,
			exhibitorPhone,
			exhibitorWebsite,
			exhibitorDescription,
			exhibitorProducts,
			password,
		} = request.body;

		const existing = await prisma.exhibitors.findUnique({ where: { contact_email: exhibitorEmail } });
		if (existing) {
			return response.status(400).json({ message: 'Email already registered' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

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

		if (!Config.secret) {
			console.error('Jwt secret is not defined');
			return response.status(500).json({ message: 'Internal Server Error' });
		}

		const token = jwt.sign({ id: newExhibitor.id, contact_email: newExhibitor.contact_email, company_name: newExhibitor.company_name }, Config.secret, { expiresIn: '24h' });

		return response.status(201).json({ message: 'Exhibitor registered successfully', token, exhibitor: newExhibitor });
	} catch (error) {
		console.error(error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function loginExhibitor(request: Request, response: Response) {
	await body('email').notEmpty().withMessage('email is required').isEmail().withMessage('Invalid email format').bail().isString().run(request);
	await body('password').notEmpty().withMessage('password is required').bail().isString().run(request);

	const errors = validationResult(request);
	if (!errors.isEmpty()) {
		return response.status(422).json({ status: 'fail', errors: errors.array() });
	}

	const { email, password } = request.body;
	try {
		const exhibitor = await prisma.exhibitors.findFirst({ where: { contact_email:email } });
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

		const passwordMatch = await bcrypt.compare(password, exhibitor.password);
		if (!passwordMatch) {
			return response.status(401).json({ error: 'Invalid email or password' });
		}

		if (!Config.secret) {
			console.error('Jwt secret is not defined');
			return response.status(500).json({ message: 'Internal Server Error' });
		}

		const token = jwt.sign({ id: exhibitor.id, contact_email: exhibitor.contact_email, company_name: exhibitor.company_name }, Config.secret, { expiresIn: '24h' });

		return response.status(200).json({ token, success: true, message: 'Login successful', exhibitor });
	} catch (error) {
		console.error(error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function logoutExhibitor(request: Request, response: Response) {
	try {
		response.clearCookie('jwt');
		return response.status(200).json({ message: 'Logout successful' });
	} catch (error) {
		console.error('Error during logout:', error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}