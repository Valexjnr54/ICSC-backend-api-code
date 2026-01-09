import { Request, Response } from 'express';
import { PrismaClient } from '../models';
import { initializePayment, verifyPayment } from '../utils/flutterwave';
import { Config } from '../config/config';

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

    const callback_url = "https://icsc-nigeria.netlify.app/register-partner.html";

    // Build callback - allow frontend override or use configured callback
    const cb = callback_url || Config.flutterwaveDeliveryCallback || '';

    // For Flutterwave the `amount` should be in currency units (e.g., 10.50),
    // not in minor units (cents). Pass `price` directly.
    const init = await initializePayment(user.id, user.phone_number || '', Number(price), user.email || '', cb, currency);

    return res.status(200).json({ success: true, data: init });
  } catch (err: any) {
    console.error('initializePackagePayment error', err);
    return res.status(err?.status || 500).json({ success: false, message: err?.message || 'Internal Server Error', details: err?.details || null });
  }
}

// Verify payment reference returned by Flutterwave and update DB record
export async function verifyPackagePayment(req: Request, res: Response) {
  try {
    const { reference, event_package_id } = req.query as any;
    if (!reference) return res.status(400).json({ message: 'reference is required' });

  const verification: any = await verifyPayment(reference as string);

    const status = verification?.data?.status; // "success" when paid
    const metadata = verification?.data?.metadata || {};

    // Determine possible partner id keys (legacy naming: farmer_id)
    const possiblePartnerId = metadata?.farmer_id ?? metadata?.event_partner_id ?? metadata?.user_id;

    // Build where clause safely (don't include undefined fields)
    let partnerPackage = null;
    if (possiblePartnerId) {
      const where: any = { event_partner_id: Number(possiblePartnerId) };
      if (event_package_id) where.event_package_id = Number(event_package_id);
      partnerPackage = await prisma.eventPartnerPackages.findFirst({ where });
    }

    // If not found by metadata, try matching by payment_reference
    if (!partnerPackage) {
      partnerPackage = await prisma.eventPartnerPackages.findFirst({ where: { payment_reference: reference as string } });
    }

    // If found, update the record with reference, method and status
    if (partnerPackage) {
      await prisma.eventPartnerPackages.update({
        where: { id: partnerPackage.id },
        data: {
          payment_reference: reference as string,
          payment_method: 'flutterwave',
          payment_status: status === 'success' ? 'Approved' : 'Rejected'
        }
      });
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
    const init = await initializePayment(user.id, user.phone_number || '', Number(price), user.email || '', cb, currency);

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
    const user: any = (req as any).user;
    const file = (req as any).file;
    const { event_package_id } = req.body;

    if (!file) return res.status(400).json({ message: 'receipt file is required' });
    if (!event_package_id) return res.status(400).json({ message: 'event_package_id is required' });

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
