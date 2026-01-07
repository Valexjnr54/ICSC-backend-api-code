// src/controllers/authController.ts
import { Request, Response } from "express";
import { PrismaClient } from "../../models";
import crypto from 'crypto';
import * as argon2 from 'argon2';
import { body, validationResult } from "express-validator";
import { sendVerificationEmail, sendWelcomeEmail } from "../../utils/emailSender";

const prisma = new PrismaClient();

function generateTempPassword(): string {
  return crypto.randomBytes(5).toString('hex'); // 10 characters
}

// Resolve the creator (Admin or Users) from the polymorphic created_by fields
// Speakers model does not have polymorphic created_by fields in the schema.
// Keep resolveCreator in case other controllers reuse it, but speakers won't use it.
async function resolveCreator(created_by_type: string | undefined, created_by_id: number | null | undefined) {
  if (!created_by_type || !created_by_id) return null;
  if (created_by_type === 'ADMIN') {
    return prisma.admin.findUnique({ where: { id: created_by_id } });
  }
  if (created_by_type === 'USER') {
    return prisma.users.findUnique({ where: { id: created_by_id } });
  }
  return null;
}

export async function createSpeaker(request: Request, response: Response) {
  const admin_id = request.admin.adminId;

  // Check admin presence early
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }
  try {
    // Run validation before accessing request.body
    // Validation rules aligned with the Prisma `Speakers` model
    const validationRules = [
      body('first_name').notEmpty().withMessage('First name is required'),
      body('last_name').notEmpty().withMessage('Last name is required'),
      body('work_email').isEmail().withMessage('Valid work email is required'),
      body('phone').notEmpty().withMessage('Phone is required'),
      body('organization').notEmpty().withMessage('Organization is required'),
      body('job_title').notEmpty().withMessage('Job title is required'),
      body('bio').notEmpty().withMessage('Bio is required'),
      body('topic').notEmpty().withMessage('Topic is required'),
      body('status')
        .optional()
        .isIn(['Pending', 'Approved', 'Rejected']).withMessage('Status must be one of: Pending, Approved, Rejected'),
      body('country').optional(),
      body('experience').optional(),
    ];
    await Promise.all(validationRules.map(rule => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    // destructure after validation (request.body will be populated by body-parser middleware)
    const { first_name, last_name, work_email, phone, organization, job_title, bio, topic, status, country, experience, social_media } = request.body;
    // Retrieve the speakers by speakers_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const admin_role = check_admin?.role;

    // Check if the role is not 'Speaker'
    if (admin_role !== 'super_admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    // `work_email` is the unique email field in the Speakers model
    const existing = await prisma.speakers.findUnique({ where: { work_email } });
    if (existing) {
      return response.status(400).json({ message: 'Email already registered' });
    }

    const password = generateTempPassword();
    const hashedPassword = await argon2.hash(password);
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    const fullname = `${first_name} ${last_name}`;

    const newSpeaker = await prisma.speakers.create({
      data: {
        first_name,
        last_name,
        fullname,
        country: country || '',
        job_title,
        organization,
        phone,
        social_media: social_media || undefined,
        work_email,
        bio,
        topic,
        experience: experience || undefined,
        password: hashedPassword,
        status: (status as any) || undefined,
      },
    });

    // await sendWelcomeEmail(work_email, 'Welcome to International Civil Service Conference', newSpeaker, password);

    return response.status(201).json({ message: 'Speaker created successfully', data: newSpeaker });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function allSpeakers(request: Request, response: Response) {
    const admin_id = request.admin.adminId;

  // Check if speakers_id is not present or undefined
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the speakers by speakers_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'Logged in User'
    if (role !== 'super_admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const allSpeakers = await prisma.speakers.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return response.status(200).json({message: 'Speaker(s) fetched', data: allSpeakers });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function singleSpeaker(request: Request, response: Response) {
    const id: number = parseInt(request.query.speaker_id as string, 10)
    const admin_id = request.admin.adminId;

    // Check if speakers_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    if (!id) {
        return response.status(403).json({ message: 'Speaker ID required' });
    }

    try {
    // Retrieve the speakers by speakers_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'Speaker'
    if (role !== 'super_admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

  const singleSpeaker = await prisma.speakers.findUnique({ where: { id } });
  if (!singleSpeaker) {
    return response.status(404).json({ message: 'Speaker not found' });
  }
  return response.status(200).json({message: 'Speaker fetched', data: singleSpeaker });
    } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function deleteSpeaker (request: Request, response: Response) {
    const id: number = parseInt(request.query.speaker_id as string, 10)
      const admin_id = request.admin.adminId;
    
      // Check if speakers_id is not present or undefined
      if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
      }

      if (!id) {
        return response.status(403).json({ message: 'Speaker ID required' });
      }
    
      try {
        // Retrieve the speakers by speakers_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
    
        // Check if the role is not 'Speaker'
        if (role !== 'super_admin') {
          return response.status(403).json({ message: 'Unauthorized User' });
        }

        const speakers = await prisma.speakers.findUnique({
            where:{id}
        });

        if (!speakers) {
            return response.status(404).json({ message: 'Record not found' });
        }
    
        // Create a new delivery entry in the database
        const deleteSpeaker = await prisma.speakers.delete({
          where:{
            id
          },
        });
        if (!deleteSpeaker) {
          return response.status(403).json({ message: 'Unable to delete Speaker' });
        }
        return response.status(200).json({ message: 'Speaker was deleted successfully', data: deleteSpeaker });
      } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
      }
}