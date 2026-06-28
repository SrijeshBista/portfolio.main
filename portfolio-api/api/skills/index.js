const { getPool }                          = require('../../lib/db');
const { handleCors, requireAuth, err }     = require('../../lib/helpers');

module.exports = async (req, res) => {
  if (handleCors(req, res)) return;
  const db = getPool();

  // ── GET — public ─────────────────────────────────────────────
  if (req.method === 'GET') {
    try {
      const [rows] = await db.query(
        `SELECT s.id, s.name, s.proficiency, s.sort_order,
                c.id AS category_id, c.name AS category
         FROM skills s
         JOIN skill_categories c ON c.id = s.category_id
         ORDER BY c.sort_order, s.sort_order, s.name`
      );
      const grouped = {};
      rows.forEach(r => {
        if (!grouped[r.category]) grouped[r.category] = { id: r.category_id, name: r.category, skills: [] };
        grouped[r.category].skills.push({ id: r.id, name: r.name, proficiency: r.proficiency });
      });
      return res.json(Object.values(grouped));
    } catch (e) {
      console.error(e);
      return err(res, 500, 'Server error');
    }
  }

  // ── POST — admin ─────────────────────────────────────────────
  if (req.method === 'POST') {
    if (!requireAuth(req, res)) return;
    const { name, category_id, proficiency, sort_order } = req.body || {};
    if (!name) return err(res, 400, 'Skill name required');
    if (!category_id) return err(res, 400, 'category_id required');
    if (proficiency === undefined || proficiency < 0 || proficiency > 100)
      return err(res, 400, 'proficiency must be 0–100');
    try {
      const [r] = await db.query(
        'INSERT INTO skills (name, category_id, proficiency, sort_order) VALUES (?,?,?,?)',
        [name, category_id, proficiency, sort_order || 0]
      );
      return res.status(201).json({ id: r.insertId, message: 'Skill created' });
    } catch (e) {
      return err(res, 500, 'Server error');
    }
  }

  err(res, 405, 'Method not allowed');
};
