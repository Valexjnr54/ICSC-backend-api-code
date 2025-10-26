import express from "express";
import {  ministryOnly } from "../../middlewares/roleMiddleware";
import { userAuthenticateJWT } from "../../middlewares/userAuthenticationMiddleware";
import { upload } from "../../middlewares/multerMiddleware";
import { allAttendees, createAttendee, deleteAttendee, singleAttendee } from "../../controllers/user/attendee_controller";

export const ministryRouter = express.Router();

ministryRouter.use(userAuthenticateJWT, ministryOnly);

ministryRouter.post('/create-attendee', createAttendee);
ministryRouter.get('/attendees', allAttendees);
ministryRouter.get('/single-attendee', singleAttendee);
ministryRouter.delete('/delete-attendee', deleteAttendee);