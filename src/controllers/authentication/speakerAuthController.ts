// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../models';
import { Config } from '../../config/config';
import { body, validationResult } from "express-validator";
import * as argon2 from 'argon2';
import { sendWelcomeEmail } from '../../utils/emailSender';

const prisma = new PrismaClient();

export async function registerSpeaker(request: Request, response: Response) {
	try {
		// Validate incoming request using frontend field names
		const validationRules = [
			body('speakerPrefix').optional(),
			body('speakerFirstName').notEmpty().withMessage('First name is required'),
			body('speakerLastName').notEmpty().withMessage('Last name is required'),
			body('speakerCountry').notEmpty().withMessage('Country is required'),
			body('speakerJobTitle').notEmpty().withMessage('Job title is required'),
			body('speakerOrganization').notEmpty().withMessage('Organization is required'),
			body('speakerPhone').notEmpty().withMessage('Work phone is required'),
			body('socialMedia').optional(),
			body('speakerWorkEmail').isEmail().withMessage('Invalid work email'),
			body('speakerBio').notEmpty().withMessage('Bio is required'),
			body('speakertopic').notEmpty().withMessage('Proposed topic is required'),
			body('speakerExperience').optional(),
			body('password').notEmpty().withMessage('Password is required').bail().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
		];
		await Promise.all(validationRules.map(rule => rule.run(request)));

		const errors = validationResult(request);
		if (!errors.isEmpty()) {
			return response.status(400).json({ errors: errors.array() });
		}

		// Map frontend fields
		const {
			speakerPrefix,
			speakerFirstName,
			speakerLastName,
			speakerCountry,
			speakerJobTitle,
			speakerOrganization,
			speakerPhone,
			socialMedia,
			speakerWorkEmail,
			speakerBio,
			speakertopic,
			speakerExperience,
			password,
		} = request.body;

		// Check existing by work_email
		const existing = await prisma.speakers.findUnique({ where: { work_email: speakerWorkEmail } });
		if (existing) {
			return response.status(400).json({ message: 'Work email already registered' });
		}

		const hashedPassword = await argon2.hash(password);

		const fullname = `${speakerFirstName.trim()} ${speakerLastName.trim()}`.trim();

		// Safely handle socialMedia: if it's a JSON string attempt to parse, otherwise store as-is
		let socialMediaValue: any = null;
		if (socialMedia) {
			if (typeof socialMedia === 'string') {
				try {
					socialMediaValue = JSON.parse(socialMedia);
				} catch (e) {
					// not JSON, store raw string
					socialMediaValue = socialMedia;
				}
			} else {
				socialMediaValue = socialMedia;
			}
		}

		const newSpeaker = await prisma.speakers.create({
			data: {
				prefix: speakerPrefix || null,
				first_name: speakerFirstName,
				last_name: speakerLastName,
				fullname,
				country: speakerCountry,
				job_title: speakerJobTitle,
				organization: speakerOrganization,
				phone: speakerPhone,
				social_media: socialMediaValue,
				work_email: speakerWorkEmail,
				bio: speakerBio,
				topic: speakertopic,
				experience: speakerExperience || null,
				password: hashedPassword,
			}
		});

		// optional welcome email (non-blocking)
		// try { await sendWelcomeEmail(speakerWorkEmail, 'Welcome to ICSC Speakers', newSpeaker, password); } catch (e) { console.warn('sendWelcomeEmail failed', e); }

		if (!Config.secret) {
			console.error('Jwt secret is not defined');
			return response.status(500).json({ message: 'Internal Server Error' });
		}

		const token = jwt.sign({ id: newSpeaker.id, email: newSpeaker.work_email, fullname: newSpeaker.fullname, organization: newSpeaker.organization }, Config.secret, { expiresIn: '24h' });

		return response.status(201).json({ message: 'Speaker registered successfully', token, speaker: newSpeaker });
	} catch (error) {
		console.error(error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function loginSpeaker(request: Request, response: Response) {
	await body('email').notEmpty().withMessage('workEmail is required').isEmail().withMessage('Invalid email format').bail().isString().run(request);
	await body('password').notEmpty().withMessage('password is required').bail().isString().run(request);

	const errors = validationResult(request);
	if (!errors.isEmpty()) {
		return response.status(422).json({ status: 'fail', errors: errors.array() });
	}

	const { email, password } = request.body;
	try {
		const speaker = await prisma.speakers.findFirst({ where: { work_email: email } });
		if (!speaker) {
			return response.status(401).json({ message: 'Invalid credentials' });
		}

		if (speaker.password === null) {
			return response.status(401).json({ error: 'Invalid email or password' });
		}

		if (!speaker.password.startsWith('$argon2')) {
			console.error('Password format invalid for speaker:', speaker.password);
			return response.status(400).json({ message: 'Invalid password format in database' });
		}

		const passwordMatch = await argon2.verify(speaker.password, password);
		if (!passwordMatch) {
			return response.status(401).json({ error: 'Invalid email or password' });
		}

		if (!Config.secret) {
			console.error('Jwt secret is not defined');
			return response.status(500).json({ message: 'Internal Server Error' });
		}

		const token = jwt.sign({ id: speaker.id, email: speaker.work_email, fullname: speaker.fullname, organization: speaker.organization }, Config.secret, { expiresIn: '24h' });

		return response.status(200).json({ token, success: true, message: 'Login successful', speaker });
	} catch (error) {
		console.error(error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function logoutSpeaker(request: Request, response: Response) {
	try {
		response.clearCookie('jwt');
		return response.status(200).json({ message: 'Logout successful' });
	} catch (error) {
		console.error('Error during logout:', error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}