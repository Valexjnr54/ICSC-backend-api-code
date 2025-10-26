// src/controllers/authController.ts
import { Request, Response } from "express";
import { PrismaClient } from "../../models";
import crypto from 'crypto';
import * as argon2 from 'argon2';
import { body, validationResult } from "express-validator";
import { sendVerificationEmail, sendWelcomeEmail } from "../../utils/emailSender";

const prisma = new PrismaClient();

export async function createUser(request: Request, response: Response) {
    const { organization, organization_short_code, contact_person, contact_person_email, username, password } = request.body;
    const admin_id = request.admin.adminId;

    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    try {
    const validationRules = [
      body('organization').notEmpty().withMessage('Organization is required'),
      body('organization_short_code').notEmpty().withMessage('Organization Short Code is required'),
      body('contact_person').notEmpty().withMessage('Contact Person is required'),
      body('contact_person_email').isEmail().withMessage('Invalid email address'),
      body('username').notEmpty().withMessage('Username is required'),
      body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    ];
    await Promise.all(validationRules.map(rule => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    // Retrieve the user by user_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const admin_role = check_admin?.role;

    // Check if the role is not 'User'
    if (admin_role !== 'super_admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    const existing = await prisma.users.findUnique({ where: { contact_person_email } });
    if (existing) {
      return response.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await argon2.hash(password);
    const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    const newUser = await prisma.users.create({
      data: {
        organization,
        organization_short_code,
        contact_person,
        contact_person_email,
        username,
        password: hashedPassword,
      },
    });

    await sendWelcomeEmail(contact_person_email, 'Welcome to International Civil Service Conference', newUser, password);

    return response.status(201).json({ message: 'User created successfully', newUser });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function allUser(request: Request, response: Response) {
    const admin_id = request.admin.adminId;

  // Check if user_id is not present or undefined
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    // Retrieve the user by user_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'User'
    if (role !== 'super_admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const allUsers = await prisma.users.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    return response.status(200).json({message: 'User(s) fetched', data: allUsers });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function singleUser(request: Request, response: Response) {
    const id: number = parseInt(request.query.user_id as string, 10)
    const admin_id = request.admin.adminId;

    // Check if user_id is not present or undefined
    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    if (!id) {
        return response.status(403).json({ message: 'User ID required' });
    }

    try {
    // Retrieve the user by user_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    // Check if the role is not 'User'
    if (role !== 'super_admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    const singleUser = await prisma.users.findUnique({
        where: {
            id: id
        },
    });
    if (!singleUser) {
        return response.status(404).json({ message: 'User not found' });
    }
    return response.status(200).json({message: 'User fetched', data: singleUser });
    } catch (error) {
    console.log(error)
    return response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function deleteUser (request: Request, response: Response) {
    const id: number = parseInt(request.query.user_id as string, 10)
      const admin_id = request.admin.adminId;
    
      // Check if user_id is not present or undefined
      if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
      }

      if (!id) {
        return response.status(403).json({ message: 'User ID required' });
      }
    
      try {
        // Retrieve the user by user_id
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        const role = check_admin?.role;
    
        // Check if the role is not 'User'
        if (role !== 'super_admin') {
          return response.status(403).json({ message: 'Unauthorized User' });
        }

        const user = await prisma.users.findUnique({
            where:{id}
        });

        if (!user) {
            return response.status(404).json({ message: 'Record not found' });
        }
    
        // Create a new delivery entry in the database
        const deleteUser = await prisma.users.delete({
          where:{
            id
          },
        });
        if (!deleteUser) {
          return response.status(403).json({ message: 'Unable to delete User' });
        }
        return response.status(200).json({ message: 'User was deleted successfully', data: deleteUser });
      } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
      }
}