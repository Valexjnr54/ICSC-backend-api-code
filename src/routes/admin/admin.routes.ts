import express from "express";
import { adminOnly } from "../../middlewares/adminMiddleware";
import { authenticateJWT } from "../../middlewares/authenticationMiddleware";
import { upload } from "../../middlewares/multerMiddleware";
import { uploadCSV } from "../../middlewares/uploadCSVMiddleware";
import { allUser, createUser, deleteUser, singleUser } from "../../controllers/super_admin/users_controller";
import { allAttendees, createAttendee, deleteAttendee, singleAttendee } from "../../controllers/super_admin/attendee_controller";

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