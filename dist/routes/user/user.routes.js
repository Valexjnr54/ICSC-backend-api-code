"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ministryRouter = void 0;
const express_1 = __importDefault(require("express"));
const roleMiddleware_1 = require("../../middlewares/roleMiddleware");
const userAuthenticationMiddleware_1 = require("../../middlewares/userAuthenticationMiddleware");
const attendee_controller_1 = require("../../controllers/user/attendee_controller");
exports.ministryRouter = express_1.default.Router();
exports.ministryRouter.use(userAuthenticationMiddleware_1.userAuthenticateJWT, roleMiddleware_1.ministryOnly);
exports.ministryRouter.post('/create-attendee', attendee_controller_1.createAttendee);
exports.ministryRouter.get('/attendees', attendee_controller_1.allAttendees);
exports.ministryRouter.get('/single-attendee', attendee_controller_1.singleAttendee);
exports.ministryRouter.delete('/delete-attendee', attendee_controller_1.deleteAttendee);
