const { getPool }                          = require('../../lib/db');
const { handleCors, requireAuth, err }     = require('../../lib/helpers');

module.exports = async (req, res) => {
  if (handleCors(req, res)) return;
  const db = getPool();
  const id = req.query.id;
  if (!id || isNaN(id)) return err(res, 400, 'Invalid id');

  // ── GET — public ─────────────────────────────────────────────
  if (req.method === 'GET') {
    try {
      const [rows] = await db.query(
        `SELECT p.*, GROUP_CONCAT(pt.tag ORDER BY pt.id SEPARATOR ',') AS tags
         FROM projects p LEFT JOIN project_tags pt ON pt.project_id = p.id
         WHERE p.id = ? GROUP BY p.id`, [id]
      );
      if (!rows.length) return err(res, 404, 'Not found');
      const p = rows[0];
      p.tags = p.tags ? p.tags.split(',') : [];
      return res.json(p);
    } catch (e) {
      return err(res, 500, 'Server error');
    }
  }

  // ── PUT — admin ──────────────────────────────────────────────
  if (req.method === 'PUT') {
    if (!requireAuth(req, res)) return;
    const { name, description, live_url, github_url, image_url, status, featured, sort_order, tags } = req.body || {};
    const conn = await db.getConnection();
    try {
      await conn.beginTransaction();
      await conn.query(
        `UPDATE projects SET
           name        = COALESCE(?, name),
           description = COALESCE(?, description),
           live_url    = COALESCE(?, live_url),
           github_url  = COALESCE(?, github_url),
           image_url   = COALESCE(?, image_url),
           status      = COALESCE(?, status),
           featured    = COALESCE(?, featured),
           sort_order  = COALESCE(?, sort_order)
         WHERE id = ?`,
        [name||null, description||null, live_url||null, github_url||null,
         image_url||null, status||null,
         featured !== undefined ? (featured ? 1 : 0) : null,
         sort_order !== undefined ? sort_order : null, id]
      );
      if (Array.isArray(tags)) {
        await conn.query('DELETE FROM project_tags WHERE project_id = ?', [id]);
        if (tags.length) {
          await conn.query('INSERT INTO project_tags (project_id, tag) VALUES ?', [tags.map(t => [id, t.trim()])]);
        }
      }
      await conn.commit();
      return res.json({ message: 'Project updated' });
    } catch (e) {
      await conn.rollback();
      return err(res, 500, 'Server error');
    } finally {
      conn.release();
    }
  }

  // ── DELETE — admin ───────────────────────────────────────────
  if (req.method === 'DELETE') {
    if (!requireAuth(req, res)) return;
    try {
      const [r] = await db.query('DELETE FROM projects WHERE id = ?', [id]);
      if (!r.affectedRows) return err(res, 404, 'Not found');
      return res.json({ message: 'Deleted' });
    } catch (e) {
      return err(res, 500, 'Server error');
    }
  }

  err(res, 405, 'Method not allowed');
};
