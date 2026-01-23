import express from "express";
import {  ministryOnly } from "../../middlewares/roleMiddleware";
import { userAuthenticateJWT } from "../../middlewares/userAuthenticationMiddleware";
import { allAttendees, createAttendee, deleteAttendee, downloadAttendeeCSVTemplate, getAttendeeStats, singleAttendee, uploadAttendeesCSV } from "../../controllers/user/attendee_controller";
import { uploadCSV } from "../../middlewares/uploadCSVMiddleware";

export const ministryRouter = express.Router();

ministryRouter.use(userAuthenticateJWT, ministryOnly);

ministryRouter.post('/create-attendee', createAttendee);
ministryRouter.get('/attendees', allAttendees);
ministryRouter.get('/single-attendee', singleAttendee);
ministryRouter.delete('/delete-attendee', deleteAttendee);
ministryRouter.post('/attendees/upload-csv', uploadCSV, uploadAttendeesCSV);
ministryRouter.get('/download-template', downloadAttendeeCSVTemplate);
ministryRouter.get('/attendee-stats', getAttendeeStats);