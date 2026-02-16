import { Request, Response } from "express";
import { PrismaClient } from "../../models";
import { body, validationResult } from "express-validator";
import { initializePayment as initializeRemitaPayment, } from '../../utils/remita';
import { Config } from "../../config/config";

const prisma = new PrismaClient();

export async function speaker_profile(request: Request, response: Response) {
  try {
    // Assume speaker_id is available from auth/session or query
    // Use req.user, req.query, or req.body for speaker_id
    const speaker_id = (request as any).user?.id || request.query.speaker_id || request.body.speaker_id;
    if (!speaker_id) {
      return response.status(400).json({ message: 'Speaker ID is required' });
    }

    // Fetch speaker info
    const speaker = await prisma.speakers.findUnique({
      where: { id: Number(speaker_id) },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        fullname: true,
        country: true,
        job_title: true,
        organization: true,
        phone: true,
        social_media: true,
        work_email: true,
        bio: true,
        profile_image: true,
        area_of_expertise: true,
        experience: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      }
    });
    if (!speaker) {
      return response.status(404).json({ message: 'Speaker not found' });
    }

    // Fetch all speaker_assignment records for this speaker
    const assignments = await prisma.speaker_assignment.findMany({
      where: { speaker_id: Number(speaker_id) },
      include: {
        topic_one_event: true,
        topic_two_event: true,
        event: true,
      }
    });

    // Group assignments by topic (topic_one, topic_two)
    const grouped: { topic_one: any[]; topic_two: any[] } = {
      topic_one: [],
      topic_two: []
    };
    for (const assign of assignments) {
      if (assign.topic_one) {
        grouped.topic_one.push({
          assignment_id: assign.id,
          topic: assign.topic_one,
          approved: assign.topic_one_approved,
          event: assign.topic_one_event || assign.event || null,
          admin_note: assign.admin_note,
          submittedAt: assign.submittedAt
        });
      }
      if (assign.topic_two) {
        grouped.topic_two.push({
          assignment_id: assign.id,
          topic: assign.topic_two,
          approved: assign.topic_two_approved,
          event: assign.topic_two_event || assign.event || null,
          admin_note: assign.admin_note,
          submittedAt: assign.submittedAt
        });
      }
    }

    return response.status(200).json({
      message: 'Speaker profile and assignments grouped by topic',
      speaker,
      submitted_topics: grouped
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}