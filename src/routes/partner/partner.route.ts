import express from "express";
import { userAuthenticateJWT } from "../../middlewares/userAuthenticationMiddleware";
import { create_exhibition_booth, partner_profile, submitPartnerSchedule, subscribe_package,  } from "../../controllers/partner/dashboard_controller";

export const partnerRouter = express.Router();

partnerRouter.post('/agenda/schedule', userAuthenticateJWT, submitPartnerSchedule);
partnerRouter.get('/profile', userAuthenticateJWT, partner_profile)
partnerRouter.post('/create-exhibition-booth', userAuthenticateJWT, create_exhibition_booth)
partnerRouter.post('/subscribe-package', userAuthenticateJWT, subscribe_package)
