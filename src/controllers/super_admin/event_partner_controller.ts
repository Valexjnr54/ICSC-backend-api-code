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

export async function createEventPartner(request: Request, response: Response) {
  const admin_id = (request as any).admin?.adminId;

  // Check admin presence early
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }
  try {
    // Run validation before accessing request.body
    const validationRules = [
      body('fullname').notEmpty().withMessage('Full Name is required'),
      body('phone_number').notEmpty().withMessage('Phone Number is required'),
      // nin is optional — don't attach a "required" message to an optional validator
      body('nin').optional(),
      body('email').isEmail().withMessage('Invalid email address'),
      body('position').notEmpty().withMessage('Position is required'),
      body('organization').notEmpty().withMessage('Organization is required'),
      body('department').notEmpty().withMessage('Department is required'),
      body('department_agency').notEmpty().withMessage('Department/Agency is required'),
      body('staff_id').optional(),
      body('office_location').optional(),
      body('remark').optional(),
      // Status must be one of the Prisma Status enum values
      body('status')
        .notEmpty().withMessage('Status is required')
        .bail()
        .isIn(['Pending', 'Approved', 'Rejected']).withMessage('Status must be one of: Pending, Approved, Rejected'),
      body('grade').notEmpty().withMessage('Grade is required'),
    ];
    await Promise.all(validationRules.map(rule => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    // destructure after validation (request.body will be populated by body-parser middleware)
    const { fullname, organization, phone_number, email, nin, position,
        department, department_agency, staff_id, office_location, remark, status, grade
     } = request.body;
    // Retrieve the event_partners by event_partners_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const admin_role = check_admin?.role;

    // Check if the role is not 'EventPartner'
    if (admin_role !== 'super_admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    const existing = await prisma.eventPartners.findUnique({ where: { email } });
    if (existing) {
      return response.status(400).json({ message: 'Email already registered' });
    }

    const password = generateTempPassword();
    const hashedPassword = await argon2.hash(password);

    const newEventPartner = await prisma.eventPartners.create({
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
        status,
        grade,
        password: hashedPassword,
        created_by_id: admin_id,
        created_by_type: 'ADMIN',
      } as any,
    } as any);

    // await sendWelcomeEmail(email, 'Welcome to International Civil Service Conference', newEventPartner, password);

    // Attach creator details to the response (hide sensitive fields like password)
    const creator = await resolveCreator((newEventPartner as any)['created_by_type'], (newEventPartner as any)['created_by_id']);
    const { password: _pw, ...newEventPartnerSafe } = newEventPartner as any;

    return response.status(201).json({ message: 'EventPartner created successfully', data: { ...newEventPartnerSafe, created_by: creator } });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function allEventPartners(request: Request, response: Response) {
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

    const allEventPartners = await prisma.eventPartners.findMany({ orderBy: { createdAt: 'desc' } }) as any;

    // Resolve creators for each event_partner
    const event_partnersWithCreators = await Promise.all(allEventPartners.map(async (att: any) => {
      const creator = await resolveCreator(att['created_by_type'], att['created_by_id']);
      return { ...att, created_by: creator };
    }));

    return response.status(200).json({message: 'EventPartner(s) fetched', data: event_partnersWithCreators });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function singleEventPartner(request: Request, response: Response) {
  const idParam = request.query.event_partner_id as string | undefined;
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

  const singleEventPartner = await prisma.eventPartners.findUnique({ where: { id } }) as any;
  if (!singleEventPartner) {
    return response.status(404).json({ message: 'EventPartner not found' });
  }

  const creator = await resolveCreator(singleEventPartner['created_by_type'], singleEventPartner['created_by_id']);
  return response.status(200).json({message: 'EventPartner fetched', data: { ...singleEventPartner, created_by: creator } });
    } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function deleteEventPartner (request: Request, response: Response) {
    const idParam = request.query.event_partner_id as string | undefined;
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


        const event_partners = await prisma.eventPartners.findUnique({ where: { id } }) as any;

        if (!event_partners) {
          return response.status(404).json({ message: 'Record not found' });
        }
    
        const deleteEventPartner = await prisma.eventPartners.delete({ where: { id } }) as any;
        if (!deleteEventPartner) {
          return response.status(403).json({ message: 'Unable to delete EventPartner' });
        }
        return response.status(200).json({ message: 'EventPartner was deleted successfully', data: deleteEventPartner });
      } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
      }
}