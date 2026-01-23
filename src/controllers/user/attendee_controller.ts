// src/controllers/authController.ts
import { Request, Response } from "express";
import { PrismaClient } from "../../models";
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { body, validationResult } from "express-validator";
import { sendVerificationEmail, sendWelcomeEmail } from "../../utils/emailSender";
import { PassThrough } from "stream";
import csvParser from "csv-parser";

const prisma = new PrismaClient();

function generateTempPassword(): string {
  return crypto.randomBytes(5).toString('hex'); // 10 characters
}

// Resolve the creator (Admin or Users) from the polymorphic created_by fields
async function resolveCreator(created_by_type: string | undefined, created_by_id: number | null | undefined) {
  if (!created_by_type || !created_by_id) return null;
  if (created_by_type === 'ADMIN') {
    return prisma.admin.findUnique({ where: { id: created_by_id }, select:{ fullname: true } });
  }
  if (created_by_type === 'USER') {
    return prisma.users.findUnique({ where: { id: created_by_id }, select:{ contact_person: true } });
  }
  return null;
}

export async function createAttendee(request: Request, response: Response) {
  const admin_id = request.user?.id ?? null;

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
      body('job_title').notEmpty().withMessage('Job Title is required'),
      body('department').notEmpty().withMessage('Department is required'),
      body('department_agency').notEmpty().withMessage('Department/Agency is required'),
      body('staff_id').optional(),
      body('office_location').optional(),
      body('remark').optional(),
      body('grade').notEmpty().withMessage('Grade is required'),
    ];
    await Promise.all(validationRules.map(rule => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    // destructure after validation (request.body will be populated by body-parser middleware)
    const { prefix, fullname, organization, phone_number, email, nin, position,
        department, department_agency, staff_id, office_location, job_title, remark, grade
     } = request.body;
    // Retrieve the attendees by attendees_id
    const check_admin = await prisma.users.findUnique({ where: { id: admin_id } });
    const admin_role = check_admin?.role;

    // Check if the role is not 'Attendee'
    if (admin_role !== 'ministry') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    const existing = await prisma.attendees.findUnique({ where: { email } });
    if (existing) {
      return response.status(400).json({ message: 'Email already registered' });
    }

    const password = generateTempPassword();
    const hashedPassword = await bcrypt.hash(password, 10);
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    const newAttendee = await prisma.attendees.create({
      data: {
        prefix,
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
        job_title,
        remark,
        grade,
        password: hashedPassword,
        created_by_id: admin_id,
        created_by_type: 'USER',
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
    const admin_id = request.user.id;

  // Check if admin_id is not present or undefined
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by admin_id
    const check_admin = await prisma.users.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'ministry'
    if (role !== 'ministry') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const allAttendees = await prisma.attendees.findMany({
        where: { created_by_type: 'USER', created_by_id: admin_id },
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
    const admin_id = request.user?.id ?? null;

    // Check if attendees_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    if (!id) {
        return response.status(403).json({ message: 'Attendee ID required' });
    }

    try {
    // Retrieve the attendees by attendees_id
    const check_admin = await prisma.users.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'Attendee'
    if (role !== 'ministry') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

  const singleAttendee = await prisma.attendees.findUnique({
    where: {
      id: id,
      created_by_id: admin_id
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
      const admin_id = request.user?.id ?? null;
    
      // Check if attendees_id is not present or undefined
      if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
      }

      if (!id) {
        return response.status(403).json({ message: 'Attendee ID required' });
      }
    
      try {
        // Retrieve the attendees by attendees_id
        const check_admin = await prisma.users.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
    
        // Check if the role is not 'Attendee'
        if (role !== 'ministry') {
          return response.status(403).json({ message: 'Unauthorized User' });
        }

        const attendees = await prisma.attendees.findUnique({
            where:{id, created_by_id: admin_id}
        });

        if (!attendees) {
            return response.status(404).json({ message: 'Record not found' });
        }
    
        // Create a new delivery entry in the database
        const deleteAttendee = await prisma.attendees.delete({
          where:{
            id,
            created_by_id: admin_id
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

export async function uploadAttendeesCSV(request: Request, response: Response) {
  const admin_id = request.user?.id;

  if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

  try {
    const check_admin = await prisma.users.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;
    if (role !== 'ministry') return response.status(403).json({ message: 'Unauthorized User' });

    const file = (request as any).file;
    if (!file || !file.buffer) return response.status(400).json({ message: 'CSV file is required' });

    const rows: any[] = [];
    const errors: any[] = [];
    const created: any[] = [];

    await new Promise<void>((resolve, reject) => {
      const stream = new PassThrough();
      stream.end(file.buffer);
      stream.pipe(csvParser())
        .on('data', (data: any) => {
          rows.push(data);
        })
        .on('end', () => resolve())
        .on('error', (err: any) => reject(err));
    });

    for (const [idx, raw] of rows.entries()) {
      // Normalize keys: trim and lower-case column names
      const row: any = {};
      Object.keys(raw).forEach(k => { row[k.trim().toLowerCase()] = String(raw[k]).trim(); });

      const required = ['firstname','lastname','phone_number','email','position','ministry','jobtitle','department','department_agency','grade'];
      const missing = required.filter(r => !row[r] || row[r] === '');
      if (missing.length) {
        errors.push({ row: idx + 1, error: `Missing required fields: ${missing.join(', ')}` });
        continue;
      }

      // Skip if email already exists
      const existing = await prisma.attendees.findUnique({ where: { email: row.email } });
      if (existing) {
        errors.push({ row: idx + 1, error: `Email already registered: ${row.email}` });
        continue;
      }

      try {
        const password = generateTempPassword();
        const hashedPassword = await bcrypt.hash(password, 10);

        const fullname = `${row.firstname} ${row.lastname}`;

        const newAttendee = await prisma.attendees.create({
          data: {
            prefix: row.prefix,
            fullname: fullname,
            organization: row.ministry,
            phone_number: row.phone_number,
            email: row.email,
            job_title: row.jobtitle,
            position: row.position,
            department: row.department,
            department_agency: row.department_agency,
            staff_id: row.staff_id || null,
            office_location: row.office_location || null,
            remark: row.remark || null,
            grade: row.grade,
            password: hashedPassword,
            created_by_id: admin_id,
            created_by_type: 'USER',
          },
        });

        // send welcome email (do not block loop on failure)
        sendWelcomeEmail(newAttendee.email, 'Welcome to International Civil Service Conference', newAttendee, password)
          .catch(err => console.error('Failed to send welcome email to', newAttendee.email, err));

        created.push({ row: idx + 1, email: newAttendee.email });
      } catch (err: any) {
        console.error('Row creation error', err);
        errors.push({ row: idx + 1, error: err && err.message ? err.message : String(err) });
      }
    }

    return response.status(200).json({ ok: true, status: 'success', message: 'Attendees processed and account created', data: { summary: { total: rows.length, created: created.length, errors: errors.length }, created, errors } });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function downloadAttendeeCSVTemplate(request: Request, response: Response) {
  try {
    // Set headers for CSV download
    response.setHeader('Content-Type', 'text/csv');
    response.setHeader('Content-Disposition', 'attachment; filename="attendee_template.csv"');

    // CSV headers based on the fields used in uploadAttendeesCSV
    const headers = 'prefix,firstname,lastname,ministry,phone_number,email,jobtitle,position,department,department_agency,staff_id,office_location,remark,grade\n';

    // Send the CSV content (headers only for template)
    response.send(headers);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getAttendeeStats(request: Request, response: Response) {
  const admin_id = request.user?.id ?? null;

  // Check if admin_id is not present or undefined
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by admin_id
    const check_admin = await prisma.users.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'ministry'
    if (role !== 'ministry') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    // Get total attendees created by this user
    const totalAttendees = await prisma.attendees.count({
      where: { created_by_type: 'USER', created_by_id: admin_id }
    });

    // Get pending attendees
    const pendingAttendees = await prisma.attendees.count({
      where: { 
        created_by_type: 'USER', 
        created_by_id: admin_id,
        status: 'Pending'
      }
    });

    // Get approved attendees
    const approvedAttendees = await prisma.attendees.count({
      where: { 
        created_by_type: 'USER', 
        created_by_id: admin_id,
        status: 'Approved'
      }
    });

    return response.status(200).json({
      message: 'Attendee stats fetched successfully',
      data: {
        totalAttendees,
        pendingAttendees,
        approvedAttendees
      }
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}