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

export async function createAttendee(request: Request, response: Response) {
  const admin_id = request.admin.adminId;

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
    // Retrieve the attendees by attendees_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const admin_role = check_admin?.role;

    // Check if the role is not 'Attendee'
    if (admin_role !== 'super_admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    const existing = await prisma.attendees.findUnique({ where: { email } });
    if (existing) {
      return response.status(400).json({ message: 'Email already registered' });
    }

    const password = generateTempPassword();
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
        status,
        grade,
        password: hashedPassword,
        created_by_id: admin_id,
        created_by_type: 'ADMIN',
      },
    });

    await sendWelcomeEmail(email, 'Welcome to International Civil Service Conference', newAttendee, password);

    // Attach creator details to the response
    const creator = await resolveCreator(newAttendee.created_by_type as any, newAttendee.created_by_id as any);

    return response.status(201).json({ message: 'Attendee created successfully', data: { ...newAttendee, created_by: creator } });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function allAttendees(request: Request, response: Response) {
    const admin_id = request.admin.adminId;

  // Check if attendees_id is not present or undefined
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the attendees by attendees_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'Logged in User'
    if (role !== 'super_admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const allAttendees = await prisma.attendees.findMany({
      orderBy: { createdAt: 'desc' }
    });

    // Resolve creators for each attendee
    const attendeesWithCreators = await Promise.all(allAttendees.map(async (att) => {
      const creator = await resolveCreator(att.created_by_type as any, att.created_by_id as any);
      return { ...att, created_by: creator };
    }));

    return response.status(200).json({message: 'Attendee(s) fetched', data: attendeesWithCreators });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function singleAttendee(request: Request, response: Response) {
    const id: number = parseInt(request.query.attendee_id as string, 10)
    const admin_id = request.admin.adminId;

    // Check if attendees_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    if (!id) {
        return response.status(403).json({ message: 'Attendee ID required' });
    }

    try {
    // Retrieve the attendees by attendees_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'Attendee'
    if (role !== 'super_admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

  const singleAttendee = await prisma.attendees.findUnique({
    where: {
      id: id
    },
  });
  if (!singleAttendee) {
    return response.status(404).json({ message: 'Attendee not found' });
  }

  const creator = await resolveCreator(singleAttendee.created_by_type as any, singleAttendee.created_by_id as any);
  return response.status(200).json({message: 'Attendee fetched', data: { ...singleAttendee, created_by: creator } });
    } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function deleteAttendee (request: Request, response: Response) {
    const id: number = parseInt(request.query.attendee_id as string, 10)
      const admin_id = request.admin.adminId;
    
      // Check if attendees_id is not present or undefined
      if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
      }

      if (!id) {
        return response.status(403).json({ message: 'Attendee ID required' });
      }
    
      try {
        // Retrieve the attendees by attendees_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
    
        // Check if the role is not 'Attendee'
        if (role !== 'super_admin') {
          return response.status(403).json({ message: 'Unauthorized User' });
        }

        const attendees = await prisma.attendees.findUnique({
            where:{id}
        });

        if (!attendees) {
            return response.status(404).json({ message: 'Record not found' });
        }
    
        // Create a new delivery entry in the database
        const deleteAttendee = await prisma.attendees.delete({
          where:{
            id
          },
        });
        if (!deleteAttendee) {
          return response.status(403).json({ message: 'Unable to delete Attendee' });
        }
        return response.status(200).json({ message: 'Attendee was deleted successfully', data: deleteAttendee });
      } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
      }
}