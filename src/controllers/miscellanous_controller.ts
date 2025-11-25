import { Request, Response } from 'express';
import { PrismaClient } from '../models';
import { uploadImage } from '../utils/cloudinary';
import fs from 'fs';

const prisma = new PrismaClient();

function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function profile_imageUpload(request: Request, response: Response) {

    try {
        if (!request.file) {
            return response.status(400).json({ message: 'Company image is required' });
        }

        const image_path = request.file.path;

        // Upload image to Cloudinary
        const uploadedImageUrl = await uploadImage(image_path, 'icsc/images/company_logo/');

        // Delete the local file after uploading
        fs.unlink(image_path, (err) => {
            if (err) {
                console.error(`Error deleting file: ${image_path}`, err);
            }
        });

        if (uploadedImageUrl) {
            return response.status(200).json({
                message: 'Profile image uploaded successfully',
                image_url: uploadedImageUrl,
            });
        } else {
            return response.status(500).json({ message: 'Failed to upload image' });
        }
    } catch (error) {
        console.error('Image upload error:', error);
        return response.status(500).json({ message: 'Server error', error });
    }
}