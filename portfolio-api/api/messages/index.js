const nodemailer                           = require('nodemailer');
const { getPool }                          = require('../../lib/db');
const { handleCors, requireAuth, err }     = require('../../lib/helpers');

// Simple in-memory rate limit (resets per cold start — good enough for serverless)
const ipLog = {};
function isRateLimited(ip) {
  const now   = Date.now();
  const window = 60 * 60 * 1000; // 1 hour
  if (!ipLog[ip]) ipLog[ip] = [];
  ipLog[ip] = ipLog[ip].filter(t => now - t < window);
  if (ipLog[ip].length >= 5) return true;
  ipLog[ip].push(now);
  return false;
}

async function sendNotification({ name, email, subject, body }) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) return;
  try {
    const t = nodemailer.createTransport({
      host: 'smtp.gmail.com', port: 587, secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await t.sendMail({
      from:    `"Portfolio" <${process.env.SMTP_USER}>`,
      to:      process.env.NOTIFY_EMAIL,
      subject: `[Portfolio] ${name}: ${subject || 'New message'}`,
      html:    `<h2>New message from ${name} &lt;${email}&gt;</h2><p>${body.replace(/\n/g,'<br>')}</p>`,
    });
  } catch (e) {
    console.warn('Email failed:', e.message);
  }
}

module.exports = async (req, res) => {
  if (handleCors(req, res)) return;
  const db = getPool();

  // ── POST — public contact form ───────────────────────────────
  if (req.method === 'POST') {
    const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
    if (isRateLimited(ip)) return err(res, 429, 'Too many messages. Try again later.');

    const { name, email, subject, body: msgBody } = req.body || {};
    if (!name || !email || !msgBody) return err(res, 400, 'Name, email and message are required');
    if (msgBody.length < 10) return err(res, 400, 'Message too short');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return err(res, 400, 'Invalid email');

    try {
      const [r] = await db.query(
        'INSERT INTO messages (name, email, subject, body, ip_address) VALUES (?,?,?,?,?)',
        [name, email, subject || null, msgBody, ip]
      );
      sendNotification({ name, email, subject, body: msgBody }); // fire and forget
      return res.status(201).json({ id: r.insertId, message: 'Message sent. Thank you!' });
    } catch (e) {
      console.error(e);
      return err(res, 500, 'Server error');
    }
  }

  // ── GET — admin inbox ────────────────────────────────────────
  if (req.method === 'GET') {
    if (!requireAuth(req, res)) return;
    try {
      const page       = Math.max(1, parseInt(req.query.page)  || 1);
      const limit      = Math.min(50, parseInt(req.query.limit) || 20);
      const offset     = (page - 1) * limit;
      const unreadOnly = req.query.unread === 'true';
      const where      = unreadOnly ? 'WHERE read_at IS NULL' : '';

      const [rows]   = await db.query(`SELECT * FROM messages ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`, [limit, offset]);
      const [[{ total }]]  = await db.query(`SELECT COUNT(*) AS total FROM messages ${where}`);
      const [[{ unread }]] = await db.query("SELECT COUNT(*) AS unread FROM messages WHERE read_at IS NULL");

      return res.json({ data: rows, total, unread, page, limit });
    } catch (e) {
      console.error(e);
      return err(res, 500, 'Server error');
    }
  }

  err(res, 405, 'Method not allowed');
};
