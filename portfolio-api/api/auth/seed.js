const bcrypt = require('bcryptjs');
const { getPool }         = require('../../lib/db');
const { handleCors, err } = require('../../lib/helpers');

module.exports = async (req, res) => {
  if (handleCors(req, res)) return;
  if (req.method !== 'POST') return err(res, 405, 'Method not allowed');

  // Block in production after first use
  if (process.env.SEED_DISABLED === 'true') {
    return err(res, 403, 'Seed disabled. Remove SEED_DISABLED or set to false to re-enable.');
  }

  const email    = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const name     = 'Srijesh Bista';

  if (!email || !password) {
    return err(res, 400, 'Set ADMIN_EMAIL and ADMIN_PASSWORD in Vercel environment variables');
  }

  try {
    const db = getPool();
    const [existing] = await db.query('SELECT id FROM admins WHERE email = ?', [email]);
    if (existing.length) return err(res, 409, 'Admin already exists');

    const hash = await bcrypt.hash(password, 12);
    await db.query('INSERT INTO admins (email, password, name) VALUES (?,?,?)', [email, hash, name]);

    res.status(201).json({
      message: 'Admin created successfully! Now set SEED_DISABLED=true in your Vercel env vars.'
    });
  } catch (e) {
    console.error(e);
    err(res, 500, 'Server error');
  }
};
