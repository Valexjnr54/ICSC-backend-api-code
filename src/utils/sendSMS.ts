import axios from 'axios';

const termiiApiKey = process.env.TERMII_API_KEY;
const termiiEndpoint = process.env.TERMII_ENDPOINT || 'https://v3.api.termii.com/api/sms/send';

function normalizePhoneNumber(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, '');

  if (digitsOnly.startsWith('0')) {
    return '+234' + digitsOnly.slice(1);
  }

  if (digitsOnly.startsWith('234')) {
    return '+' + digitsOnly;
  }

  if (phone.startsWith('+234')) {
    return phone;
  }

  throw new Error('Invalid Nigerian phone number format.');
}

export async function sendSMS(phoneNumber: string, message: string): Promise<void> {
  if (!termiiApiKey) {
    console.error('TERMII_API_KEY is not set in environment.');
    throw new Error('TERMII_API_KEY is required to send SMS.');
  }

  const termiiSender = process.env.TERMII_SENDER_NAME || 'AfrikFarm';

  const formattedNumber = normalizePhoneNumber(phoneNumber);

  try {
    const response = await axios.post(
      termiiEndpoint,
      {
        api_key: termiiApiKey,
        to: formattedNumber,
        sms: message,
        from: termiiSender,
        type: 'plain',
        channel: 'generic',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('SMS sent successfully:', response.data);
  } catch (error: unknown) {
    const errAny = error as any;
    if (errAny && errAny.isAxiosError) {
      const respData = errAny.response?.data;
      console.error('Error sending SMS:', respData ?? errAny.message);

      // If provider returned a structured error, include it in the thrown message
      if (respData) {
        throw new Error(`Failed to send SMS: ${JSON.stringify(respData)}`);
      }

      throw new Error(`Failed to send SMS: ${errAny.message}`);
    }

    console.error('Unknown error while sending SMS:', error);
    throw error instanceof Error ? error : new Error(String(error));
  }
}