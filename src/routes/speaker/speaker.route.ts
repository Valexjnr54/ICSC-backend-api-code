import express from "express";
import { userAuthenticateJWT } from "../../middlewares/userAuthenticationMiddleware";
import { speaker_profile } from "../../controllers/speaker/dashboard_controller";

export const speakerRouter = express.Router();

speakerRouter.get('/profile', userAuthenticateJWT, speaker_profile)
