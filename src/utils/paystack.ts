// paystack.ts
import axios from 'axios';
import { Config } from '../config/config';

const PAYSTACK_SECRET_KEY = Config.paystackSecret;
const PAYSTACK_BASE_URL = Config.paystackBaseURL;

function ensureConfig() {
  if (!PAYSTACK_SECRET_KEY) {
    throw new Error('PAYSTACK_API_KEY is not configured. Set PAYSTACK_API_KEY in your environment');
  }
  if (!PAYSTACK_BASE_URL) {
    throw new Error('PAYSTACK_BASE_URL is not configured. Set PAYSTACK_BASE_URL in your environment');
  }
}

export async function initializePayment(farmer_id:number, phone_number:string, price: number, email:string, callback_url: string) {
  ensureConfig();
  try {
    const resp = await axios.post(
      PAYSTACK_BASE_URL + '/initialize',
      {
        amount: price,
        callback_url,
        email,
        metadata: {
          farmer_id,
          phone_number,
          amount: price,
          email,
        }
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );
    return resp.data;
  } catch (err) {
    // Normalize error and rethrow so callers can decide how to respond
    if ((err as any).isAxiosError) {
      const axiosErr = err as any;
      const status = axiosErr.response?.status;
      const data = axiosErr.response?.data;
      const message = data?.message || axiosErr.message || 'Paystack request failed';
      const e = new Error(message) as any;
      e.status = status || 500;
      e.details = data;
      throw e;
    }
    throw err;
  }
}

export async function verifyPayment(reference: string) {
  ensureConfig();
  try {
    const resp = await axios.get(
      PAYSTACK_BASE_URL + `/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );
    return resp.data;
  } catch (err) {
    if ((err as any).isAxiosError) {
      const axiosErr = err as any;
      const status = axiosErr.response?.status;
      const data = axiosErr.response?.data;
      const message = data?.message || axiosErr.message || 'Paystack verify failed';
      const e = new Error(message) as any;
      e.status = status || 500;
      e.details = data;
      throw e;
    }
    throw err;
  }
}

export function extractReferenceFromRequest(req: any) {
  const reference = req.query.reference;
  return reference;
}