import { Request, Response } from 'express';
import { PrismaClient } from '../models';
import { uploadImage } from '../utils/cloudinary';
import fs from 'fs';

const prisma = new PrismaClient();

function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

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

export async function profile_pictureUpload(request: Request, response: Response) {

    try {
        if (!request.file) {
            return response.status(400).json({ message: 'Profile picture is required' });
        }

        const image_path = request.file.path;

        // Upload image to Cloudinary
        const uploadedImageUrl = await uploadImage(image_path, 'icsc/images/speakers/profile_pictures/');

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

export async function stats(request: Request, response: Response){
  try {
    // Get total number of attendees
    const totalAttendees = await prisma.attendees.count();

    // Get total number of speakers
    const totalSpeakers = await prisma.speakers.count();

    // Get total number of unique event dates
    const uniqueEventDates = await prisma.event.findMany({
      select: {
        event_date: true
      },
      distinct: ['event_date']
    });
    const totalEventDates = uniqueEventDates.length;

    return response.status(200).json({
      message: 'Statistics retrieved successfully',
      data: {
        totalAttendees,
        totalSpeakers,
        totalEventDates
      }
    });
  } catch (error) {
    console.error('Stats retrieval error:', error);
    return response.status(500).json({ message: 'Server error', error });
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
    const grouped: Record<string, Record<string, Array<any>>> = {};

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
      if (!grouped[dayName]) grouped[dayName] = {};
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
        stage: ev.location,
        description: ev.description || '',
        hasLiveStream: !!ev.hasLiveStream,
        isKeynote: !!ev.isKeynote,
        track: ev.track || '',
        moderator: ev.moderator || '',
        main_speakers: ev.main_speakers || [],
        lead_speakers: ev.lead_speakers || [],
        speakers: ev.speakers || [],
      };

      const loc = ev.location || 'unknown';
      if (!grouped[dayName][loc]) grouped[dayName][loc] = [];
      grouped[dayName][loc].push(item);
    }

    return response.status(200).json({ message: 'Event(s) fetched', data: grouped });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getAllRoundTables(request: Request, response: Response) {
    try {
        const roundTables = await prisma.roundTables.findMany({
            orderBy: [
                {
                    event_date: 'asc' // Order by date first
                },
                {
                    session: 'asc' // Then by session (Morning comes before Afternoon)
                },
                {
                    session_start_time: 'asc' // Then order by start time within each session
                }
            ]
        });

        const DAYS = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
        const grouped: Record<string, Record<string, Array<any>>> = {};

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

        for (const rt of roundTables) {
            const dateStr = rt.event_date || '';
            let dayName = 'unknown';
            if (dateStr) {
                const dt = new Date(dateStr + 'T00:00:00Z');
                dayName = DAYS[dt.getUTCDay()];
            }
            if (!grouped[dayName]) grouped[dayName] = {};

            const session = rt.session || 'unknown';
            if (!grouped[dayName][session]) grouped[dayName][session] = [];

            const item = {
                id: rt.id,
                session: rt.session,
                session_start_time: rt.session_start_time,
                session_end_time: rt.session_end_time,
                event_date: rt.event_date,
                event_date_verbose: formatDateVerbose(rt.event_date || ''),
                title: rt.title,
                lead: rt.lead,
                description: rt.description || '',
                key_question: rt.key_question,
                open_for: rt.open_for || ''
            };

            grouped[dayName][session].push(item);
        }

        return response.status(200).json({ 
            message: 'Round tables retrieved successfully', 
            data: grouped
        });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}