"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendeeAuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const userAuthenticationMiddleware_1 = require("../../middlewares/userAuthenticationMiddleware");
const attendeeAuthController_1 = require("../../controllers/authentication/attendeeAuthController");
exports.attendeeAuthRouter = express_1.default.Router();
exports.attendeeAuthRouter.post('/attendee-register', attendeeAuthController_1.registerAttendee);
exports.attendeeAuthRouter.post('/attendee-login', attendeeAuthController_1.loginAttendee);
exports.attendeeAuthRouter.post('/attendee-logout', userAuthenticationMiddleware_1.userAuthenticateJWT, attendeeAuthController_1.logoutAttendee);
