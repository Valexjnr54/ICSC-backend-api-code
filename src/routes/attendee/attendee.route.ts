import express from "express";
import { submitSchedule } from "../../controllers/attendee/dashboard_controller";

export const attendeeRouter = express.Router();

attendeeRouter.post('/agenda/schedule', submitSchedule);