// flutterwave.ts
// Migrated from paystack.ts
import axios from 'axios';
import { Config } from '../config/config';

const FLUTTERWAVE_SECRET_KEY = Config.flutterwaveSecret;
const FLUTTERWAVE_BASE_URL = Config.flutterwaveBaseURL;

function ensureConfig() {
  if (!FLUTTERWAVE_SECRET_KEY) {
    throw new Error('FLUTTERWAVE_API_KEY is not configured. Set FLUTTERWAVE_API_KEY in your environment');
  }
  if (!FLUTTERWAVE_BASE_URL) {
    throw new Error('FLUTTERWAVE_BASE_URL is not configured. Set FLUTTERWAVE_BASE_URL in your environment');
  }
}

export async function initializePayment(speaker_id:number, phone_number:string, price: number, email:string, callback_url: string, currency?: string) {
  ensureConfig();
  try {
    // Flutterwave requires a transaction reference `tx_ref` in the initialize payload.
    const tx_ref = `ICSC_${speaker_id}_${Date.now()}`;

    const resp = await axios.post(
      FLUTTERWAVE_BASE_URL + '/payments',
      {
        tx_ref,
        amount: price,
        redirect_url: callback_url,
        customer: {
          email,
          phonenumber: phone_number,
          name: email,
        },
        currency: currency || Config.flutterwaveCurrency || 'USD',
        meta: {
          tx_ref,
          speaker_id,
          phone_number,
          amount: price,
          email,
        }
      },
      {
        headers: {
          Authorization: `Bearer ${FLUTTERWAVE_SECRET_KEY}`,
        },
      }
    );
    return resp.data;
  } catch (err) {
    if ((err as any).isAxiosError) {
      const axiosErr = err as any;
      const status = axiosErr.response?.status;
      const data = axiosErr.response?.data;
      const message = data?.message || axiosErr.message || 'Flutterwave request failed';
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
      FLUTTERWAVE_BASE_URL + `/transactions/${reference}/verify`,
      {
        headers: {
          Authorization: `Bearer ${FLUTTERWAVE_SECRET_KEY}`,
        },
      }
    );
    return resp.data;
  } catch (err) {
    if ((err as any).isAxiosError) {
      const axiosErr = err as any;
      const status = axiosErr.response?.status;
      const data = axiosErr.response?.data;
      const message = data?.message || axiosErr.message || 'Flutterwave verify failed';
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
