// remita.ts
// Remita Online Payments (Checkout) integration
import axios from 'axios';
import crypto from 'crypto';
import { Config } from '../config/config';
import { PrismaClient } from '../models';
import { response } from 'express';

const prisma = new PrismaClient();

const REMITA_API_KEY = Config.remitaApiKey;
const REMITA_MERCHANT_ID = Config.remitaMerchantId;
const REMITA_BASE_URL = Config.remitaBaseURL;
const REMITA_SERVICE_TYPE_ID = Config.remitaServiceTypeId;

function ensureConfig() {
  if (!REMITA_API_KEY) {
    throw new Error('REMITA_API_KEY is not configured. Set REMITA_API_KEY in your environment');
  }
  if (!REMITA_MERCHANT_ID) {
    throw new Error('REMITA_MERCHANT_ID is not configured. Set REMITA_MERCHANT_ID in your environment');
  }
  if (!REMITA_BASE_URL) {
    throw new Error('REMITA_BASE_URL is not configured. Set REMITA_BASE_URL in your environment');
  }
  if (!REMITA_SERVICE_TYPE_ID) {
    throw new Error('REMITA_SERVICE_TYPE_ID is not configured. Set REMITA_SERVICE_TYPE_ID in your environment');
  }
}

/**
 * Generates the checksum required by Remita for requests
 */
function generateInitHash(
  merchantId: string,
  serviceTypeId: string,
  orderId: string,
  amount: number,
  apiKey: string
): string {
  const raw = merchantId + serviceTypeId + orderId + amount + apiKey;
  return crypto.createHash('sha512').update(raw).digest('hex');
}

function generateVerifyHash(
  rrr: string,
  apiKey: string,
  merchantId: string
): string {
  const raw = rrr + apiKey + merchantId;
  return crypto.createHash('sha512').update(raw).digest('hex');
}

export async function initializePayment(
  userId: number,
  phoneNumber: string,
  amount: number,
  email: string,
  callbackUrl: string,
  packageId: number
) {
  ensureConfig();

  const user = await prisma.partner.findUnique({ where: { id: userId } });
  if (!user) {
      return response.status(400).json({ message: 'User not found' });
  }

  const fullname = `${user.firstname} ${user.lastname}`.trim();
  const phone_number = user.phone_number;

  const orderId = `ICSC_${userId}_${Date.now()}`;

  const hash = generateInitHash(
    REMITA_MERCHANT_ID!,
    REMITA_SERVICE_TYPE_ID!,
    orderId,
    amount,
    REMITA_API_KEY!
  );

  const payload = {
    serviceTypeId: REMITA_SERVICE_TYPE_ID,
    amount,
    orderId,
    payerName: fullname,
    payerEmail: email,
    payerPhone: phone_number,
    description: 'Payment for subscription',
    customFields: [
      {
        name: 'userId',
        value: userId,
        type: 'ALL'
      },
      {
        name: 'packageId',
        value: packageId,
        type: 'ALL'
      },
    ]
  };

  try {
  const response = await axios.post(
    `${REMITA_BASE_URL}/remita/exapp/api/v1/send/api/echannelsvc/merchant/api/paymentinit`,
    payload,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `remitaConsumerKey=${REMITA_MERCHANT_ID},remitaConsumerToken=${hash}`
      }
    }
  )
  return response.data;
} catch (error: any) {
  console.error('STATUS:', error.response?.status);
  console.error('HEADERS:', error.response?.headers);
  console.error('DATA:', error.response?.data);
  throw error;
}


//   return response.data;
}


export async function verifyPayment(rrr: string) {
  ensureConfig();

  const hash = generateVerifyHash(
    rrr,
    REMITA_API_KEY!,
    REMITA_MERCHANT_ID!
  );

  const response = await axios.get(
    `${REMITA_BASE_URL}/remita/exapp/api/v1/send/api/echannelsvc/${REMITA_MERCHANT_ID}/${rrr}/${hash}/status.reg`,
    {
      headers: {
        'Authorization': `remitaConsumerKey=${REMITA_MERCHANT_ID},remitaConsumerToken=${hash}`
      }
    }
  );

  return response.data;
}


export function extractReferenceFromRequest(req: any) {
  const reference = req.query.reference || req.body.reference;
  return reference;
}
