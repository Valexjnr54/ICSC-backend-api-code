"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rateLimitMiddleware_1 = __importDefault(require("./middlewares/rateLimitMiddleware"));
const cors_1 = __importDefault(require("cors"));
const adminAuthRoutes_1 = require("./routes/auth/adminAuthRoutes");
const admin_routes_1 = require("./routes/admin/admin.routes");
const config_1 = require("./config/config");
const userAuthRoutes_1 = require("./routes/auth/userAuthRoutes");
const user_routes_1 = require("./routes/user/user.routes");
const attendeeAuthRoutes_1 = require("./routes/auth/attendeeAuthRoutes");
const speakerAuthRoutes_1 = require("./routes/auth/speakerAuthRoutes");
const exhibitorAuthRoutes_1 = require("./routes/auth/exhibitorAuthRoutes");
const eventPartnerAuthRoutes_1 = require("./routes/auth/eventPartnerAuthRoutes");
const app = (0, express_1.default)();
app.set("trust proxy", 1);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(rateLimitMiddleware_1.default);
app.use((0, cors_1.default)({ origin: config_1.Config.corsAllowedOrigin }));
app.use((_request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    next();
});
const route = '/api/v1';
app.get('/', (_request, response) => {
    return response.send('ICSC App has Started');
});
app.get(`${route}`, (_request, response) => {
    return response.send('ICSC App Backend has Started');
});
app.use(`${route}/auth`, adminAuthRoutes_1.adminAuthRouter);
app.use(`${route}/auth`, userAuthRoutes_1.userAuthRouter);
app.use(`${route}/auth`, attendeeAuthRoutes_1.attendeeAuthRouter);
app.use(`${route}/auth`, speakerAuthRoutes_1.speakerAuthRouter);
app.use(`${route}/auth`, exhibitorAuthRoutes_1.exhibitorAuthRouter);
app.use(`${route}/auth`, eventPartnerAuthRoutes_1.eventPartnerAuthRouter);
app.use(`${route}/admin`, admin_routes_1.adminRouter);
app.use(`${route}/user`, user_routes_1.ministryRouter);
app.use((error, request, response, next) => {
    if (error instanceof SyntaxError && 'body' in error) {
        return response.status(400).json({
            status: "failed",
            success: false,
            error: "Invalid Json",
            message: "the request contains invaild JSON"
        });
    }
    next(error);
});
app.use((request, response) => {
    response.status(404).json({
        status: "failed",
        success: false,
        error: "Not Found",
        message: `The requested resource ${request.url} was not found`
    });
});
exports.default = app;
