import { Request, Response } from "express";
import { PrismaClient } from "../../models";
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();

// Attendee schedule submission
// Accepts payload: { days: Array<string|number|object>, email?: string }
// Authenticated attendee id is preferred from request.attendee.attendeeId
export async function submitSchedule(request: Request, response: Response) {
	// Try to get authenticated attendee id from request (middleware may set this)
	const authAttendeeId = (request as any).attendee?.attendeeId || (request as any).user?.id;

	// Validation: days must be provided
	await body('days').isArray({ min: 1 }).withMessage('days must be a non-empty array').run(request);
	const errors = validationResult(request);
	if (!errors.isEmpty()) {
		return response.status(400).json({ success: false, errors: errors.array() });
	}

	const { days, email } = request.body;

	try {
		// Normalize days into dayStrings and eventIds
		const dayStrings: string[] = [];
		const eventIds: number[] = [];

		(days || []).forEach((d: any) => {
			if (typeof d === 'number') eventIds.push(d);
			else if (typeof d === 'string') dayStrings.push(d);
			else if (d && typeof d === 'object') {
				if (d.id && typeof d.id === 'number') eventIds.push(d.id);
				else if (d.id && typeof d.id === 'string') dayStrings.push(d.id);
			}
		});

		// Fetch events
		let eventsToAdd: any[] = [];
		if (dayStrings.length > 0) {
			const ev = await prisma.event.findMany({ where: { event_date: { in: dayStrings } } });
			eventsToAdd = eventsToAdd.concat(ev);
		}
		if (eventIds.length > 0) {
			const ev = await prisma.event.findMany({ where: { id: { in: eventIds } } });
			eventsToAdd = eventsToAdd.concat(ev);
		}

		if (eventsToAdd.length === 0) {
			return response.status(400).json({ success: false, message: 'No events found for provided days or ids' });
		}

		// Deduplicate
		const uniqueEvents = Array.from(new Map(eventsToAdd.map(e => [e.id, e])).values());

		// Create schedule for the attendee (use auth id if present, otherwise accept userId from body)
		const userId = authAttendeeId || request.body.userId;
		if (!userId) return response.status(400).json({ success: false, message: 'userId not provided and attendee not authenticated' });

		const created = await prisma.schedule.create({
			data: {
				userId: String(userId),
				email: email || null,
				scheduleEvents: {
					create: uniqueEvents.map(ev => ({ event: { connect: { id: ev.id } } }))
				}
			},
			include: { scheduleEvents: { include: { event: true } } }
		});

		return response.status(201).json({ success: true, message: 'Schedule submitted', data: created });
	} catch (err) {
		console.error('submitSchedule error', err);
		return response.status(500).json({ success: false, message: 'Server error' });
	}
}