// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../models';
import { Config } from '../../config/config';
import { body, validationResult } from "express-validator";
import * as argon2 from 'argon2';
import { validateRequestBody } from '../../utils/requestValidator';

const prisma = new PrismaClient();

export async function registerAdmin(request: Request, response: Response) {
    validateRequestBody(['fullname', 'email', 'password'])
    const { fullname, email, username, password } = request.body;

    try {
        const validationRules = [
        body('fullname').notEmpty().withMessage('Full Name is required'),
        body('username').notEmpty().withMessage('Username is required'),
        body('email').isEmail().withMessage('Invalid email address'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        ];
        
        // Apply validation rules to the request
        await Promise.all(validationRules.map(rule => rule.run(request)));
        
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
        }

        // Check if the email is already registered
        const existingAdmin = await prisma.admin.findUnique({ where: { email } });
        if (existingAdmin) {
        return response.status(400).json({ message: 'Email already registered' });
        }

        // Hash the password before storing it
        const hashedPassword = await argon2.hash(password);

        //Uploading Image to Cloudinary
        let imageUrl = "https://res.cloudinary.com/dx2gbcwhp/image/upload/v1699044872/noimage/uyifdentpdqjeyjnmowa.png"; // Default URL
        

        // Create a new Admin in the database
        const newAdmin = await prisma.admin.create({
        data: {
            fullname,
            email,
            username,
            profile_image: imageUrl,
            password: hashedPassword, // Store the salt along with the hash
        },
        });

        // Generate a JWT token for the newly registered Admin
        const token = jwt.sign({ adminId: newAdmin.id, email: newAdmin.email, fullname: newAdmin.fullname, profile_image:newAdmin.profile_image }, Config.secret);

        response.status(201).json({ token, newAdmin });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function loginAdmin(request: Request, response: Response) {
  // First check if body exists and has required fields
  if (!request.body || Object.keys(request.body).length === 0) {
    return response.status(400).json({
      error: "Empty request body",
      message: "Request body cannot be empty",
      requiredFields: ["email|username", "password"],
      example: {
        email: "admin@example.com",
        username: "adminuser",
        password: "yourSecurePassword"
      }
    });
  }

  const { email, username, password } = request.body;

  // Additional check for empty fields: allow either email or username
  if ((!email && !username) || !password) {
    return response.status(400).json({
      error: "Missing fields",
      message: "Either email or username, and password are required",
      missingFields: [
        ...(!email && !username ? ["email|username"] : []),
        ...(!password ? ["password"] : [])
      ]
    });
  }

  try {
  // Find the Admin by email or username
  const searchConditions: any[] = [];
  if (email) searchConditions.push({ email });
  if (username) searchConditions.push({ username });

  const admin = await prisma.admin.findFirst({ where: { OR: searchConditions } });

    if (!admin) {
      return response.status(401).json({ 
        error: 'Authentication failed',
        message: 'Invalid credentials' 
      });
    }

    // Verify the password
    const passwordMatch = await argon2.verify(admin.password, password);

    if (!passwordMatch) {
      return response.status(401).json({ 
        error: 'Authentication failed',
        message: 'Invalid email or password' 
      });
    }

    // Generate a JWT token for the admin
    const token = jwt.sign(
      { 
        adminId: admin.id, 
        email: admin.email,
        fullname: admin.fullname,
        profile_image: admin.profile_image,
        role: admin.role
      }, 
      Config.secret,
      { expiresIn: '24h' } // Add token expiration
    );

    // Return response without sensitive data (remove password)
    const { password: _pw, ...adminSafe } = admin as any;

    response.status(200).json({ 
      success: true,
      message: 'Login successful',
      token,
      admin: adminSafe
    });
    
  } catch (error) {
    console.error('Login error:', error);
    response.status(500).json({ 
      error: 'Internal Server Error',
      message: 'An error occurred during login' 
    });
  }
}

export async function logoutAdmin(request: Request, response: Response) {
  try {
    // If you are using JWT tokens, you can clear the token on the client side by removing it from cookies or local storage.
    // Here, we'll focus on clearing the token from cookies.

    // Clear the JWT token from the client-side cookies
    response.clearCookie('jwt');

    // Optionally, you can perform additional tasks here, such as logging the Admin's logout action.

    // Send a success response to the client
    response.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    // Handle any potential errors that may occur during the logout process.
    console.error('Error during logout:', error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
}