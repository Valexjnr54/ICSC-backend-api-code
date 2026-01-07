// src/controllers/super_admin/exhibitor_controller.ts
import { Request, Response } from "express";
import { PrismaClient } from "../../models";
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();

function generateTempPassword(): string {
  return crypto.randomBytes(5).toString('hex'); // 10 characters
}

// Note: Exhibitors model does not store a polymorphic creator in the schema.
// Controller actions operate on the `Exhibitors` model fields defined in Prisma.

export async function createExhibitor(request: Request, response: Response) {
  const admin_id = request.admin.adminId;

  // Check admin presence early
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }
  try {
    // Run validation before accessing request.body
    const validationRules = [
      body('company_name').notEmpty().withMessage('Company name is required'),
      body('contact_person').notEmpty().withMessage('Contact person is required'),
      body('contact_email').isEmail().withMessage('Invalid contact email'),
      body('contact_phone').notEmpty().withMessage('Contact phone is required'),
      body('website').optional().isURL().withMessage('Website must be a valid URL'),
      body('description').optional(),
      body('service_product_to_exhibit').optional(),
      body('status')
        .optional()
        .isIn(['Pending', 'Approved', 'Rejected', 'Available', 'SoldOut', 'Reserved', 'Paid']).withMessage('Invalid status'),
    ];
    await Promise.all(validationRules.map(rule => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    // destructure after validation (request.body will be populated by body-parser middleware)
    const { company_name, contact_person, contact_email, contact_phone, website, description, service_product_to_exhibit, status } = request.body;
    // Retrieve the exhibitors by exhibitors_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const admin_role = check_admin?.role;

    // Check if the role is not 'Exhibitor'
    if (admin_role !== 'super_admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    const existing = await prisma.exhibitors.findUnique({ where: { contact_email } });
    if (existing) {
      return response.status(400).json({ message: 'Contact email already registered' });
    }

    const password = generateTempPassword();
    const hashedPassword = await bcrypt.hash(password, 10);
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    const newExhibitor = await prisma.exhibitors.create({
      data: {
        company_name,
        contact_person,
        contact_email,
        contact_phone,
        website,
        description,
        service_product_to_exhibit,
        status,
        password: hashedPassword,
      },
    });

    return response.status(201).json({ message: 'Exhibitor created successfully', data: newExhibitor });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function allExhibitors(request: Request, response: Response) {
    const admin_id = request.admin.adminId;

  // Check if exhibitors_id is not present or undefined
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the exhibitors by exhibitors_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'Logged in User'
    if (role !== 'super_admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const allExhibitors = await prisma.exhibitors.findMany({ orderBy: { createdAt: 'desc' } });
    return response.status(200).json({ message: 'Exhibitor(s) fetched', data: allExhibitors });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function singleExhibitor(request: Request, response: Response) {
    const id: number = parseInt(request.query.exhibitor_id as string, 10)
    const admin_id = request.admin.adminId;

    // Check if exhibitors_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    if (!id) {
        return response.status(403).json({ message: 'Exhibitor ID required' });
    }

    try {
    // Retrieve the exhibitors by exhibitors_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'Exhibitor'
    if (role !== 'super_admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

  const singleExhibitor = await prisma.exhibitors.findUnique({ where: { id } });
  if (!singleExhibitor) {
    return response.status(404).json({ message: 'Exhibitor not found' });
  }
  return response.status(200).json({ message: 'Exhibitor fetched', data: singleExhibitor });
    } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function deleteExhibitor (request: Request, response: Response) {
    const id: number = parseInt(request.query.exhibitor_id as string, 10)
      const admin_id = request.admin.adminId;
    
      // Check if exhibitors_id is not present or undefined
      if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
      }

      if (!id) {
        return response.status(403).json({ message: 'Exhibitor ID required' });
      }
    
      try {
        // Retrieve the exhibitors by exhibitors_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
    
        // Check if the role is not 'Exhibitor'
        if (role !== 'super_admin') {
          return response.status(403).json({ message: 'Unauthorized User' });
        }

        const exhibitors = await prisma.exhibitors.findUnique({
            where:{id}
        });

        if (!exhibitors) {
            return response.status(404).json({ message: 'Record not found' });
        }
    
        // Create a new delivery entry in the database
        const deleteExhibitor = await prisma.exhibitors.delete({
          where:{
            id
          },
        });
        if (!deleteExhibitor) {
          return response.status(403).json({ message: 'Unable to delete Exhibitor' });
        }
        return response.status(200).json({ message: 'Exhibitor was deleted successfully', data: deleteExhibitor });
      } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
      }
}