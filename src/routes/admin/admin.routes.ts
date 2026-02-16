import express from "express";
import { adminOnly } from "../../middlewares/adminMiddleware";
import { authenticateJWT } from "../../middlewares/authenticationMiddleware";
import { upload } from "../../middlewares/multerMiddleware";
import { uploadCSV } from "../../middlewares/uploadCSVMiddleware";
import { allUser, createUser, deleteUser, singleUser } from "../../controllers/super_admin/users_controller";
import { allAttendees, createAttendee, deleteAttendee, singleAttendee, uploadAttendeesCSV, downloadAttendeeTemplate } from "../../controllers/super_admin/attendee_controller";
import { createBooth, deleteBooth, getBoothById, getBooths, updateBooth } from "../../controllers/super_admin/booth_controller";
import {
	createSpeakerPackage,
	updateSpeakerPackage,
	deleteSpeakerPackage,
	createPartnerPackage,
	updatePartnerPackage,
	deletePartnerPackage,
} from "../../controllers/packages_controller";
import { allSpeakers, createSpeaker, deleteSpeaker, singleSpeaker, assignOrApproveSpeakerTopic } from "../../controllers/super_admin/speaker_controller";
import { allExhibitors, createExhibitor, deleteExhibitor, singleExhibitor } from "../../controllers/super_admin/exhibitor_controller";
import { allEventPartners, createEventPartner, deleteEventPartner, singleEventPartner } from "../../controllers/super_admin/event_partner_controller";
import { createEvent, getEvents } from "../../controllers/super_admin/agenda_controller";
import { allPartners, approvePayment, createPartner, deletePartner, pendingPayments, rejectPayment, singlePartner } from "../../controllers/super_admin/partner_controller";
import { createResource, getAllResources, getSingleResource, updateResource, deleteResource } from "../../controllers/super_admin/resources_controller";
import { createRoundTable, getAllRoundTables } from "../../controllers/super_admin/round_table_controller";

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
// CSV upload for bulk creating attendees
adminRouter.post('/attendees/upload-csv', uploadCSV, uploadAttendeesCSV);
// Download CSV template
adminRouter.get('/attendees/template', downloadAttendeeTemplate);

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
adminRouter.post('/speaker/assign-or-approve-topic', assignOrApproveSpeakerTopic);

adminRouter.post('/create-exhibitor', createExhibitor);
adminRouter.get('/exhibitors', allExhibitors);
adminRouter.get('/single-exhibitor', singleExhibitor);
adminRouter.delete('/delete-exhibitor', deleteExhibitor);

adminRouter.post('/create-event-partner', createEventPartner);
adminRouter.get('/event-partners', allEventPartners);
adminRouter.get('/single-event-partner', singleEventPartner);
adminRouter.delete('/delete-event-partner', deleteEventPartner);

adminRouter.post('/create-partner', createPartner);
adminRouter.get('/partners', allPartners);
adminRouter.get('/single-partner', singlePartner);
adminRouter.delete('/delete-partner', deletePartner);

adminRouter.post('/agenda/create-event-agenda', createEvent);
adminRouter.get('/agenda/event-agendas', getEvents);

adminRouter.post('/create-resource', upload.single('resourceFile'), createResource);
adminRouter.get('/resources', getAllResources);
adminRouter.get('/single-resource', getSingleResource);
adminRouter.put('/update-resource', upload.single('resourceFile'), updateResource);
adminRouter.delete('/delete-resource', deleteResource);

adminRouter.post('/round-table/create-round-table', createRoundTable);
adminRouter.get('/round-tables', getAllRoundTables);

adminRouter.get('/pending-payments', pendingPayments);
adminRouter.post('/approve-payment', approvePayment);
adminRouter.post('/reject-payment', rejectPayment);