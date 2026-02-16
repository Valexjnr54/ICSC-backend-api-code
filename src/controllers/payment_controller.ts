import { Request, Response } from 'express';
import { PrismaClient } from '../models';
import { initializePayment, verifyPayment } from '../utils/flutterwave';
import { initializePayment as initializeRemitaPayment, verifyPayment as verifyRemitaPayment } from '../utils/remita';
import { Config } from '../config/config';
import { uploadImage } from '../utils/cloudinary';
import fs from 'fs';
import { log } from 'console';

const prisma = new PrismaClient();

// Initialize a Flutterwave payment and return the authorization url
export async function initializePackagePayment(req: Request, res: Response) {
  try {
    const user: any = (req as any).user; // set by userAuthenticateJWT middleware
    const { event_package_id, currency } = req.body;

    if (!event_package_id) {
      return res.status(400).json({ message: 'event_package_id is required' });
    }

    // Ensure event package exists
    const pkg = await prisma.partnerPackage.findUnique({ where: { id: Number(event_package_id) } });
    if (!pkg) {
      return res.status(404).json({ message: 'Event package not found' });
    }

    if(pkg.remaining_slot !== null && pkg.remaining_slot <= 0) {
      return res.status(400).json({ message: 'No remaining slots available for this package' });
    }

    const price =  Number(pkg.price);

    const callback_url = "http://Users/user/Desktop/Frontend-repo/register-partner.html";

    // Build callback - allow frontend override or use configured callback
    const cb = callback_url || Config.flutterwaveDeliveryCallback || '';

    // For Flutterwave the `amount` should be in currency units (e.g., 10.50),
    // not in minor units (cents). Pass `price` directly.
    const init = await initializePayment(user.id, user.phone_number, Number(price), user.email || '', cb, currency,pkg.id);

    return res.status(200).json({ success: true, data: init });
  } catch (err: any) {
    console.error('initializePackagePayment error', err);
    return res.status(err?.status || 500).json({ success: false, message: err?.message || 'Internal Server Error', details: err?.details || null });
  }
}

// Verify payment reference returned by Flutterwave and update DB record
export async function verifyPackagePayment(req: Request, res: Response) {
  try {
    const { reference } = req.query as any;
    if (!reference) return res.status(400).json({ message: 'reference is required' });

  const verification: any = await verifyPayment(reference as string);

    const status = verification?.data?.status; // "success" when paid
    const metadata = verification?.data?.meta || {};

    // Build a robust where clause: check by payment_reference OR by partner+package with a paid status
    const paidStatuses = ['Paid', 'Approved'];
    const normalizedReference = String(reference);

    const whereClause: any = { OR: [{ payment_reference: normalizedReference }] };

    const partnerIdFromMeta = metadata?.partner_id ? Number(metadata.partner_id) : undefined;
    const packageIdFromMeta = metadata?.package_id ? Number(metadata.package_id) : undefined;

    if (partnerIdFromMeta && packageIdFromMeta) {
      whereClause.OR.push({
        event_partner_id: partnerIdFromMeta,
        event_package_id: packageIdFromMeta,
        payment_status: { in: paidStatuses },
      });
    } else if (partnerIdFromMeta) {
      whereClause.OR.push({
        event_partner_id: partnerIdFromMeta,
        payment_status: { in: paidStatuses },
      });
    } else if (packageIdFromMeta) {
      whereClause.OR.push({
        event_package_id: packageIdFromMeta,
        payment_status: { in: paidStatuses },
      });
    }

    const payment_exists = await prisma.eventPartnerPackages.findFirst({ where: whereClause });

    if (payment_exists) {
      return res.status(200).json({ success: true, message: 'Payment already verified' });
    }

    // If not found, create a new mapping only when we have required ids
    if (partnerIdFromMeta && packageIdFromMeta) {
      await prisma.eventPartnerPackages.create({
        data: {
          event_partner_id: partnerIdFromMeta,
          event_package_id: packageIdFromMeta,
          payment_reference: normalizedReference,
          payment_method: 'flutterwave',
          payment_status: 'Paid',
        }
      });

      await prisma.partnerPackage.update({
        where: { id: packageIdFromMeta },
        data: {
          remaining_slot: {
            decrement: 1,
          },
        },
      });
    } else {
      console.warn('Insufficient metadata to create EventPartnerPackages record', { partnerIdFromMeta, packageIdFromMeta });
    }

    return res.status(200).json({ success: true, verification });
  } catch (err: any) {
    console.error('verifyPackagePayment error', err);
    return res.status(err?.status || 500).json({ success: false, message: err?.message || 'Internal Server Error' });
  }
}

// Initialize a Flutterwave payment for a speaker package and return the authorization url
export async function initializeSpeakerPackagePayment(req: Request, res: Response) {
  try {
    const user: any = (req as any).user; // set by userAuthenticateJWT middleware
    const { speaker_package_id, amount, currency } = req.body;

    if (!speaker_package_id) {
      return res.status(400).json({ message: 'speaker_package_id is required' });
    }

    // Ensure speaker package exists
    const pkg = await prisma.speakerPackage.findUnique({ where: { id: Number(speaker_package_id) } });
    if (!pkg) {
      return res.status(404).json({ message: 'Speaker package not found' });
    }

    const price = amount ? Number(amount) : Number(pkg.price);

    const callback_url = "https://icsc-nigeria.netlify.app/register-speaker.html";

    // Build callback - allow frontend override or use configured callback
    const cb = callback_url || Config.flutterwaveDeliveryCallback || '';

    // Note: initializePayment's first param is named `farmer_id` in the util; we pass the speaker's user id
    const init = await initializePayment(user.id, user.phone_number, Number(price), user.email || '', cb, currency,pkg.id);

    return res.status(200).json({ success: true, data: init });
  } catch (err: any) {
    console.error('initializeSpeakerPackagePayment error', err);
    return res.status(err?.status || 500).json({ success: false, message: err?.message || 'Internal Server Error', details: err?.details || null });
  }
}

// Verify speaker package payment reference returned by Flutterwave and return verification
export async function verifySpeakerPackagePayment(req: Request, res: Response) {
  try {
    const { reference, speaker_package_id } = req.query as any;
    if (!reference) return res.status(400).json({ message: 'reference is required' });

    const verification: any = await verifyPayment(reference as string);

    // We intentionally do not attempt to update database records here because
    // the project schema does not include a dedicated speaker-package purchase
    // mapping. Callers can use the returned `verification` object to reconcile
    // payments and update any appropriate tables in their own flow.

    return res.status(200).json({ success: true, verification });
  } catch (err: any) {
    console.error('verifySpeakerPackagePayment error', err);
    return res.status(err?.status || 500).json({ success: false, message: err?.message || 'Internal Server Error' });
  }
}

// Upload bank transfer receipt and mark the partner-package accordingly
export async function uploadSpeakerBankReceipt(req: Request, res: Response) {
  try {
    const user: any = (req as any).user;
    const file = (req as any).file;
    const { speaker_package_id } = req.body;

    if (!file) return res.status(400).json({ message: 'receipt file is required' });
    if (!speaker_package_id) return res.status(400).json({ message: 'event_package_id is required' });

    // Ensure partner-package exists
    // let partnerPackage = await prisma.eventPartnerPackages.findFirst({ where: { event_partner_id: user.id, event_package_id: Number(event_package_id) } });
    // if (!partnerPackage) {
    //   partnerPackage = await prisma.eventPartnerPackages.create({ data: { event_partner_id: user.id, event_package_id: Number(event_package_id), payment_status: 'Pending' } });
    // }

    const filePath = file.path || file.filename || '';

    // await prisma.eventPartnerPackages.update({ where: { id: partnerPackage.id }, data: { proof_of_payment: filePath, payment_method: 'bank_transfer', payment_status: 'Pending' } });

    return res.status(200).json({ success: true, message: 'Receipt uploaded successfully, payment pending approval' });
  } catch (err: any) {
    console.error('uploadBankReceipt error', err);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

export async function uploadBankReceipt(req: Request, res: Response) {
  try {
    const file = (req as any).file;
    const { event_package_id, user_id, reference } = req.body;

    if (!file) return res.status(400).json({ message: 'receipt file is required' });
    if (!event_package_id) return res.status(400).json({ message: 'event_package_id is required' });
    if (!user_id) return res.status(400).json({ message: 'user_id is required' });
    if (!reference) return res.status(400).json({ message: 'RRR from Remita is required' });

    const user_exists = await prisma.partner.findUnique({ where: { id: Number(user_id) } });
    if (!user_exists) {
      return res.status(404).json({ message: 'User not found' });
    }

    const package_exists = await prisma.partnerPackage.findUnique({ where: { id: Number(event_package_id) } });
    if (!package_exists) {
      return res.status(404).json({ message: 'Event package not found' });
    }

    // Ensure partner-package exists
    let partnerPackage = await prisma.eventPartnerPackages.findFirst({ where: { event_partner_id: Number(user_id), event_package_id: Number(event_package_id), payment_reference: reference } });
    if (!partnerPackage) {
      partnerPackage = await prisma.eventPartnerPackages.create({ data: { event_partner_id: Number(user_id), event_package_id: Number(event_package_id), payment_reference: reference, payment_status: 'Pending' } });
    }

    const filePath = file.path || file.filename || '';

    console.log(`Received file at path: ${filePath}`);
    
    // Upload image to Cloudinary
    const uploadedImageUrl = await uploadImage(filePath, 'icsc/images/partner_transfer_receipt/');

    // Delete the local file after uploading
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Error deleting file: ${filePath}`, err);
        }
    });

    console.log(`Uploaded image URL: ${uploadedImageUrl}`);

    await prisma.eventPartnerPackages.update({ where: { id: partnerPackage.id }, data: { proof_of_payment: uploadedImageUrl, payment_method: 'manual', payment_status: 'Pending' } });

    return res.status(200).json({ success: true, message: 'Receipt uploaded successfully, payment pending approval' });
  } catch (err: any) {
    console.error('uploadBankReceipt error', err);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}

// ==================== REMITA PAYMENT FUNCTIONS ====================

// Initialize a Remita payment for a partner package and return the authorization url
export async function initializeRemitaPackagePayment(req: Request, res: Response) {
  try {
    const user: any = (req as any).user; // set by userAuthenticateJWT middleware
    const { event_package_id, currency } = req.body;

    if (!event_package_id) {
      return res.status(400).json({ message: 'event_package_id is required' });
    }

    // Ensure event package exists
    const pkg = await prisma.partnerPackage.findUnique({ where: { id: Number(event_package_id) } });
    if (!pkg) {
      return res.status(404).json({ message: 'Event package not found' });
    }

    if (pkg.remaining_slot !== null && pkg.remaining_slot <= 0) {
      return res.status(400).json({ message: 'No remaining slots available for this package' });
    }

    const price = Number(pkg.price);

    const callback_url = "https://icsc-nigeria.netlify.app/register-partner.html";

    // Build callback - allow frontend override or use configured callback
    const cb = callback_url || Config.remitaDeliveryCallback || '';

    const init = await initializeRemitaPayment(user.id, user.phone_number, Number(price), user.email || '', cb, pkg.id);

    return res.status(200).json({ success: true, data: init });
  } catch (err: any) {
    console.error('initializeRemitaPackagePayment error', err);
    return res.status(err?.status || 500).json({ success: false, message: err?.message || 'Internal Server Error', details: err?.details || null });
  }
}

// Verify Remita payment reference and update DB record
export async function verifyRemitaPackagePayment(req: Request, res: Response) {
  try {
    const { reference } = req.query as any;
    if (!reference) return res.status(400).json({ message: 'reference is required' });

    const response: any = await verifyRemitaPayment(reference as string);

    const status = response?.status; // Check Remita's response status - '00' means successful
    const normalizedReference = String(reference);

    // Extract userId and packageId from customFields array
    let partnerIdFromMeta: number | undefined;
    let packageIdFromMeta: number | undefined;

    if (response?.customFields && Array.isArray(response.customFields)) {
      const userIdField = response.customFields.find((field: any) => field.COLUMNNAME === 'Userid');
      const packageIdField = response.customFields.find((field: any) => field.COLUMNNAME === 'Packageid');
      
      partnerIdFromMeta = userIdField ? Number(userIdField.COLVAL) : undefined;
      packageIdFromMeta = packageIdField ? Number(packageIdField.COLVAL) : undefined;
    }

    // Build a robust where clause: check by payment_reference OR by partner+package with a paid status
    const paidStatuses = ['Paid', 'Approved'];
    const whereClause: any = { OR: [{ payment_reference: normalizedReference }] };

    if (partnerIdFromMeta && packageIdFromMeta) {
      whereClause.OR.push({
        event_partner_id: partnerIdFromMeta,
        event_package_id: packageIdFromMeta,
        payment_status: { in: paidStatuses },
      });
    } else if (partnerIdFromMeta) {
      whereClause.OR.push({
        event_partner_id: partnerIdFromMeta,
        payment_status: { in: paidStatuses },
      });
    } else if (packageIdFromMeta) {
      whereClause.OR.push({
        event_package_id: packageIdFromMeta,
        payment_status: { in: paidStatuses },
      });
    }

    const payment_exists = await prisma.eventPartnerPackages.findFirst({ where: whereClause });

    if (payment_exists) {
      return res.status(200).json({ success: true, message: 'Payment already verified', data: response });
    }

    // If not found, create a new mapping only when we have required ids and payment was successful
    if (partnerIdFromMeta && packageIdFromMeta && status === '00') {
      // await prisma.eventPartnerPackages.create({
      //   data: {
      //     event_partner_id: partnerIdFromMeta,
      //     event_package_id: packageIdFromMeta,
      //     payment_reference: normalizedReference,
      //     payment_method: 'remita',
      //     payment_status: 'Paid',
      //   }
      // });

      await prisma.eventPartnerPackages.upsert({
        where: {
          event_partner_id_event_package_id: {
            event_partner_id: partnerIdFromMeta,
            event_package_id: packageIdFromMeta
          }
        },
        update: {
          // Fields to update if record exists
          payment_reference: normalizedReference,
          payment_method: 'remita',
          payment_status: 'Paid'
        },
        create: {
          // Fields to create if record doesn't exist
          event_partner_id: partnerIdFromMeta,
          event_package_id: packageIdFromMeta,
          payment_reference: normalizedReference,
          payment_method: 'remita',
          payment_status: 'Paid'
        }
      });

      await prisma.partnerPackage.update({
        where: { id: packageIdFromMeta },
        data: {
          remaining_slot: {
            decrement: 1,
          },
        },
      });
    } else {
      console.warn('Insufficient metadata or payment not successful for EventPartnerPackages record', { partnerIdFromMeta, packageIdFromMeta, status });
    }

    return res.status(200).json({ success: true, message: 'Payment verified successfully', data: response });
  } catch (err: any) {
    console.error('verifyRemitaPackagePayment error', err);
    return res.status(err?.status || 500).json({ success: false, message: err?.message || 'Internal Server Error' });
  }
}

// Initialize a Remita payment for a speaker package and return the authorization url
export async function initializeRemitaSpeakerPackagePayment(req: Request, res: Response) {
  try {
    const user: any = (req as any).user; // set by userAuthenticateJWT middleware
    const { speaker_package_id, amount, currency } = req.body;

    if (!speaker_package_id) {
      return res.status(400).json({ message: 'speaker_package_id is required' });
    }

    // Ensure speaker package exists
    const pkg = await prisma.speakerPackage.findUnique({ where: { id: Number(speaker_package_id) } });
    if (!pkg) {
      return res.status(404).json({ message: 'Speaker package not found' });
    }

    const price = amount ? Number(amount) : Number(pkg.price);

    const callback_url = "https://icsc-nigeria.netlify.app/register-speaker.html";

    // Build callback - allow frontend override or use configured callback
    const cb = callback_url || Config.remitaDeliveryCallback || '';

    const init = await initializeRemitaPayment(user.id, user.phone_number, Number(price), user.email || '', cb, pkg.id);

    return res.status(200).json({ success: true, data: init });
  } catch (err: any) {
    console.error('initializeRemitaSpeakerPackagePayment error', err);
    return res.status(err?.status || 500).json({ success: false, message: err?.message || 'Internal Server Error', details: err?.details || null });
  }
}

// Verify Remita speaker package payment reference
export async function verifyRemitaSpeakerPackagePayment(req: Request, res: Response) {
  try {
    const { reference } = req.query as any;
    if (!reference) return res.status(400).json({ message: 'reference is required' });

    const verification: any = await verifyRemitaPayment(reference as string);

    return res.status(200).json({ success: true, verification });
  } catch (err: any) {
    console.error('verifyRemitaSpeakerPackagePayment error', err);
    return res.status(err?.status || 500).json({ success: false, message: err?.message || 'Internal Server Error' });
  }
}
