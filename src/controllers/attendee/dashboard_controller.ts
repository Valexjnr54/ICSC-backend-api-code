import { Request, Response } from "express";
import { PrismaClient } from "../../models";
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();

export async function submitSchedule(request: Request, response: Response) {
	// Require authenticated attendee: middleware should populate `request.attendee.attendeeId` or `request.user.id`
	const authAttendeeIdRaw = (request as any).attendee?.attendeeId ?? (request as any).user?.id;
	console.log('authAttendeeIdRaw', authAttendeeIdRaw);
	if (!authAttendeeIdRaw) return response.status(403).json({ success: false, message: 'Unauthorized' });

	// Normalize id: prefer numeric attendeeId (for FK), but keep string `userId` for legacy/external ids
	const attendeeIdNum = Number(authAttendeeIdRaw);
	const userId = Number.isNaN(attendeeIdNum) ? String(authAttendeeIdRaw) : String(attendeeIdNum);
	// Accept either a single `eventId` or an array `eventIds` in the request body.
	const { eventId, eventIds, email } = request.body || {};

	const eventIdSet = new Set<number>();

	// Single eventId (number or numeric string)
	if (typeof eventId === 'number') eventIdSet.add(eventId);
	else if (typeof eventId === 'string') {
		const n = Number(eventId);
		if (!Number.isNaN(n)) eventIdSet.add(n);
	}

	// Array of eventIds - support numbers, strings, or objects with id/eventId
	if (Array.isArray(eventIds)) {
		for (const item of eventIds) {
			if (typeof item === 'number') {
				eventIdSet.add(item);
				continue;
			}
			if (typeof item === 'string') {
				const n = Number(item);
				if (!Number.isNaN(n)) eventIdSet.add(n);
				continue;
			}
			if (item && typeof item === 'object') {
				if (typeof item.eventId === 'number') eventIdSet.add(item.eventId);
				else if (typeof item.id === 'number') eventIdSet.add(item.id);
				else if (typeof item.eventId === 'string') {
					const n = Number(item.eventId);
					if (!Number.isNaN(n)) eventIdSet.add(n);
				} else if (typeof item.id === 'string') {
					const n = Number(item.id);
					if (!Number.isNaN(n)) eventIdSet.add(n);
				}
			}
		}
	}

	const eventIdsClean = Array.from(eventIdSet).filter(n => Number.isInteger(n) && n > 0);
	if (eventIdsClean.length === 0) return response.status(400).json({ success: false, message: 'No valid event IDs provided' });

	try {
		// Confirm events exist (filter invalid ids)
		const existingEvents = await prisma.event.findMany({ where: { id: { in: eventIdsClean } }, select: { id: true } });
		const existingIds = new Set(existingEvents.map(e => e.id));
		const validEventIds = eventIdsClean.filter(id => existingIds.has(id));
		if (validEventIds.length === 0) {
			return response.status(400).json({ success: false, message: 'No matching events found for provided IDs' });
		}

		// Create schedule. If we have a numeric attendee id, save it in `attendeeId` relation.
		const schedule = await prisma.schedule.create({ data: { userId, email: email || null, attendeeId: Number.isNaN(attendeeIdNum) ? null : attendeeIdNum } });

		// Create schedule events (skip duplicates)
		const createManyData = validEventIds.map(eventId => ({ scheduleId: schedule.id, eventId }));
		await prisma.scheduleEvent.createMany({ data: createManyData, skipDuplicates: true });

		// Return the created schedule with included events
		const created = await prisma.schedule.findUnique({
			where: { id: schedule.id },
			include: { scheduleEvents: { include: { event: true } } }
		});

		return response.status(201).json({ success: true, data: created });
	} catch (err) {
		console.error('submitSchedule error', err);
		return response.status(500).json({ success: false, message: 'Server error' });
	}
}

export async function attendee_profile(request: Request, response: Response) {

	// Require authenticated attendee: middleware should populate `request.attendee.attendeeId` or `request.user.id`
	const authAttendeeIdRaw = (request as any).attendee?.attendeeId ?? (request as any).user?.id;
	if (!authAttendeeIdRaw) return response.status(403).json({ success: false, message: 'Unauthorized' });

	const id = Number(authAttendeeIdRaw);

	try {
		const attendee = await prisma.attendees.findUnique({ where: { id } });
		if (!attendee) return response.status(404).json({ success: false, message: 'Attendee not found' });

		// Fetch schedules by attendeeId only
		const schedulesByAttendee = await prisma.schedule.findMany({
			where: { attendeeId: id },
			include: { scheduleEvents: { include: { event: true } } },
			orderBy: { createdAt: 'desc' }
		});

		const schedules = schedulesByAttendee;

		return response.status(200).json({ success: true, data: { attendee, schedules } });
	} catch (err) {
		console.error('profile error', err);
		return response.status(500).json({ success: false, message: 'Server error' });
	}
}