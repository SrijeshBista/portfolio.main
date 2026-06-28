const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const { getPool }                    = require('../../lib/db');
const { handleCors, err }            = require('../../lib/helpers');

module.exports = async (req, res) => {
  if (handleCors(req, res)) return;
  if (req.method !== 'POST') return err(res, 405, 'Method not allowed');

  const { email, password } = req.body || {};
  if (!email || !password) return err(res, 400, 'Email and password required');

  try {
    const db = getPool();
    const [rows] = await db.query('SELECT * FROM admins WHERE email = ?', [email.toLowerCase()]);
    if (!rows.length) return err(res, 401, 'Invalid credentials');

    const admin = rows[0];
    const match = await bcrypt.compare(password, admin.password);
    if (!match) return err(res, 401, 'Invalid credentials');

    const token = jwt.sign(
      { id: admin.id, email: admin.email, name: admin.name },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ token, admin: { id: admin.id, name: admin.name, email: admin.email } });
  } catch (e) {
    console.error(e);
    err(res, 500, 'Server error');
  }
};
