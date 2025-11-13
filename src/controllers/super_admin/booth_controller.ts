// src/controllers/authController.ts
import { Request, Response } from "express";
import { PrismaClient } from "../../models";
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();

export async function createBooth(request: Request, response: Response) {
	const admin_id = request.admin?.adminId;
	if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

	try {
		// validation
		const validationRules = [
			body('booth_number').notEmpty().withMessage('Booth number is required'),
			body('location').notEmpty().withMessage('Location is required'),
			body('price').notEmpty().withMessage('Price is required').bail().isFloat().withMessage('Price must be a number'),
			body('booth_size').notEmpty().withMessage('Booth size is required'),
			// Accept features as an array or a JSON-stringified array
			body('features').custom((value) => {
				if (Array.isArray(value)) return true;
				if (typeof value === 'string') {
					try {
						const parsed = JSON.parse(value);
						if (Array.isArray(parsed)) return true;
					} catch (e) {
						// fallthrough
					}
				}
				throw new Error('Features must be an array or a JSON stringified array');
			}),
		];
		await Promise.all(validationRules.map(rule => rule.run(request)));
		const errors = validationResult(request);
		if (!errors.isEmpty()) return response.status(400).json({ errors: errors.array() });

		const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
		if (check_admin?.role !== 'super_admin') return response.status(403).json({ message: 'Unauthorized User' });

		const { booth_number, location, price, booth_size, features } = request.body;

		// parse features if it's a JSON string
		let parsedFeatures: any = null;
		if (features !== undefined) {
			if (typeof features === 'string') {
				try { parsedFeatures = JSON.parse(features); } catch (_) { parsedFeatures = features; }
			} else {
				parsedFeatures = features;
			}
		}

		const newBooth = await prisma.booths.create({
			data: {
				booth_number,
				location,
				price: parseFloat(price),
				booth_size,
				features: parsedFeatures,
			}
		});

		return response.status(201).json({ message: 'Booth created successfully', data: newBooth });
	} catch (error) {
		console.error(error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function updateBooth(request: Request, response: Response) {
	const admin_id = request.admin?.adminId;
	if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

	const id: number = parseInt(request.query.booth_id as string, 10);
	if (!id) return response.status(403).json({ message: 'Booth ID required' });

	try {
		const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
		if (check_admin?.role !== 'super_admin') return response.status(403).json({ message: 'Unauthorized User' });

		const existing = await prisma.booths.findUnique({ where: { id } });
		if (!existing) return response.status(404).json({ message: 'Booth not found' });

		const validationRules = [
			body('booth_number').optional().notEmpty().withMessage('Booth number is required'),
			body('location').optional().notEmpty().withMessage('Location is required'),
			body('price').optional().isFloat().withMessage('Price must be a number'),
			body('booth_size').optional().notEmpty().withMessage('Booth size is required'),
			// Optional: if present must be array or JSON-stringified array
			body('features').optional().custom((value) => {
				if (value === undefined) return true;
				if (Array.isArray(value)) return true;
				if (typeof value === 'string') {
					try {
						const parsed = JSON.parse(value);
						if (Array.isArray(parsed)) return true;
					} catch (e) {
						// fallthrough
					}
				}
				throw new Error('Features must be an array or a JSON stringified array');
			}),
			body('status').optional().isIn(['Available','SoldOut','Reserved','Paid']).withMessage('Invalid status'),
		];
		await Promise.all(validationRules.map(rule => rule.run(request)));
		const errors = validationResult(request);
		if (!errors.isEmpty()) return response.status(400).json({ errors: errors.array() });

		const { booth_number, location, price, booth_size, features, status } = request.body;

		let parsedFeatures: any = undefined;
		if (features !== undefined) {
			if (typeof features === 'string') {
				try { parsedFeatures = JSON.parse(features); } catch (_) { parsedFeatures = features; }
			} else {
				parsedFeatures = features;
			}
		}

		const updated = await prisma.booths.update({
			where: { id },
			data: {
				...(booth_number !== undefined ? { booth_number } : {}),
				...(location !== undefined ? { location } : {}),
				...(price !== undefined ? { price: parseFloat(price) } : {}),
				...(booth_size !== undefined ? { booth_size } : {}),
				...(parsedFeatures !== undefined ? { features: parsedFeatures } : {}),
				...(status !== undefined ? { status } : {}),
			}
		});

		return response.status(200).json({ message: 'Booth updated successfully', data: updated });
	} catch (error) {
		console.error(error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function deleteBooth(request: Request, response: Response) {
	const admin_id = request.admin?.adminId;
	if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

	const id: number = parseInt(request.query.booth_id as string, 10);
	if (!id) return response.status(403).json({ message: 'Booth ID required' });

	try {
		const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
		if (check_admin?.role !== 'super_admin') return response.status(403).json({ message: 'Unauthorized User' });

		const existing = await prisma.booths.findUnique({ where: { id } });
		if (!existing) return response.status(404).json({ message: 'Record not found' });

		const deleted = await prisma.booths.delete({ where: { id } });
		return response.status(200).json({ message: 'Booth was deleted successfully', data: deleted });
	} catch (error) {
		console.error(error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function getBooths(request: Request, response: Response) {
	const admin_id = request.admin?.adminId;
	if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

	try {
		const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
		if (check_admin?.role !== 'super_admin') return response.status(403).json({ message: 'Unauthorized User' });

		const all = await prisma.booths.findMany({ orderBy: { createdAt: 'desc' } });
		return response.status(200).json({ message: 'Booth(s) fetched', data: all });
	} catch (error) {
		console.error(error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function getBoothById(request: Request, response: Response) {
	const admin_id = request.admin?.adminId;
	if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

	const id: number = parseInt(request.query.booth_id as string, 10);
	if (!id) return response.status(403).json({ message: 'Booth ID required' });

	try {
		const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
		if (check_admin?.role !== 'super_admin') return response.status(403).json({ message: 'Unauthorized User' });

		const single = await prisma.booths.findUnique({ where: { id } });
		if (!single) return response.status(404).json({ message: 'Booth not found' });

		return response.status(200).json({ message: 'Booth fetched', data: single });
	} catch (error) {
		console.error(error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}