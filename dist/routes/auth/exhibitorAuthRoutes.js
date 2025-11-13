"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exhibitorAuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const userAuthenticationMiddleware_1 = require("../../middlewares/userAuthenticationMiddleware");
const exhibitorAuthController_1 = require("../../controllers/authentication/exhibitorAuthController");
exports.exhibitorAuthRouter = express_1.default.Router();
exports.exhibitorAuthRouter.post('/exhibitor-register', exhibitorAuthController_1.registerExhibitor);
exports.exhibitorAuthRouter.post('/exhibitor-login', exhibitorAuthController_1.loginExhibitor);
exports.exhibitorAuthRouter.post('/exhibitor-logout', userAuthenticationMiddleware_1.userAuthenticateJWT, exhibitorAuthController_1.logoutExhibitor);
