import express from 'express';
import { userAuthenticateJWT } from '../../middlewares/userAuthenticationMiddleware';
import { loginSpeaker, logoutSpeaker, registerSpeaker } from '../../controllers/authentication/speakerAuthController';


export const speakerAuthRouter = express.Router();

speakerAuthRouter.post('/speaker-register', registerSpeaker);
speakerAuthRouter.post('/speaker-login', loginSpeaker);
speakerAuthRouter.post('/speaker-logout', userAuthenticateJWT, logoutSpeaker);
