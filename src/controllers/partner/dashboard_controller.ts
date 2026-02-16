import { Request, Response } from "express";
import { PrismaClient } from "../../models";
import { body, validationResult } from "express-validator";
import { initializePayment as initializeRemitaPayment, } from '../../utils/remita';
import { Config } from "../../config/config";

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

        // Fetch subscribed packages and payment details
        const packageDetails = await prisma.eventPartnerPackages.findMany({
            where: { event_partner_id: partnerId },
            include: { event_package: true },
            orderBy: { createdAt: 'desc' }
        });

        return response.status(200).json({ 
            success: true, 
            data: { 
                partner, 
                schedules,
                subscribedPackages: packageDetails
            } 
        });
    } catch (err) {
        console.error('profile error', err);
        return response.status(500).json({ success: false, message: 'Server error' });
    }
}

export async function create_exhibition_booth(request: Request, response: Response){
    const authPartner = (request as any).partner;
    const authUser = (request as any).user;
    if (!authPartner && !authUser) return response.status(403).json({ success: false, message: 'Unauthorized' });

    const partnerId = authPartner ? Number(authPartner.id ?? authPartner.partnerId) : Number(authUser?.id);

    const validationRules = [
        body('exhibition_title').notEmpty().withMessage('Exhibition Title is required'),
        body('description').optional(),
        body('booth_number').notEmpty().withMessage('Booth ID is required'),
        body('exhibition_material').optional(),
    ];
    await Promise.all(validationRules.map(rule => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
    }

    const {
            exhibition_title,
            description,
            booth_number,
            exhibition_material,
        } = request.body;

        const booth = await prisma.booths.findUnique({ where: { booth_number } });
        if (!booth) {
            return response.status(404).json({ success: false, message: 'Booth not found' });
        }  

        const booth_id = booth.id;

    try {
        const partner = await prisma.partner.findUnique({ where: { id: partnerId } });
        if (!partner) return response.status(404).json({ success: false, message: 'Partner not found' });

        const existingAssignment = await prisma.partnerAssignedBooth.findFirst({ where: { partner_id:partnerId } });
        if (existingAssignment) {
            return response.status(400).json({ success: false, message: 'Booth is already assigned' });
        }

        const create_booth = await prisma.partnerAssignedBooth.create({
            data: {
                exhibition_title,
                description,
                booth_id,
                exhibition_material,
                partner_id:partnerId
            }
        });

        await prisma.booths.update({
            where: {id: booth_id}, 
            data: {status: "SoldOut"}
        })

        return response.status(201).json({ message: 'Booth Assigned successfully', data: create_booth });
    } catch (err) {
        console.error('profile error', err);
        return response.status(500).json({ success: false, message: 'Server error' });
    }
}

export async function subscribe_package(request: Request, response: Response) {
    const user = (request as any).user;
    if (!user) return response.status(403).json({ success: false, message: 'Unauthorized' });

    const partnerId =  Number(user?.id);

    const validationRules = [
        body('event_package_id').notEmpty().withMessage('Package ID is required'),
    ];
    await Promise.all(validationRules.map(rule => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
    }

    const {
        event_package_id,
    } = request.body;

    // Ensure event package exists
    const pkg = await prisma.partnerPackage.findUnique({ where: { id: Number(event_package_id) } });
    if (!pkg) {
      return response.status(404).json({ message: 'Event package not found' });
    }

    if (pkg.remaining_slot !== null && pkg.remaining_slot <= 0) {
      return response.status(400).json({ message: 'No remaining slots available for this package' });
    }

    const price = Number(pkg.price);

    const callback_url = "http://Users/user/Desktop/Frontend-repo/register-partner.html";
    
    // Build callback - allow frontend override or use configured callback
    const cb = callback_url;

    const init: any = await initializeRemitaPayment(user.id, user.phone_number, Number(price), user.email || '', cb, pkg.id);

    // Try to extract JSON payload from possible JSONP/string wrapper and return RRR
    let parsed: any = init;
    let rrr: string | null = null;
    try {
        if (typeof init === 'string') {
            const first = init.indexOf('{');
            const last = init.lastIndexOf('}');
            if (first !== -1 && last !== -1 && last > first) {
                const jsonStr = init.substring(first, last + 1);
                parsed = JSON.parse(jsonStr);
                rrr = parsed?.RRR ?? parsed?.rrr ?? null;
            }
        } else if (init && typeof init === 'object') {
            rrr = init?.RRR ?? init?.rrr ?? null;
        }
    } catch (err) {
        console.error('Failed to parse Remita init response for RRR', err);
    }

    // return response.status(200).json({ data: parsed, rrr });

    await prisma.eventPartnerPackages.create({
        data: {
          event_partner_id: user.id,
          event_package_id: pkg.id,
          payment_reference: rrr,
          payment_method: 'manual',
          payment_status: 'Pending'
        }
    });

return response.status(200).json({ message: 'Subscription initiated', data: { rrr, remitaResponse: parsed } });
}