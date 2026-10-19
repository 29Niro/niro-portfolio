import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const LIMIT = 5; // messages per IP per hour (best effort; resets on cold start)
const WINDOW_MS = 60 * 60 * 1000;
const hits = new Map();

const rateLimited = (ip) => {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= LIMIT) return true;
  recent.push(now);
  hits.set(ip, recent);
  return false;
};

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const clean = (v, max) => String(v ?? '').trim().slice(0, max);

export async function POST(req) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.error('[contact] GMAIL_USER / GMAIL_APP_PASSWORD not set');
    return NextResponse.json({ error: 'Email is not configured.' }, { status: 500 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // honeypot: pretend success so bots move on
  if (body.website) return NextResponse.json({ ok: true });

  const ip = req.headers.get('x-nf-client-connection-ip') || req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many messages. Please try again later.' }, { status: 429 });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 50);
  const subject = clean(body.subject, 150);
  const service = clean(body.service, 100);
  const message = clean(body.message, 5000);

  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter your name, a valid email and a message.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: process.env.CONTACT_TO_EMAIL || user,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject: `[Portfolio] ${subject || 'New message'} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nService: ${service || '-'}\n\n${message}`,
      html: `
        <h2>New portfolio message</h2>
        <p><b>Name:</b> ${esc(name)}<br>
        <b>Email:</b> ${esc(email)}<br>
        <b>Phone:</b> ${esc(phone) || '-'}<br>
        <b>Service:</b> ${esc(service) || '-'}</p>
        <p style="white-space:pre-wrap">${esc(message)}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] send failed:', err.message);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 502 });
  }
}
