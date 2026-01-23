import { Request, Response } from "express";
import { PrismaClient } from "../../models";
import crypto from 'crypto';
import { body, validationResult } from "express-validator";

const prisma = new PrismaClient();

function generateSlug(title: string) {
  return title
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Parse a time string into minutes since midnight. Accepts:
// - 24-hour: "HH:MM" (e.g. "09:30", "14:05")
// - 12-hour with AM/PM: "h:mma" or "hh:mmAM" (e.g. "9:30AM", "09:00AM", "12:00PM")
function parseTimeToMinutes(time: string): number {
  if (typeof time !== 'string') throw new Error('Invalid time format');
  const s = time.trim();

  // Try 12-hour with AM/PM first
  const ampm = s.match(/^([0]?[1-9]|1[0-2]):([0-5]\d)\s?(AM|PM)$/i);
  if (ampm) {
    const hh = parseInt(ampm[1], 10);
    const mm = parseInt(ampm[2], 10);
    const period = ampm[3].toUpperCase();
    let hh24 = hh % 12; // 12 AM -> 0
    if (period === 'PM') hh24 = hh24 + 12;
    return hh24 * 60 + mm;
  }

  // Try 24-hour format
  const m24 = s.match(/^([01]?\d|2[0-3]):([0-5]\d)$/);
  if (m24) {
    const hh = parseInt(m24[1], 10);
    const mm = parseInt(m24[2], 10);
    return hh * 60 + mm;
  }

  throw new Error('Invalid time format');
}

// Normalize any accepted input into canonical 12-hour string with no space: "HH:MMAM"
function formatTo12Hour(time: string): string {
  const minutes = parseTimeToMinutes(time);
  let hh = Math.floor(minutes / 60) % 24;
  const mm = minutes % 60;
  const period = hh >= 12 ? 'PM' : 'AM';
  let hh12 = hh % 12;
  if (hh12 === 0) hh12 = 12;
  const hhStr = String(hh12).padStart(2, '0');
  const mmStr = String(mm).padStart(2, '0');
  return `${hhStr}:${mmStr}${period}`;
}

export async function createEvent(request: Request, response: Response) {
  const admin_id = (request as any).admin?.adminId;

  // Check admin presence early
  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }
  try {
    // Run validation before accessing request.body
    const validationRules = [
      body('title').notEmpty().withMessage('Title is required'),
      body('event_date').notEmpty().withMessage('Day is required')
        .bail()
        .isISO8601().withMessage('Event date must be a valid date (YYYY-MM-DD)'),
         body('start_time')
           .notEmpty().withMessage('Start Time is required')
           .bail()
           .matches(/^([0]?[1-9]|1[0-2]):([0-5]\d)\s?(AM|PM)$/i).withMessage('Start Time must be in hh:mmAM/PM format'),
         body('end_time')
           .notEmpty().withMessage('End Time is required')
           .bail()
           .matches(/^([0]?[1-9]|1[0-2]):([0-5]\d)\s?(AM|PM)$/i).withMessage('End Time must be in hh:mmAM/PM format')
           .bail()
           .custom((value, { req }) => {
             // ensure start_time < end_time (parse accepts multiple formats)
             const start = req.body.start_time;
             try {
               const sMin = parseTimeToMinutes(start);
               const eMin = parseTimeToMinutes(value);
               if (sMin >= eMin) throw new Error('End Time must be after Start Time');
               return true;
             } catch (err: any) {
               throw new Error(err.message || 'Invalid time values');
             }
           }),
      body('location').notEmpty().withMessage('Location is required'),
      body('description').optional(),
      body('hasLiveStream').optional().isBoolean(),
      body('isKeynote').optional(),
      body('track').optional(),
    ];
    await Promise.all(validationRules.map(rule => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    // destructure after validation (request.body will be populated by body-parser middleware)
    const { title, event_date, start_time, end_time, location, description, hasLiveStream, isKeynote, track } = request.body;
    // Retrieve the event_partners by event_partners_id
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const admin_role = check_admin?.role;

    // Check if the role is not 'EventPartner'
    if (admin_role !== 'super_admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    const slug = generateSlug(title);

    // Normalize times to canonical 12-hour format like "09:00AM"
    const normalizedStart = formatTo12Hour(start_time);
    const normalizedEnd = formatTo12Hour(end_time);

    // Normalize event_date to YYYY-MM-DD (ISO date) before saving
    const parsedDate = new Date(event_date);
    const normalizedDate = isNaN(parsedDate.getTime()) ? event_date : parsedDate.toISOString().split('T')[0];

    const newEvent = await prisma.event.create({
      data: {
        title,
        slug,
        event_date: normalizedDate,
        start_time: normalizedStart,
        end_time: normalizedEnd,
        location,
        description,
        hasLiveStream,
        isKeynote,
        track,
      }
    })

    return response.status(201).json({ message: 'Event created successfully', data: newEvent });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getEvents(request: Request, response: Response) {
  try {
    let allEvents = await prisma.event.findMany({});

    // Sort by event_date (ISO YYYY-MM-DD) then by parsed start_time (minutes since midnight)
    allEvents = allEvents.sort((a, b) => {
      if (a.event_date && b.event_date && a.event_date !== b.event_date) {
        return a.event_date.localeCompare(b.event_date);
      }
      try {
        const aMin = parseTimeToMinutes(a.start_time || '00:00AM');
        const bMin = parseTimeToMinutes(b.start_time || '00:00AM');
        return aMin - bMin;
      } catch (err) {
        // Fallback to string compare if parsing fails
        return String(a.start_time).localeCompare(String(b.start_time));
      }
    });

    const DAYS = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    const counters: Record<string, number> = {};
    const grouped: Record<string, Array<any>> = {};

    function minutesToHHMM24(min: number) {
      const hh = Math.floor(min / 60) % 24;
      const mm = min % 60;
      return String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0');
    }
    
    function formatDateVerbose(dateStr: string) {
      if (!dateStr) return '';
      const dt = new Date(dateStr + 'T00:00:00Z');
      if (isNaN(dt.getTime())) return dateStr;
      const day = String(dt.getUTCDate()).padStart(2, '0');
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      const month = months[dt.getUTCMonth()];
      const year = dt.getUTCFullYear();
      return `${day} ${month} ${year}`;
    }

    for (const ev of allEvents) {
      const dateStr = ev.event_date || '';
      let dayName = 'unknown';
      if (dateStr) {
        const dt = new Date(dateStr + 'T00:00:00Z');
        dayName = DAYS[dt.getUTCDay()];
      }
      if (!grouped[dayName]) grouped[dayName] = [];
      counters[dayName] = (counters[dayName] || 0) + 1;

      let timeRange = '';
      try {
        const sMin = parseTimeToMinutes(ev.start_time || '00:00AM');
        const eMin = parseTimeToMinutes(ev.end_time || '00:00AM');
        timeRange = `${minutesToHHMM24(sMin)}-${minutesToHHMM24(eMin)}`;
      } catch (err) {
        const s = (ev.start_time || '').replace(/\s+/g, '');
        const e = (ev.end_time || '').replace(/\s+/g, '');
        timeRange = `${s}-${e}`;
      }

      const short = dayName.slice(0, 3);
      const item = {
        id: `${ev.id}`,
        time: timeRange,
        day: dayName,
        shortDay: short,
        event_date: ev.event_date,
        event_date_verbose: formatDateVerbose(ev.event_date || ''),
        title: ev.title,
        location: ev.location,
        description: ev.description || '',
        hasLiveStream: !!ev.hasLiveStream,
        isKeynote: !!ev.isKeynote,
        track: ev.track || '',
        speakers: ev.speakers || [],
      };

      grouped[dayName].push(item);
    }

    return response.status(200).json({ message: 'Event(s) fetched', data: grouped });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}