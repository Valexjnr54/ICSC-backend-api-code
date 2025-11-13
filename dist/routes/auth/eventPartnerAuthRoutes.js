"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventPartnerAuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const userAuthenticationMiddleware_1 = require("../../middlewares/userAuthenticationMiddleware");
const eventPartnerAuthController_1 = require("../../controllers/authentication/eventPartnerAuthController");
exports.eventPartnerAuthRouter = express_1.default.Router();
exports.eventPartnerAuthRouter.post('/event-partner-register', eventPartnerAuthController_1.registerEventPartner);
exports.eventPartnerAuthRouter.post('/event-partner-login', eventPartnerAuthController_1.loginEventPartner);
exports.eventPartnerAuthRouter.post('/event-partner-logout', userAuthenticationMiddleware_1.userAuthenticateJWT, eventPartnerAuthController_1.logoutEventPartner);
