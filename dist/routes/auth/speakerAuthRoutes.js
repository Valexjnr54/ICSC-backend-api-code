"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.speakerAuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const userAuthenticationMiddleware_1 = require("../../middlewares/userAuthenticationMiddleware");
const speakerAuthController_1 = require("../../controllers/authentication/speakerAuthController");
exports.speakerAuthRouter = express_1.default.Router();
exports.speakerAuthRouter.post('/speaker-register', speakerAuthController_1.registerSpeaker);
exports.speakerAuthRouter.post('/speaker-login', speakerAuthController_1.loginSpeaker);
exports.speakerAuthRouter.post('/speaker-logout', userAuthenticationMiddleware_1.userAuthenticateJWT, speakerAuthController_1.logoutSpeaker);
