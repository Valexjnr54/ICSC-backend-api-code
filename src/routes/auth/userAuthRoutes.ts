import express from 'express';
import { upload } from '../../middlewares/multerMiddleware';
import { userAuthenticateJWT } from '../../middlewares/userAuthenticationMiddleware';
import { changeUserPassword, loginUser, logoutUser, profile } from '../../controllers/authentication/userAuthController';
import { authenticateJWT } from '../../middlewares/authenticationMiddleware';


export const userAuthRouter = express.Router();

userAuthRouter.post('/user-login', loginUser);
// Secure the logout route with authentication middleware
userAuthRouter.post('/user-logout', userAuthenticateJWT, logoutUser);
// userAuthRouter.post('/email-verification', userAuthenticateJWT, verifyUserEmail);
userAuthRouter.post('/change-password', userAuthenticateJWT, changeUserPassword);
// userAuthRouter.post('/change-temp-password', userAuthenticateJWT, changeUserTemporalPassword);
userAuthRouter.get('/profile', userAuthenticateJWT, profile)
// userAuthRouter.put('/update-profile', userAuthenticateJWT, update_profile)