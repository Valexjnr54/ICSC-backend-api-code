import express from "express";
import { upload } from "../middlewares/multerMiddleware";
import { profile_imageUpload } from "../controllers/miscellanous_controller";

export const miscRouter = express.Router();

miscRouter.post('/upload-image', upload.single('company_logo'), profile_imageUpload);