import express from 'express';
import { userAuthenticateJWT } from '../../middlewares/userAuthenticationMiddleware';
import { loginExhibitor, logoutExhibitor, registerExhibitor } from '../../controllers/authentication/exhibitorAuthController';


export const exhibitorAuthRouter = express.Router();

exhibitorAuthRouter.post('/exhibitor-register', registerExhibitor);
exhibitorAuthRouter.post('/exhibitor-login', loginExhibitor);
exhibitorAuthRouter.post('/exhibitor-logout', userAuthenticateJWT, logoutExhibitor);
