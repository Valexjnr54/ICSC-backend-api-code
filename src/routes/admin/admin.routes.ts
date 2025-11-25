import express from "express";
import { adminOnly } from "../../middlewares/adminMiddleware";
import { authenticateJWT } from "../../middlewares/authenticationMiddleware";
import { upload } from "../../middlewares/multerMiddleware";
import { uploadCSV } from "../../middlewares/uploadCSVMiddleware";
import { allUser, createUser, deleteUser, singleUser } from "../../controllers/super_admin/users_controller";
import { allAttendees, createAttendee, deleteAttendee, singleAttendee } from "../../controllers/super_admin/attendee_controller";
import { createBooth, deleteBooth, getBoothById, getBooths, updateBooth } from "../../controllers/super_admin/booth_controller";
import {
	createSpeakerPackage,
	updateSpeakerPackage,
	deleteSpeakerPackage,
	createPartnerPackage,
	updatePartnerPackage,
	deletePartnerPackage,
} from "../../controllers/packages_controller";

export const adminRouter = express.Router();

adminRouter.use(authenticateJWT, adminOnly);

adminRouter.post('/create-user', createUser);
adminRouter.get('/users', allUser);
adminRouter.get('/single-user', singleUser);
// adminRouter.put('/update-user', updateUser);
adminRouter.delete('/delete-user', deleteUser);

adminRouter.post('/create-attendee', createAttendee);
adminRouter.get('/attendees', allAttendees);
adminRouter.get('/single-attendee', singleAttendee);
adminRouter.delete('/delete-attendee', deleteAttendee);

adminRouter.post('/create-booth', createBooth);
adminRouter.put('/update-booth', updateBooth);
adminRouter.delete('/delete-booth', deleteBooth);
adminRouter.get('/get-booths', getBooths);
adminRouter.get('/single-booth', getBoothById);

// Packages (admin)
adminRouter.post('/create-speaker-package', createSpeakerPackage);
adminRouter.put('/update-speaker-package', updateSpeakerPackage);
adminRouter.delete('/delete-speaker-package', deleteSpeakerPackage);

adminRouter.post('/create-event-partner-package', createPartnerPackage);
adminRouter.put('/update-event-partner-package', updatePartnerPackage);
adminRouter.delete('/delete-event-partner-package', deletePartnerPackage);