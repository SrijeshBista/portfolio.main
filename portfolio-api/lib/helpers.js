const jwt = require('jsonwebtoken');

// ── CORS headers ─────────────────────────────────────────────────
function setCors(res, req) {
  const allowed = process.env.ALLOWED_ORIGIN || 'https://srijeshbista.com.np';
  const origin  = req.headers.origin || '';
  if (origin === allowed || allowed === '*') {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
}

// ── Handle preflight ─────────────────────────────────────────────
function handleCors(req, res) {
  setCors(res, req);
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return true;
  }
  return false;
}

// ── Verify JWT, return payload or null ───────────────────────────
function verifyToken(req) {
  const header = req.headers['authorization'] || '';
  if (!header.startsWith('Bearer ')) return null;
  try {
    return jwt.verify(header.split(' ')[1], process.env.JWT_SECRET);
  } catch {
    return null;
  }
}

// ── Require auth middleware (inline) ────────────────────────────
function requireAuth(req, res) {
  const admin = verifyToken(req);
  if (!admin) {
    res.status(401).json({ error: 'Unauthorized' });
    return null;
  }
  return admin;
}

// ── Send JSON error ───────────────────────────────────────────────
function err(res, status, message) {
  return res.status(status).json({ error: message });
}

module.exports = { setCors, handleCors, verifyToken, requireAuth, err };
