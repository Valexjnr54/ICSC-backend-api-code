import express from 'express';
import { userAuthenticateJWT } from '../../middlewares/userAuthenticationMiddleware';
import { loginEventPartner, logoutEventPartner, registerEventPartner } from '../../controllers/authentication/eventPartnerAuthController';


export const eventPartnerAuthRouter = express.Router();

eventPartnerAuthRouter.post('/event-partner-register', registerEventPartner);
eventPartnerAuthRouter.post('/event-partner-login', loginEventPartner);
eventPartnerAuthRouter.post('/event-partner-logout', userAuthenticateJWT, logoutEventPartner);
