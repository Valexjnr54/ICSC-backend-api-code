"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyMailTransport = verifyMailTransport;
exports.sendWelcomeEmail = sendWelcomeEmail;
exports.sendVerificationEmail = sendVerificationEmail;
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const MAIL_DEBUG = process.env.MAIL_DEBUG === 'true';
// Helper: Send via SendGrid HTTP API when configured
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'support@eyzmo.com';
const SENDGRID_FROM_NAME = process.env.SENDGRID_FROM_NAME || 'Afrik Farm';
async function sendViaSendGrid(_from, to, subject, html) {
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    if (!SENDGRID_API_KEY)
        throw new Error('SendGrid API key not configured');
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
// Helper to decide whether to force-send via SendGrid (useful for hosts that block SMTP)
function shouldForceSendGrid() {
    return process.env.MAIL_FORCE_SENDGRID === 'true' && !!process.env.SENDGRID_API_KEY;
}
// Prefer SendGrid by default when API key exists (production preference)
function preferSendGrid() {
    return !!process.env.SENDGRID_API_KEY && process.env.MAIL_PREFER_SENDGRID !== 'false';
}
// Verify that a mail transport is available (SendGrid or SMTP)
async function verifyMailTransport() {
    // Only SendGrid is supported in this deployment-safe path
    try {
        const res = await fetch('https://api.sendgrid.com/v3/user/account', {
            method: 'GET',
            headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
        });
        if (res.ok)
            return { ok: true, provider: 'sendgrid' };
        const text = await res.text().catch(() => 'no body');
        return { ok: false, provider: 'sendgrid', detail: `${res.status} ${res.statusText} - ${text}` };
    }
    catch (err) {
        return { ok: false, provider: 'sendgrid', detail: err && err.message ? err.message : String(err) };
    }
}
async function sendWelcomeEmail(email, subject, user, temp_password) {
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
    // Send only via SendGrid (production-safe)
    try {
        await sendViaSendGrid({ email: 'no-reply@afrikfarm.com', name: 'Afrik Farm' }, email, subject, mailOptions.html);
        if (MAIL_DEBUG)
            console.log('Email sent successfully via SendGrid to', email);
        return;
    }
    catch (err) {
        console.error('SendGrid send failed:', err);
        throw err;
    }
}
async function sendVerificationEmail(email, subject, verification_code, user) {
    // Load the email template
    const templatePath = path.join(__dirname, '../templates/email-templates/verification.ejs');
    // Read the EJS template from the file
    const template = fs.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: `${SENDGRID_FROM_NAME} <${SENDGRID_FROM_EMAIL}>`,
        to: email,
        subject: subject,
        html: ejs.render(template, { verification_code: verification_code, user: user, email: email }),
    };
    try {
        await sendViaSendGrid({ email: 'no-reply@afrikfarm.com', name: 'Afrik Farm' }, email, subject, mailOptions.html);
        if (MAIL_DEBUG)
            console.log('Verification email sent via SendGrid to', email);
        return;
    }
    catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}
