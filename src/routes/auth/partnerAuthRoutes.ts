import express from 'express';
import { userAuthenticateJWT } from '../../middlewares/userAuthenticationMiddleware';
import { loginPartner, logoutPartner, registerPartner } from '../../controllers/authentication/partnerAuthController';


export const partnerAuthRouter = express.Router();

partnerAuthRouter.post('/partner-register', registerPartner);
partnerAuthRouter.post('/partner-login', loginPartner);
partnerAuthRouter.post('/partner-logout', userAuthenticateJWT, logoutPartner);
