import { Request, Response } from "express";
import { PrismaClient } from "../../models";
import { body, validationResult } from "express-validator";
import { uploadFile, uploadImage, uploadVideo, deleteImageFromCloudinary } from "../../utils/cloudinary";
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

// Create Resource
export async function createResource(request: Request, response: Response) {
    const { resourceName, resourceType, resourceCategory, resourceOwner, resourceDescription, resourceStatus, resourceVisibility } = request.body;
    const admin_id = request.admin.adminId;

    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    try {
        const validationRules = [
            body('resourceName').notEmpty().withMessage('Resource name is required'),
            body('resourceType').notEmpty().withMessage('Type is required'),
            body('resourceCategory').notEmpty().withMessage('Category is required'),
            body('resourceOwner').notEmpty().withMessage('Owner is required'),
            body('resourceStatus').isIn(['Approved', 'Pending', 'Rejected']).withMessage('Invalid status'),
            body('resourceVisibility').isIn(['Public', 'Private', 'Restricted']).withMessage('Invalid visibility'),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }

        // Check admin role
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        if (check_admin?.role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }

        // Handle file upload
        if (!request.file) {
            return response.status(400).json({ message: 'File is required' });
        }

        const filePath = request.file.path;
        let file_url: string;
        let file_type: string;

        // Determine file type and upload accordingly
        const ext = path.extname(request.file.originalname).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
            file_url = (await uploadImage(filePath, 'resources/images'))!;
            file_type = 'image';
        } else if (['.mp4', '.avi', '.mov'].includes(ext)) {
            file_url = (await uploadVideo(filePath, 'resources/videos'))!;
            file_type = 'video';
        } else {
            file_url = (await uploadFile(filePath, 'resources/files'))!;
            file_type = 'document';
        }

        if (!file_url) {
            return response.status(500).json({ message: 'Failed to upload file' });
        }

        // Delete local file after upload
        fs.unlinkSync(filePath);

        // Create resource
        const resource = await prisma.resources.create({
            data: {
                resource_name: resourceName,
                type: resourceType,
                category: resourceCategory,
                uploaded_by: resourceOwner,
                file_path: file_url,
                file_type,
                description: resourceDescription,
                status: resourceStatus as any,
                visibilty: resourceVisibility as any,
            },
        });

        response.status(201).json({ message: 'Resource created successfully', resource });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal server error' });
    }
}

// Get All Resources
export async function getAllResources(request: Request, response: Response) {
    const admin_id = request.admin.adminId;

    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    try {
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        if (check_admin?.role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }

        const resources = await prisma.resources.findMany({
            orderBy: { createdAt: 'desc' },
        });

        response.status(200).json({ message: 'Resources retrieved successfully', data: resources });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal server error' });
    }
}

// Get Single Resource
export async function getSingleResource(request: Request, response: Response) {
    const { id } = request.query;
    const admin_id = request.admin.adminId;

    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    try {
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        if (check_admin?.role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }

        const resource = await prisma.resources.findUnique({
            where: { id: parseInt(id as string) },
        });

        if (!resource) {
            return response.status(404).json({ message: 'Resource not found' });
        }

        response.json(resource);
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal server error' });
    }
}

// Update Resource
export async function updateResource(request: Request, response: Response) {
    const { id, resourceName, resourceType, resourceCategory, resourceOwner, resourceDescription, resourceStatus, resourceVisibility } = request.body;
    const admin_id = request.admin.adminId;

    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    try {
        const validationRules = [
            body('resourceName').optional().notEmpty().withMessage('Resource name cannot be empty'),
            body('resourceType').optional().notEmpty().withMessage('Type cannot be empty'),
            body('resourceCategory').optional().notEmpty().withMessage('Category cannot be empty'),
            body('resourceOwner').optional().notEmpty().withMessage('Owner cannot be empty'),
            body('resourceStatus').optional().isIn(['Approved', 'Pending', 'Rejected']).withMessage('Invalid status'),
            body('resourceVisibility').optional().isIn(['Public', 'Private', 'Restricted']).withMessage('Invalid visibility'),
        ];
        await Promise.all(validationRules.map(rule => rule.run(request)));

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }

        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        if (check_admin?.role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }

        const existingResource = await prisma.resources.findUnique({
            where: { id: parseInt(id) },
        });

        if (!existingResource) {
            return response.status(404).json({ message: 'Resource not found' });
        }

        let file_path = existingResource.file_path;
        let file_type = existingResource.file_type;

        // Handle file re-upload if new file provided
        if (request.file) {
            const oldFilePath = existingResource.file_path;
            // Delete old file from Cloudinary
            await deleteImageFromCloudinary(oldFilePath);

            const newFilePath = request.file.path;
            const ext = path.extname(request.file.originalname).toLowerCase();
            if (['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
                file_path = (await uploadImage(newFilePath, 'resources/images'))!;
                file_type = 'image';
            } else if (['.mp4', '.avi', '.mov'].includes(ext)) {
                file_path = (await uploadVideo(newFilePath, 'resources/videos'))!;
                file_type = 'video';
            } else {
                file_path = (await uploadFile(newFilePath, 'resources/files'))!;
                file_type = 'document';
            }
            if (!file_path) {
                return response.status(500).json({ message: 'Failed to upload new file' });
            }
            fs.unlinkSync(newFilePath);
        }

        const updatedResource = await prisma.resources.update({
            where: { id: parseInt(id) },
            data: {
                resource_name: resourceName || existingResource.resource_name,
                type: resourceType || existingResource.type,
                category: resourceCategory || existingResource.category,
                uploaded_by: resourceOwner || existingResource.uploaded_by,
                file_path,
                file_type,
                description: resourceDescription !== undefined ? resourceDescription : existingResource.description,
                status: resourceStatus ? resourceStatus as any : existingResource.status,
                visibilty: resourceVisibility ? resourceVisibility as any : existingResource.visibilty,
            },
        });

        response.json({ message: 'Resource updated successfully', resource: updatedResource });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal server error' });
    }
}

// Delete Resource
export async function deleteResource(request: Request, response: Response) {
    const { id } = request.body;
    const admin_id = request.admin.adminId;

    if (!admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    try {
        const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
        if (check_admin?.role !== 'super_admin') {
            return response.status(403).json({ message: 'Unauthorized User' });
        }

        const resource = await prisma.resources.findUnique({
            where: { id: parseInt(id) },
        });

        if (!resource) {
            return response.status(404).json({ message: 'Resource not found' });
        }

        // Delete file from Cloudinary
        await deleteImageFromCloudinary(resource.file_path);

        await prisma.resources.delete({
            where: { id: parseInt(id) },
        });

        response.json({ message: 'Resource deleted successfully' });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Internal server error' });
    }
}
