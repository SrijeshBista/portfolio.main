const { getPool }                          = require('../../lib/db');
const { handleCors, requireAuth, err }     = require('../../lib/helpers');

module.exports = async (req, res) => {
  if (handleCors(req, res)) return;
  const db = getPool();

  // ── GET — public ─────────────────────────────────────────────
  if (req.method === 'GET') {
    try {
      const [projects] = await db.query(
        `SELECT p.*, GROUP_CONCAT(pt.tag ORDER BY pt.id SEPARATOR ',') AS tags
         FROM projects p
         LEFT JOIN project_tags pt ON pt.project_id = p.id
         GROUP BY p.id
         ORDER BY p.featured DESC, p.sort_order ASC, p.created_at DESC`
      );
      const result = projects.map(p => ({ ...p, tags: p.tags ? p.tags.split(',') : [] }));
      return res.json(result);
    } catch (e) {
      console.error(e);
      return err(res, 500, 'Server error');
    }
  }

  // ── POST — admin only ────────────────────────────────────────
  if (req.method === 'POST') {
    if (!requireAuth(req, res)) return;
    const { name, description, live_url, github_url, image_url, status, featured, sort_order, tags } = req.body || {};
    if (!name) return err(res, 400, 'Project name is required');

    const conn = await db.getConnection();
    try {
      await conn.beginTransaction();
      const [result] = await conn.query(
        `INSERT INTO projects (name, description, live_url, github_url, image_url, status, featured, sort_order)
         VALUES (?,?,?,?,?,?,?,?)`,
        [name, description || null, live_url || null, github_url || null,
         image_url || null, status || 'in_progress', featured ? 1 : 0, sort_order || 0]
      );
      if (Array.isArray(tags) && tags.length) {
        const vals = tags.map(t => [result.insertId, t.trim()]);
        await conn.query('INSERT INTO project_tags (project_id, tag) VALUES ?', [vals]);
      }
      await conn.commit();
      return res.status(201).json({ id: result.insertId, message: 'Project created' });
    } catch (e) {
      await conn.rollback();
      console.error(e);
      return err(res, 500, 'Server error');
    } finally {
      conn.release();
    }
  }

  err(res, 405, 'Method not allowed');
};
