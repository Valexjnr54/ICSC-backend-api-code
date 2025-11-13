import express from 'express';
import { userAuthenticateJWT } from '../../middlewares/userAuthenticationMiddleware';
import { loginAttendee, logoutAttendee, registerAttendee } from '../../controllers/authentication/attendeeAuthController';


export const attendeeAuthRouter = express.Router();

attendeeAuthRouter.post('/attendee-register', registerAttendee);
attendeeAuthRouter.post('/attendee-login', loginAttendee);
attendeeAuthRouter.post('/attendee-logout', userAuthenticateJWT, logoutAttendee);
