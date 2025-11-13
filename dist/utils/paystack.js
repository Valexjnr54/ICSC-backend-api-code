"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializePayment = initializePayment;
exports.verifyPayment = verifyPayment;
exports.extractReferenceFromRequest = extractReferenceFromRequest;
// paystack.ts
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config/config");
const PAYSTACK_SECRET_KEY = config_1.Config.paystackSecret;
const PAYSTACK_BASE_URL = config_1.Config.paystackBaseURL;
function ensureConfig() {
    if (!PAYSTACK_SECRET_KEY) {
        throw new Error('PAYSTACK_API_KEY is not configured. Set PAYSTACK_API_KEY in your environment');
    }
    if (!PAYSTACK_BASE_URL) {
        throw new Error('PAYSTACK_BASE_URL is not configured. Set PAYSTACK_BASE_URL in your environment');
    }
}
async function initializePayment(farmer_id, phone_number, price, email, callback_url) {
    ensureConfig();
    try {
        const resp = await axios_1.default.post(PAYSTACK_BASE_URL + '/initialize', {
            amount: price,
            callback_url,
            email,
            metadata: {
                farmer_id,
                phone_number,
                amount: price,
                email,
            }
        }, {
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            },
        });
        return resp.data;
    }
    catch (err) {
        // Normalize error and rethrow so callers can decide how to respond
        if (err.isAxiosError) {
            const axiosErr = err;
            const status = axiosErr.response?.status;
            const data = axiosErr.response?.data;
            const message = data?.message || axiosErr.message || 'Paystack request failed';
            const e = new Error(message);
            e.status = status || 500;
            e.details = data;
            throw e;
        }
        throw err;
    }
}
async function verifyPayment(reference) {
    ensureConfig();
    try {
        const resp = await axios_1.default.get(PAYSTACK_BASE_URL + `/verify/${reference}`, {
            headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
            },
        });
        return resp.data;
    }
    catch (err) {
        if (err.isAxiosError) {
            const axiosErr = err;
            const status = axiosErr.response?.status;
            const data = axiosErr.response?.data;
            const message = data?.message || axiosErr.message || 'Paystack verify failed';
            const e = new Error(message);
            e.status = status || 500;
            e.details = data;
            throw e;
        }
        throw err;
    }
}
function extractReferenceFromRequest(req) {
    const reference = req.query.reference;
    return reference;
}
