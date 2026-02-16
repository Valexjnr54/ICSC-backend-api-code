import dotenv from "dotenv";

dotenv.config({ path:__dirname + '/../../.env' });

export const Config = {
    secret: process.env.JWT_SECRET || 'eyJhbGciOiJQUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.J5W09-rNx0pt5_HBiydR-vOluS6oD-RpYNa8PVWwMcBDQSXiw6-EPW8iSsalXPspGj3ouQjAnOP_4-zrlUUlvUIt2T79XyNeiKuooyIFvka3Y5NnGiOUBHWvWcWp4RcQFMBrZkHtJM23sB5D7Wxjx0-HFeNk-Y3UJgeJVhg5NaWXypLkC4y0ADrUBfGAxhvGdRdULZivfvzuVtv6AzW6NRuEE6DM9xpoWX_4here-yvLS2YPiBTZ8xbB3axdM99LhES-n52lVkiX5AWg2JJkEROZzLMpaacA_xlbUz_zbIaOaoqk8gB5oO7kI6sZej3QAdGigQy-hXiRnW_L98d4GQ',
    corsAllowedOrigin: process.env.CORS_ALLOWED_ORIGIN || '*',
    premblySecretKey: process.env.PREMBLY_LIVE_SECRET_KEY,
    premblyAppID: process.env.PREMBLY_LIVE_APP_ID,
    // fallbacks / sandbox keys
    premblyTestSecretKey: process.env.PREMBLY_SECRET_KEY,
    premblyTestAppID: process.env.PREMBLY_APP_ID,

    flutterwaveSecret: process.env.FLUTTERWAVE_API_KEY,
    flutterwaveBaseURL: process.env.FLUTTERWAVE_BASE_URL,
    flutterwaveDeliveryCallback: process.env.FLUTTERWAVE_CALLBACK,
    flutterwaveCurrency: process.env.FLUTTERWAVE_CURRENCY || 'USD',

    remitaApiKey: process.env.REMITA_API_KEY,
    remitaMerchantId: process.env.REMITA_MERCHANT_ID,
    remitaBaseURL: process.env.REMITA_BASE_URL,
    remitaServiceTypeId: process.env.REMITA_SERVICE_TYPE_ID,
    remitaDeliveryCallback: process.env.REMITA_CALLBACK,
    remitaCurrency: process.env.REMITA_CURRENCY || 'NGN',
};