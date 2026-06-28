const { getPool }                          = require('../../lib/db');
const { handleCors, requireAuth, err }     = require('../../lib/helpers');

const FIELDS = ['headline','tagline','bio','full_name','role','location','email',
                'github_url','linkedin_url','whatsapp','portfolio_url'];

module.exports = async (req, res) => {
  if (handleCors(req, res)) return;
  const db = getPool();

  // ── GET — public ─────────────────────────────────────────────
  if (req.method === 'GET') {
    try {
      const [rows] = await db.query('SELECT * FROM about WHERE id = 1');
      if (!rows.length) return err(res, 404, 'About not found');
      return res.json(rows[0]);
    } catch (e) {
      return err(res, 500, 'Server error');
    }
  }

  // ── PUT — admin ──────────────────────────────────────────────
  if (req.method === 'PUT') {
    if (!requireAuth(req, res)) return;
    const body    = req.body || {};
    const updates = [];
    const values  = [];
    FIELDS.forEach(f => {
      if (body[f] !== undefined) { updates.push(`${f} = ?`); values.push(body[f]); }
    });
    if (!updates.length) return err(res, 400, 'No fields to update');
    try {
      await db.query(`UPDATE about SET ${updates.join(', ')} WHERE id = 1`, values);
      const [rows] = await db.query('SELECT * FROM about WHERE id = 1');
      return res.json(rows[0]);
    } catch (e) {
      return err(res, 500, 'Server error');
    }
  }

  err(res, 405, 'Method not allowed');
};
