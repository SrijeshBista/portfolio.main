const { getPool }                          = require('../../lib/db');
const { handleCors, requireAuth, err }     = require('../../lib/helpers');

module.exports = async (req, res) => {
  if (handleCors(req, res)) return;
  if (!requireAuth(req, res)) return;
  const db = getPool();
  const id = req.query.id;
  if (!id || isNaN(id)) return err(res, 400, 'Invalid id');

  if (req.method === 'PUT') {
    const { name, category_id, proficiency, sort_order } = req.body || {};
    try {
      await db.query(
        `UPDATE skills SET
           name        = COALESCE(?, name),
           category_id = COALESCE(?, category_id),
           proficiency = COALESCE(?, proficiency),
           sort_order  = COALESCE(?, sort_order)
         WHERE id = ?`,
        [name||null, category_id||null, proficiency !== undefined ? proficiency : null,
         sort_order !== undefined ? sort_order : null, id]
      );
      return res.json({ message: 'Skill updated' });
    } catch (e) {
      return err(res, 500, 'Server error');
    }
  }

  if (req.method === 'DELETE') {
    try {
      const [r] = await db.query('DELETE FROM skills WHERE id = ?', [id]);
      if (!r.affectedRows) return err(res, 404, 'Not found');
      return res.json({ message: 'Deleted' });
    } catch (e) {
      return err(res, 500, 'Server error');
    }
  }

  err(res, 405, 'Method not allowed');
};
