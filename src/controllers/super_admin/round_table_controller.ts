// src/controllers/super_admin/round_table_controller.ts
import { Request, Response } from "express";
import { PrismaClient } from "../../models";
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();

export async function createRoundTable(request: Request, response: Response) {
	const admin_id = request.admin?.adminId;
	if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

	try {
		// validation
		const validationRules = [
			body('session').notEmpty().withMessage('Session is required').isIn(['Morning', 'Afternoon']).withMessage('Session must be Morning or Afternoon'),
            body('event_date').notEmpty().withMessage('Day is required')
                .bail()
                .isISO8601().withMessage('Event date must be a valid date (YYYY-MM-DD)'),
			body('session_start_time').notEmpty().withMessage('Session start time is required'),
			body('session_end_time').notEmpty().withMessage('Session end time is required'),
			body('title').notEmpty().withMessage('Title is required'),
			body('description').optional(),
			body('key_question').optional(),
			body('open_for').optional(),
			// Accept lead as an array or JSON-stringified array
			body('lead').custom((value) => {
				if (Array.isArray(value)) return true;
				if (typeof value === 'string') {
					try {
						const parsed = JSON.parse(value);
						if (Array.isArray(parsed)) return true;
					} catch (e) {
						// fallthrough
					}
				}
				throw new Error('Lead must be an array or a JSON stringified array');
			}),
		];
		await Promise.all(validationRules.map(rule => rule.run(request)));
		const errors = validationResult(request);
		if (!errors.isEmpty()) return response.status(400).json({ errors: errors.array() });

		const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
		if (check_admin?.role !== 'super_admin') return response.status(403).json({ message: 'Unauthorized User' });

		const { session, event_date, session_start_time, session_end_time, title, description, key_question, open_for, lead } = request.body;

		// parse lead if it's a JSON string
		let parsedLead: any = null;
		if (lead !== undefined) {
			if (typeof lead === 'string') {
				try { parsedLead = JSON.parse(lead); } catch (_) { parsedLead = lead; }
			} else {
				parsedLead = lead;
			}
		}

        const parsedDate = new Date(event_date);
    const normalizedDate = isNaN(parsedDate.getTime()) ? event_date : parsedDate.toISOString().split('T')[0];

		const newRoundTable = await prisma.roundTables.create({
			data: {
				session: session as any,
                event_date: normalizedDate,
				session_start_time,
				session_end_time,
				title,
				lead: parsedLead,
				description: description || undefined,
				key_question: key_question || undefined,
				open_for: open_for || undefined,
			}
		});

		return response.status(201).json({ message: 'Round table created successfully', data: newRoundTable });
	} catch (error) {
		console.error(error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function getAllRoundTables(request: Request, response: Response) {
	const admin_id = request.admin?.adminId;
	if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

	try {
		const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
		if (check_admin?.role !== 'super_admin') return response.status(403).json({ message: 'Unauthorized User' });

		const roundTables = await prisma.roundTables.findMany({
			orderBy: [
				{
					session: 'asc' // Morning comes before Afternoon
				},
				{
					session_start_time: 'asc' // Then order by start time within each session
				}
			]
		});

		return response.status(200).json({ 
			message: 'Round tables retrieved successfully', 
			data: roundTables,
			total: roundTables.length 
		});
	} catch (error) {
		console.error(error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}
