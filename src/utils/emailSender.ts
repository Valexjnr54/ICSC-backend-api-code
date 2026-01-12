const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const nodemailer = require('nodemailer');

const MAIL_DEBUG = process.env.MAIL_DEBUG === 'true';

// Use environment vars for "from" defaults
const MAIL_FROM_EMAIL = process.env.MAIL_FROM_EMAIL || 'support@eyzmo.com';
const MAIL_FROM_NAME = process.env.MAIL_FROM_NAME || 'INTERNATIONAL CIVIL SERVICE CONFERENCE (ICSC)';

// --- new: cached transporter + creation helper + retry utilities ---
let cachedTransporter: any | null = null;

function getEnvBool(name: string, def = false) {
  if (process.env[name] === undefined) return def;
  return process.env[name] === 'true';
}

function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

function isTransientError(err: any) {
  if (!err) return false;
  const msg = (err && err.message) ? String(err.message) : '';
  const code = err && err.code ? String(err.code) : '';
  // Common transient conditions
  const transientMessages = ['Unexpected socket close', 'ECONNRESET', 'ETIMEDOUT', 'EPIPE', 'ENOTFOUND', 'ECONNREFUSED', 'socket hang up'];
  if (transientMessages.some(t => msg.includes(t) || code === t)) return true;
  return false;
}

function createTransporter() {
  if (cachedTransporter) return cachedTransporter;

  const SMTP_HOST = process.env.MAIL_HOST;
  const SMTP_PORT = process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT, 10) : undefined;
  if (!SMTP_HOST || !SMTP_PORT) throw new Error('SMTP configuration missing (SMTP_HOST/SMTP_PORT)');

  const SMTP_USER = process.env.MAIL_USER;
  const SMTP_PASS = process.env.MAIL_PASSWORD;

  // Timeouts (ms)
  const connectionTimeout = process.env.MAIL_CONNECTION_TIMEOUT ? parseInt(process.env.MAIL_CONNECTION_TIMEOUT, 10) : 30000;
  const greetingTimeout = process.env.MAIL_GREETING_TIMEOUT ? parseInt(process.env.MAIL_GREETING_TIMEOUT, 10) : 10000;
  const socketTimeout = process.env.MAIL_SOCKET_TIMEOUT ? parseInt(process.env.MAIL_SOCKET_TIMEOUT, 10) : 30000;

  // Decide secure: explicit env wins, otherwise port 465 -> secure
  const SMTP_SECURE = process.env.MAIL_SECURE === 'true' || SMTP_PORT === 465;

  // Allow relaxing TLS verification if desired (useful for some hosts/dev)
  const tlsRejectUnauthorized = process.env.MAIL_TLS_REJECT_UNAUTHORIZED !== 'false';

  const transportOptions: any = {
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: !!SMTP_SECURE,
    logger: MAIL_DEBUG,
    debug: MAIL_DEBUG,
    connectionTimeout,
    greetingTimeout,
    socketTimeout,
    tls: { rejectUnauthorized: tlsRejectUnauthorized },
  };

  if (SMTP_USER && SMTP_PASS) {
    transportOptions.auth = { user: SMTP_USER, pass: SMTP_PASS };
  }

  // optional pooling to reuse connections for many sends
  if (getEnvBool('MAIL_POOL', false)) {
    transportOptions.pool = true;
    transportOptions.maxConnections = process.env.MAIL_POOL_MAX_CONNECTIONS ? parseInt(process.env.MAIL_POOL_MAX_CONNECTIONS, 10) : 5;
  }

  cachedTransporter = nodemailer.createTransport(transportOptions);
  return cachedTransporter;
}
// --- end new ---

// Helper: send via SMTP using nodemailer (now uses cached transporter and retries)
async function sendViaSMTP(from: { email: string; name?: string } | null, to: string, subject: string, html: string) {
  // old transporter creation replaced with cached transporter + retry
  const transporter = createTransporter();

  // Optionally verify transporter first (will throw if unreachable)
  try {
    if (process.env.MAIL_VERIFY_SMTP === 'true') {
      await transporter.verify();
    }

    const fromHeader = from ? `${from.name ? from.name + ' ' : ''}<${from.email}>` : `${MAIL_FROM_NAME} <${MAIL_FROM_EMAIL}>`;

    const maxAttempts = process.env.MAIL_MAX_RETRIES ? parseInt(process.env.MAIL_MAX_RETRIES, 10) : 3;
    let attempt = 0;
    let lastErr: any = null;
    while (++attempt <= maxAttempts) {
      try {
        const info = await transporter.sendMail({
          from: fromHeader,
          to,
          subject,
          html,
        });
        if (MAIL_DEBUG) console.log(`SMTP send info (attempt ${attempt}):`, info);
        return true;
      } catch (err: any) {
        lastErr = err;
        // If transient, wait and retry
        if (isTransientError(err) && attempt < maxAttempts) {
          const backoff = Math.min(30000, 500 * Math.pow(2, attempt)); // exponential backoff
          if (MAIL_DEBUG) console.warn(`Transient SMTP error (attempt ${attempt}) - will retry after ${backoff}ms:`, err && err.message ? err.message : err);
          await sleep(backoff);
          // On certain errors, recreate transporter to reset the socket
          if (isTransientError(err)) {
            try {
              cachedTransporter = null;
            } catch (_) { /* ignore */ }
          }
          continue;
        }
        // Non-transient or max attempts reached: throw
        throw err;
      }
    }
    // If we exit loop with failure
    throw lastErr || new Error('SMTP send failed (unknown)');
  } catch (err: any) {
    throw new Error(`SMTP send failed: ${err && err.message ? err.message : String(err)}`);
  }
}

// Verify that an SMTP transport is available
export async function verifyMailTransport(): Promise<{ ok: boolean; provider: string; detail?: string }> {
  // ...existing code...
  try {
    const transporter = createTransporter();
    await transporter.verify();
    return { ok: true, provider: 'smtp' };
  } catch (err: any) {
    return { ok: false, provider: 'smtp', detail: err && err.message ? err.message : String(err) };
  }
}

export async function sendWelcomeEmail(email: string, subject: string, user:object, temp_password:string) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/welcome.ejs');
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: `${MAIL_FROM_NAME} <${MAIL_FROM_EMAIL}>`,
    to: email,
    subject: subject,
    html: ejs.render(template, { user, email, temp_password }),
  };

  const fromObj = { email: MAIL_FROM_EMAIL, name: MAIL_FROM_NAME };
  const html = mailOptions.html as string;

  try {
    await sendViaSMTP(fromObj, email, subject, html);
    if (MAIL_DEBUG) console.log('Email sent successfully via SMTP to', email);
    return;
  } catch (err) {
    console.error('SMTP sending failed:', err);
    throw err;
  }
}

export async function sendVerificationEmail(email:string, subject:string, verification_code:string, user:object) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/verification.ejs');
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: `${MAIL_FROM_NAME} <${MAIL_FROM_EMAIL}>`,
    to: email,
    subject: subject,
    html: ejs.render(template, { verification_code:verification_code, user:user, email:email }),
  };

  const fromObj = { email: MAIL_FROM_EMAIL, name: MAIL_FROM_NAME };
  const html = mailOptions.html as string;

  try {
    await sendViaSMTP(fromObj, email, subject, html);
    if (MAIL_DEBUG) console.log('Verification email sent via SMTP to', email);
    return;
  } catch (err) {
    console.error('SMTP sending failed:', err);
    throw err;
  }
}