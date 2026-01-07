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
import { allSpeakers, createSpeaker, deleteSpeaker, singleSpeaker } from "../../controllers/super_admin/speaker_controller";
import { allExhibitors, createExhibitor, deleteExhibitor, singleExhibitor } from "../../controllers/super_admin/exhibitor_controller";
import { allEventPartners, createEventPartner, deleteEventPartner, singleEventPartner } from "../../controllers/super_admin/event_partner_controller";
import { createEvent, getEvents } from "../../controllers/super_admin/agenda_controller";

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

adminRouter.post('/create-speaker', createSpeaker);
adminRouter.get('/speakers', allSpeakers);
adminRouter.get('/single-speaker', singleSpeaker);
adminRouter.delete('/delete-speaker', deleteSpeaker);

adminRouter.post('/create-exhibitor', createExhibitor);
adminRouter.get('/exhibitors', allExhibitors);
adminRouter.get('/single-exhibitor', singleExhibitor);
adminRouter.delete('/delete-exhibitor', deleteExhibitor);

adminRouter.post('/create-event-partner', createEventPartner);
adminRouter.get('/event-partners', allEventPartners);
adminRouter.get('/single-event-partner', singleEventPartner);
adminRouter.delete('/delete-event-partner', deleteEventPartner);

adminRouter.post('/agenda/create-event-agenda', createEvent);
adminRouter.get('/agenda/event-agendas', getEvents);