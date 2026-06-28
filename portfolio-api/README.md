# Portfolio API — Vercel Serverless

Backend for **srijeshbista.com.np** — runs as Vercel serverless functions (free forever).

---

## File structure

```
portfolio-api/
├── vercel.json           ← routing config
├── package.json
├── .env.example          ← copy to .env.local for local dev
├── lib/
│   ├── db.js             ← MySQL connection pool
│   └── helpers.js        ← CORS, JWT, error helpers
├── api/
│   ├── health.js
│   ├── auth/
│   │   ├── login.js      ← POST /api/auth/login
│   │   └── seed.js       ← POST /api/auth/seed  (run once)
│   ├── projects/
│   │   ├── index.js      ← GET/POST /api/projects
│   │   └── [id].js       ← GET/PUT/DELETE /api/projects/:id
│   ├── skills/
│   │   ├── index.js      ← GET/POST /api/skills
│   │   └── [id].js       ← PUT/DELETE /api/skills/:id
│   ├── messages/
│   │   ├── index.js      ← POST (contact form) / GET (inbox)
│   │   └── [id].js       ← GET/PATCH/DELETE + PATCH read-all
│   └── about/
│       └── index.js      ← GET/PUT /api/about
└── sql/
    └── schema.sql        ← Run this once on your MySQL host
```

---

## Step 1 — Get a free MySQL database (PlanetScale)

1. Go to **planetscale.com** → sign up free
2. Create a database → name it `portfolio_db`
3. Click **Connect** → choose **Node.js** → copy the connection details:
   - Host, Username, Password

> **Alternative:** Use **Clever Cloud** (clever-cloud.com) → Add-ons → MySQL — also free forever.

---

## Step 2 — Run the schema

In PlanetScale dashboard → **Console** tab, paste the contents of `sql/schema.sql` and run it.

Or use a GUI like **TablePlus** / **DBeaver** with your PlanetScale credentials.

---

## Step 3 — Push to GitHub

```bash
cd portfolio-api
git init
git add .
git commit -m "portfolio api"
```

Go to github.com → New repository → `portfolio-api` → create it, then:

```bash
git remote add origin https://github.com/SrijeshBista/portfolio-api.git
git push -u origin main
```

---

## Step 4 — Deploy on Vercel

1. Go to **vercel.com** → Add New Project → Import `portfolio-api` from GitHub
2. Leave all build settings as default
3. Click **Deploy**

---

## Step 5 — Add environment variables on Vercel

Go to your project → **Settings** → **Environment Variables** → add these:

| Key | Value |
|-----|-------|
| `DB_HOST` | your PlanetScale host |
| `DB_USER` | your PlanetScale username |
| `DB_PASSWORD` | your PlanetScale password |
| `DB_NAME` | `portfolio_db` |
| `DB_PORT` | `3306` |
| `DB_SSL` | `true` (required for PlanetScale) |
| `JWT_SECRET` | any long random string (32+ chars) |
| `ADMIN_EMAIL` | `srijeshbista367@gmail.com` |
| `ADMIN_PASSWORD` | a strong password |
| `ALLOWED_ORIGIN` | `https://srijeshbista.com.np` |

Then **Redeploy** once so the env vars take effect.

---

## Step 6 — Create your admin account (run once)

After deploying, your API lives at something like:
`https://portfolio-api-srijesh.vercel.app`

Run this once in your browser or terminal:

```bash
curl -X POST https://your-project.vercel.app/api/auth/seed
```

Then go back to Vercel → Environment Variables → add:

| Key | Value |
|-----|-------|
| `SEED_DISABLED` | `true` |

Redeploy. The seed endpoint is now locked.

---

## Step 7 — Test your API

```bash
# Health check
curl https://your-project.vercel.app/api/health

# Login
curl -X POST https://your-project.vercel.app/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"srijeshbista367@gmail.com","password":"yourpassword"}'

# Get projects (public)
curl https://your-project.vercel.app/api/projects
```

---

## Step 8 — Connect the admin panel

In your `admin.html`, find the `<script>` section and set:

```js
const API_URL = 'https://your-project.vercel.app/api';
```

The admin panel will use this URL for all API calls.

---

## API quick reference

### Public endpoints (no auth needed)
| Method | URL | Description |
|--------|-----|-------------|
| GET | /api/projects | All projects |
| GET | /api/projects/:id | Single project |
| GET | /api/skills | All skills grouped |
| GET | /api/about | About / bio content |
| POST | /api/messages | Submit contact form |
| GET | /api/health | Health check |

### Admin endpoints (send `Authorization: Bearer <token>`)
| Method | URL | Description |
|--------|-----|-------------|
| POST | /api/auth/login | Login |
| POST | /api/projects | Add project |
| PUT | /api/projects/:id | Update project |
| DELETE | /api/projects/:id | Delete project |
| POST | /api/skills | Add skill |
| PUT | /api/skills/:id | Update skill |
| DELETE | /api/skills/:id | Delete skill |
| GET | /api/messages | View inbox |
| PATCH | /api/messages/:id | Mark read |
| PATCH | /api/messages/read-all | Mark all read |
| DELETE | /api/messages/:id | Delete message |
| PUT | /api/about | Update bio/links |
