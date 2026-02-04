import express from "express";
import { userAuthenticateJWT } from "../../middlewares/userAuthenticationMiddleware";
import { partner_profile, submitPartnerSchedule,  } from "../../controllers/partner/dashboard_controller";

export const partnerRouter = express.Router();

partnerRouter.post('/agenda/schedule', userAuthenticateJWT, submitPartnerSchedule);
partnerRouter.get('/profile', userAuthenticateJWT, partner_profile)