import express from "express";
import { upload } from "../middlewares/multerMiddleware";
import { getAllRoundTables, profile_imageUpload, profile_pictureUpload, stats } from "../controllers/miscellanous_controller";
import { getEvents } from "../controllers/super_admin/agenda_controller";

export const miscRouter = express.Router();

miscRouter.post('/upload-image', upload.single('company_logo'), profile_imageUpload);
miscRouter.post('/upload-profile-picture', upload.single('profile_picture'), profile_pictureUpload);
miscRouter.get('/agenda/event-agendas', getEvents);
miscRouter.get('/stats', stats);
miscRouter.get('/round-tables', getAllRoundTables);