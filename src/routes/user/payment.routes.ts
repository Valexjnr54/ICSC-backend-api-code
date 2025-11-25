import express from 'express';
import { userAuthenticateJWT } from '../../middlewares/userAuthenticationMiddleware';
import { upload } from '../../middlewares/multerMiddleware';
import { initializePackagePayment, verifyPackagePayment, uploadBankReceipt, verifySpeakerPackagePayment, initializeSpeakerPackagePayment, uploadSpeakerBankReceipt } from '../../controllers/payment_controller';

export const paymentRouter = express.Router();

// Init payment (Flutterwave)
paymentRouter.post('/initialize-event-partner-payment', userAuthenticateJWT, initializePackagePayment);

// Verify payment (callback / frontend can call)
paymentRouter.get('/verify-event-partner-payment', verifyPackagePayment);

// Init payment (Flutterwave)
paymentRouter.post('/initialize-speaker-payment', userAuthenticateJWT, initializeSpeakerPackagePayment);

// Verify payment (callback / frontend can call)
paymentRouter.get('/verify-speaker-payment', verifySpeakerPackagePayment);

// Upload bank transfer receipt
paymentRouter.post('/bank-transfer', userAuthenticateJWT, upload.single('receipt'), uploadSpeakerBankReceipt);
