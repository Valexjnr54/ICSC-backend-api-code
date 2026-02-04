import { Request, Response } from "express";
import { PrismaClient } from "../../models";
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();

export async function submitPartnerSchedule(request: Request, response: Response) {
    // Require authenticated partner: prefer `request.partner.id` (or partner.partnerId), fall back to `request.user.id`
    const authPartner = (request as any).partner;
    const authUser = (request as any).user;
    if (!authPartner && !authUser) return response.status(403).json({ success: false, message: 'Unauthorized' });

    // Prefer partner id when available so schedules are tied to the partner identity
    const rawPartnerId = authPartner?.id ?? authPartner?.partnerId ?? authUser?.id;
    console.log('rawPartnerId', rawPartnerId);
    const partnerIdNum = Number(rawPartnerId);
    const userId = Number.isNaN(partnerIdNum) ? String(rawPartnerId) : String(partnerIdNum);
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

        // Create schedule. For partners we store `partnerId`, `userId` (string for legacy), `email` and mark that it was submitted by a PARTNER
        const schedule = await prisma.schedule.create({ data: { partnerId: partnerIdNum, userId, email: email || null, submittedBy: 'PARTNER' as any, submittedById: userId } });

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

export async function partner_profile(request: Request, response: Response) {

    const authPartner = (request as any).partner;
    const authUser = (request as any).user;
    if (!authPartner && !authUser) return response.status(403).json({ success: false, message: 'Unauthorized' });

    const partnerId = authPartner ? Number(authPartner.id ?? authPartner.partnerId) : Number(authUser?.id);

    try {
        const partner = await prisma.partner.findUnique({ where: { id: partnerId } });
        if (!partner) return response.status(404).json({ success: false, message: 'Partner not found' });

        // Fetch schedules by partner id only
        const schedules = await prisma.schedule.findMany({
            where: { partnerId: partnerId },
            include: { scheduleEvents: { include: { event: true } } },
            orderBy: { createdAt: 'desc' }
        });

        return response.status(200).json({ success: true, data: { partner, schedules } });
    } catch (err) {
        console.error('profile error', err);
        return response.status(500).json({ success: false, message: 'Server error' });
    }
}