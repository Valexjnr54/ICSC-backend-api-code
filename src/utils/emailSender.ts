const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const nodemailer = require('nodemailer');

const MAIL_DEBUG = process.env.MAIL_DEBUG === 'true';

// Helper: Send via SendGrid HTTP API when configured
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'support@eyzmo.com';
const SENDGRID_FROM_NAME = process.env.SENDGRID_FROM_NAME || 'INTERNATIONAL CIVIL SERVICE CONFERENCE (ICSC)';

async function sendViaSendGrid(_from: { email: string; name?: string } | null, to: string, subject: string, html: string) {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  if (!SENDGRID_API_KEY) throw new Error('SendGrid API key not configured');

  const body = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: SENDGRID_FROM_EMAIL, name: SENDGRID_FROM_NAME },
    subject,
    content: [{ type: 'text/html', value: html }]
  };

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SENDGRID_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    // small timeout isn't directly supported by fetch API here - rely on platform timeout
  });

  if (!res.ok) {
    const text = await res.text().catch(() => 'unable to read body');
    // include details from SendGrid for easier debugging
    throw new Error(`SendGrid send failed: ${res.status} ${res.statusText} - ${text}`);
  }

  return true;
}

// Helper: send via SMTP using nodemailer
async function sendViaSMTP(from: { email: string; name?: string } | null, to: string, subject: string, html: string) {
  const SMTP_HOST = process.env.MAIL_HOST;
  const SMTP_PORT = process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT, 10) : undefined;
  const SMTP_USER = process.env.MAIL_USER;
  const SMTP_PASS = process.env.MAIL_PASSWORD;
  const SMTP_SECURE = process.env.MAIL_SECURE === 'true';

  if (!SMTP_HOST || !SMTP_PORT) throw new Error('SMTP configuration missing (SMTP_HOST/SMTP_PORT)');

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT, 
    secure: !!SMTP_SECURE,
    auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  });

  // Optionally verify transporter first (will throw if unreachable)
  try {
    if (process.env.MAIL_VERIFY_SMTP === 'true') {
      await transporter.verify();
    }

    const fromHeader = from ? `${from.name ? from.name + ' ' : ''}<${from.email}>` : `${SENDGRID_FROM_NAME} <${SENDGRID_FROM_EMAIL}>`;

    const info = await transporter.sendMail({
      from: fromHeader,
      to,
      subject,
      html,
    });

    if (MAIL_DEBUG) console.log('SMTP send info:', info);
    return true;
  } catch (err: any) {
    throw new Error(`SMTP send failed: ${err && err.message ? err.message : String(err)}`);
  }
}

// Helper to decide whether to force-send via SendGrid (useful for hosts that block SMTP)
function shouldForceSendGrid(): boolean {
  return process.env.MAIL_FORCE_SENDGRID === 'true' && !!process.env.SENDGRID_API_KEY;
}

// Prefer SendGrid by default when API key exists (production preference)
function preferSendGrid(): boolean {
  return !!process.env.SENDGRID_API_KEY && process.env.MAIL_PREFER_SENDGRID !== 'false';
}

// Verify that a mail transport is available (SendGrid or SMTP)
export async function verifyMailTransport(): Promise<{ ok: boolean; provider: string; detail?: string }> {
  // Only SendGrid is supported in this deployment-safe path
  try {
    const res = await fetch('https://api.sendgrid.com/v3/user/account', {
      method: 'GET',
      headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
    });
    if (res.ok) return { ok: true, provider: 'sendgrid' };
    const text = await res.text().catch(() => 'no body');
    return { ok: false, provider: 'sendgrid', detail: `${res.status} ${res.statusText} - ${text}` };
  } catch (err: any) {
    return { ok: false, provider: 'sendgrid', detail: err && err.message ? err.message : String(err) };
  }
}

export async function sendWelcomeEmail(email: string, subject: string, user:object, temp_password:string) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/welcome.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');
//   const template = await ejs.renderFile(templatePath, { fullname, email: email });

  const mailOptions = {
    from: `${SENDGRID_FROM_NAME} <${SENDGRID_FROM_EMAIL}>`,
    to: email,
    subject: subject,
    html: ejs.render(template, { user, email, temp_password }),
  };

    // Try SendGrid first (when configured and preferred), otherwise fallback to SMTP
    const fromObj = { email: 'no-reply@gmail.com', name: 'INTERNATIONAL CIVIL SERVICE CONFERENCE (ICSC)' };
    const html = mailOptions.html as string;

    if (preferSendGrid() || shouldForceSendGrid()) {
      try {
        await sendViaSendGrid(fromObj, email, subject, html);
        if (MAIL_DEBUG) console.log('Email sent successfully via SendGrid to', email);
        return;
      } catch (err) {
        console.error('SendGrid send failed, falling back to SMTP:', err);
        // Fall through to SMTP
      }
    }

    // Fallback to SMTP
    try {
      await sendViaSMTP(fromObj, email, subject, html);
      if (MAIL_DEBUG) console.log('Email sent successfully via SMTP to', email);
      return;
    } catch (err) {
      console.error('Both SendGrid and SMTP sending failed:', err);
      throw err;
    }
}

export async function sendVerificationEmail(email:string, subject:string, verification_code:string, user:object) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/verification.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: `${SENDGRID_FROM_NAME} <${SENDGRID_FROM_EMAIL}>`,
    to: email,
    subject: subject,
    html: ejs.render(template, { verification_code:verification_code, user:user, email:email }),
  };

  const fromObj = { email: 'no-reply@gmail.com', name: 'INTERNATIONAL CIVIL SERVICE CONFERENCE (ICSC)' };
  const html = mailOptions.html as string;

  if (preferSendGrid() || shouldForceSendGrid()) {
    try {
      await sendViaSendGrid(fromObj, email, subject, html);
      if (MAIL_DEBUG) console.log('Verification email sent via SendGrid to', email);
      return;
    } catch (err) {
      console.error('SendGrid send failed, falling back to SMTP:', err);
    }
  }

  // Fallback to SMTP
  try {
    await sendViaSMTP(fromObj, email, subject, html);
    if (MAIL_DEBUG) console.log('Verification email sent via SMTP to', email);
    return;
  } catch (err) {
    console.error('Both SendGrid and SMTP sending failed:', err);
    throw err;
  }
}