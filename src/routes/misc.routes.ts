import express from "express";
import { upload } from "../middlewares/multerMiddleware";
import { exhibition_material_imageUpload, getAllRoundTables, getBooths, profile_imageUpload, profile_pictureUpload, stats } from "../controllers/miscellanous_controller";
import { getEvents } from "../controllers/super_admin/agenda_controller";
import { uploadBankReceipt } from "../controllers/payment_controller";

export const miscRouter = express.Router();

miscRouter.post('/upload-image', upload.single('company_logo'), profile_imageUpload);
miscRouter.post('/upload-exhibition-materials', upload.array('exhibition_material', 10), exhibition_material_imageUpload);
miscRouter.post('/upload-profile-picture', upload.single('profile_picture'), profile_pictureUpload);
miscRouter.get('/agenda/event-agendas', getEvents);
miscRouter.get('/stats', stats);
miscRouter.get('/round-tables', getAllRoundTables);
miscRouter.get('/booth/all-booths', getBooths);
miscRouter.post('/upload-payment-receipt', upload.single('receipt'), uploadBankReceipt);