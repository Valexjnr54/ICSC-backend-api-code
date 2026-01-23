// src/controllers/authController.ts
import { Request, Response } from "express";
import { PrismaClient } from "../../models";
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { body, validationResult } from "express-validator";
import { sendVerificationEmail, sendWelcomeEmail } from "../../utils/emailSender";

const prisma = new PrismaClient();

function generateTempPassword(): string {
  return crypto.randomBytes(5).toString('hex'); // 10 characters
}

export async function createPartner(request: Request, response: Response) {
  const admin_id = (request as any).admin?.adminId;

  // Check admin presence early
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }
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
            body('package_id').notEmpty().withMessage('Package ID is required'),
            body('package_status').notEmpty().withMessage('Package status is required'),
            body('status').notEmpty().withMessage('Status is required'),
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
            jobTitle,
            country,
            package_id,
            package_status,
            status,
        } = request.body;

        const existing = await prisma.partner.findUnique({ where: { email: contactEmail } });
        if (existing) {
            return response.status(400).json({ message: 'Email already registered' });
        }

        const password = generateTempPassword();

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

        await prisma.eventPartnerPackages.create({
            data: {
            event_partner_id: newPartner.id,
            event_package_id: parseInt(package_id),
            payment_reference: password,
            payment_method: 'manual',
            payment_status: 'Paid',
            }
        });
        
        try { await sendWelcomeEmail(contactEmail, 'Welcome to International Civil Service Conference', newPartner, password); } catch (e) { console.warn('sendWelcomeEmail failed', e); }

    return response.status(201).json({ message: 'Event partner registered successfully', partner: newPartner });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function allPartners(request: Request, response: Response) {
    const admin_id = request.admin.adminId;

  // Check if event_partners_id is not present or undefined
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the event_partners by event_partners_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'Logged in User'
    if (role !== 'super_admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const allPartners = await prisma.partner.findMany({ include: { EventPartnerPackages: { include: { event_package: true } } } }) as any;

    return response.status(200).json({message: 'EventPartner(s) fetched', data: allPartners });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function singlePartner(request: Request, response: Response) {
  const idParam = request.query.partner_id as string | undefined;
  const id: number = idParam ? parseInt(idParam, 10) : NaN;
  const admin_id = (request as any).admin?.adminId;

  // Check admin presence
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  if (!idParam || isNaN(id)) {
    return response.status(400).json({ message: 'Valid Partner ID required' });
  }

    try {
    // Retrieve the event_partners by event_partners_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'EventPartner'
    if (role !== 'super_admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

  const singlePartner = await prisma.partner.findUnique({ where: { id } }) as any;
  if (!singlePartner) {
    return response.status(404).json({ message: 'Partner not found' });
  }

  return response.status(200).json({message: 'Partner fetched', data: { ...singlePartner } });
    } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function deletePartner (request: Request, response: Response) {
    const idParam = request.query.partner_id as string | undefined;
    const id: number = idParam ? parseInt(idParam, 10) : NaN;
    const admin_id = (request as any).admin?.adminId;

      // Check admin presence
      if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
      }

      if (!idParam || isNaN(id)) {
        return response.status(400).json({ message: 'Valid EventPartner ID required' });
      }
    
      try {
        // Retrieve the event_partners by event_partners_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
    
        // Check if the role is not 'EventPartner'
        if (role !== 'super_admin') {
          return response.status(403).json({ message: 'Unauthorized User' });
        }


        const partner = await prisma.partner.findUnique({ where: { id } }) as any;

        if (!partner) {
          return response.status(404).json({ message: 'Record not found' });
        }

        const deletePartner = await prisma.partner.delete({ where: { id } }) as any;
        if (!deletePartner) {
          return response.status(403).json({ message: 'Unable to delete Partner' });
        }
        return response.status(200).json({ message: 'Partner was deleted successfully', data: deletePartner });
      } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
      }
}