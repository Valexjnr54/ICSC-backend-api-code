// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../models';
import { Config } from '../../config/config';
import * as argon2 from 'argon2';
import { body, validationResult } from 'express-validator';
import { Organization } from '../../models/index';

const prisma = new PrismaClient();

export async function loginUser(request: Request, response: Response) {
  // validate input
    await body('organization_short_code').notEmpty().withMessage('organization short code is required').bail().isString().trim().run(request);
    await body('username').notEmpty().withMessage('username is required').bail().isString().run(request);
    await body('password').notEmpty().withMessage('password is required').bail().isString().run(request);

  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(422).json({ status: 'fail', errors: errors.array() });
  }

  const { organization_short_code, username, password } = request.body;
  try {
    const user = await prisma.users.findFirst({
        where: {
          organization_short_code,
          username
        }
      });

    if (!user) {
      return response.status(401).json({ message: 'Invalid credentials' });
    }

     // Check if user password is null
     if (user.password === null) {
        return response.status(401).json({ error: 'Invalid email/username or password' });
      }

      if (!user.password.startsWith('$argon2')) {
        console.error('Password format is invalid:', user.password);
        return response.status(400).json({ message: 'Invalid password format in database' });
      }

    // Verify the password
    const passwordMatch = await argon2.verify(user.password, password);

    if (!passwordMatch) {
      response.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    if (!Config.secret) {
      console.error('Jwt_secret is not defined!');
      response.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    // Generate a JWT token for the admin
        const token = jwt.sign(
          { 
            id: user.id, 
            organization: user.organization,
            organization_short_code: user.organization_short_code,
            username: user.username,
            contact_person: user.contact_person,
            contact_person_email: user.contact_person_email,
            profile_image: user.profile_image,
            role: user.role
          }, 
          Config.secret,
          { expiresIn: '24h' } // Add token expiration
        );

      response.status(200).json({ 
        token,
        success: true,
        message: 'Login successful',
        user
       });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function logoutUser(request: Request, response: Response) {
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

// export async function changeUserTemporalPassword(request: Request, response: Response) {
//   const user_id = request.user.id;

//   if (!user_id) {
//     return response.status(403).json({ message: 'Unauthorized User' });
//   };
  
//   await body('newPassword')
//     .isLength({ min: 8 }).withMessage('New password must be at least 8 characters')
//     .matches(/[A-Z]/).withMessage('New password must contain at least one uppercase letter')
//     .matches(/[a-z]/).withMessage('New password must contain at least one lowercase letter')
//     .matches(/[0-9]/).withMessage('New password must contain at least one number')
//     .matches(/[\W]/).withMessage('New password must contain at least one special character')
//     .run(request);

//   await body('confirmPassword')
//     .notEmpty().withMessage('Password confirmation is required')
//     .run(request);

//   const result = validationResult(request);
//   const errors = result.array();

//   if (request.body.newPassword !== request.body.confirmPassword) {
//     return response.status(422).json({ status: "fail", errors: "Passwords do not match" });
//   }

//   if (errors.length > 0) {
//     return response.status(422).json({ status: "fail", errors });
//   }

//   try {
//     const find_user = await prisma.users.findUnique({
//       where: { id: user_id },
//     });

//     if (!find_user) {
//       return response.status(404).json({ status: "fail", message: "User not found." });
//     }

//     const hashedPassword = await argon2.hash(request.body.newPassword);

//     const user = await prisma.users.update({
//       where: { id: user_id },
//       data: {
//         password: hashedPassword,
//         temporal_password: false
//       },
//     });

//     return response.status(200).json({ status: "success", message: "Password updated successfully.", user:user });
//   } catch (error) {
//     console.error("Change Password Error:", error);
//     return response.status(500).json({ status: "error", message: "Something went wrong." });
//   }
// }

export async function changeUserPassword(request: Request, response: Response) {
  const user_id = request.user.id;
  if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
  // Validate input fields
  await body('currentPassword')
    .notEmpty().withMessage('Current password is required')
    .run(request);

  await body('newPassword')
    .isLength({ min: 8 }).withMessage('New password must be at least 8 characters')
    .matches(/[A-Z]/).withMessage('New password must contain at least one uppercase letter')
    .matches(/[a-z]/).withMessage('New password must contain at least one lowercase letter')
    .matches(/[0-9]/).withMessage('New password must contain at least one number')
    .matches(/[\W]/).withMessage('New password must contain at least one special character')
    .run(request);

  await body('confirmPassword')
    .notEmpty().withMessage('Password confirmation is required')
    .run(request);

  const result = validationResult(request);
  const errors = result.array();

  // Manually confirm password match
  if (request.body.newPassword !== request.body.confirmPassword) {
    return response.status(422).json({ status: "fail", errors:"Password do not match" });
  }

  if (errors.length > 0) {
    return response.status(422).json({ status: "fail", errors });
  }

  if (!user_id) {
    // throw new Error("Missing user ID");
    return response.status(400).json({ message: 'Missing user ID', data:user_id });
  }

  // Retrieve the user by user_id
    const user = await prisma.users.findUnique({ where: { id: user_id } });
    const role = user?.role;

  const { currentPassword, newPassword } = request.body;
  const userId = request.user?.id;

  try {
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return response.status(404).json({ status: "fail", message: "User not found." });
    }

    const isMatch = await argon2.verify(user.password, currentPassword);
    if (!isMatch) {
      return response.status(400).json({ status: "fail", message: "Incorrect current password." });
    }

    const hashedPassword = await argon2.hash(newPassword);

    await prisma.users.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
      },
    });

    return response.status(200).json({ success: true, status: "success", message: "Password updated successfully." });
  } catch (error) {
    console.error("Change Password Error:", error);
    return response.status(500).json({ status: "error", message: "Something went wrong." });
  }
}

export async function profile(request: Request, response: Response) {
  const user_id = request.user.id;
  if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

  if (!user_id) {
    // throw new Error("Missing user ID");
    return response.status(400).json({ message: 'Missing user ID', data:user_id });
  }

  // Retrieve the user by user_id
    const user = await prisma.users.findUnique({ where: { id: user_id } });
    const role = user?.role;

  try {
    const user = await prisma.users.findUnique({
      where: { id: user_id },
    });

    if (!user) {
      return response.status(404).json({ status: "fail", message: "User not found." });
    }

    return response.status(200).json({ status: "success", message: "User Profile fetched successfully.", data:user });
  } catch (error) {
    console.error("Change Password Error:", error);
    return response.status(500).json({ status: "error", message: "Something went wrong." });
  }
}