import express from "express";
import { attendee_profile, submitSchedule } from "../../controllers/attendee/dashboard_controller";
import { userAuthenticateJWT } from "../../middlewares/userAuthenticationMiddleware";

export const attendeeRouter = express.Router();

attendeeRouter.post('/agenda/schedule', userAuthenticateJWT, submitSchedule);
attendeeRouter.get('/profile', userAuthenticateJWT, attendee_profile)