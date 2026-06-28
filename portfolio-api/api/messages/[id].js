const { getPool }                          = require('../../lib/db');
const { handleCors, requireAuth, err }     = require('../../lib/helpers');

module.exports = async (req, res) => {
  if (handleCors(req, res)) return;
  if (!requireAuth(req, res)) return;
  const db = getPool();
  const id = req.query.id;

  // PATCH /api/messages/read-all
  if (id === 'read-all' && req.method === 'PATCH') {
    try {
      const [r] = await db.query('UPDATE messages SET read_at = NOW() WHERE read_at IS NULL');
      return res.json({ message: `${r.affectedRows} messages marked as read` });
    } catch (e) {
      return err(res, 500, 'Server error');
    }
  }

  if (!id || isNaN(id)) return err(res, 400, 'Invalid id');

  // GET — fetch single (auto-marks read)
  if (req.method === 'GET') {
    try {
      await db.query('UPDATE messages SET read_at = NOW() WHERE id = ? AND read_at IS NULL', [id]);
      const [rows] = await db.query('SELECT * FROM messages WHERE id = ?', [id]);
      if (!rows.length) return err(res, 404, 'Not found');
      return res.json(rows[0]);
    } catch (e) {
      return err(res, 500, 'Server error');
    }
  }

  // PATCH — mark read
  if (req.method === 'PATCH') {
    try {
      await db.query('UPDATE messages SET read_at = NOW() WHERE id = ? AND read_at IS NULL', [id]);
      return res.json({ message: 'Marked as read' });
    } catch (e) {
      return err(res, 500, 'Server error');
    }
  }

  // DELETE
  if (req.method === 'DELETE') {
    try {
      const [r] = await db.query('DELETE FROM messages WHERE id = ?', [id]);
      if (!r.affectedRows) return err(res, 404, 'Not found');
      return res.json({ message: 'Deleted' });
    } catch (e) {
      return err(res, 500, 'Server error');
    }
  }

  err(res, 405, 'Method not allowed');
};
