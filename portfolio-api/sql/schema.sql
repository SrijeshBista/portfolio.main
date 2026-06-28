-- ================================================================
--  portfolio_db  —  MySQL schema for srijeshbista.com.np backend
-- ================================================================

CREATE DATABASE IF NOT EXISTS portfolio_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE portfolio_db;

-- ── Admin users ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS admins (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email      VARCHAR(255) NOT NULL UNIQUE,
  password   VARCHAR(255) NOT NULL,          -- bcrypt hash
  name       VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ── Site / about content ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS about (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  headline    VARCHAR(255)  NOT NULL DEFAULT 'LET''S BUILD.',
  tagline     TEXT,
  bio         TEXT,
  full_name   VARCHAR(100)  NOT NULL DEFAULT 'Srijesh Bista',
  role        VARCHAR(100),
  location    VARCHAR(100),
  email       VARCHAR(255),
  github_url  VARCHAR(500),
  linkedin_url VARCHAR(500),
  whatsapp    VARCHAR(30),
  portfolio_url VARCHAR(500),
  updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ── Skill categories ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS skill_categories (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR(80)  NOT NULL,
  sort_order TINYINT UNSIGNED DEFAULT 0,
  UNIQUE KEY uq_cat_name (name)
);

-- ── Skills ───────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS skills (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  category_id INT UNSIGNED NOT NULL,
  name        VARCHAR(100) NOT NULL,
  proficiency TINYINT UNSIGNED NOT NULL DEFAULT 80  -- 0–100
                CHECK (proficiency BETWEEN 0 AND 100),
  sort_order  TINYINT UNSIGNED DEFAULT 0,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES skill_categories(id) ON DELETE CASCADE
);

-- ── Projects ─────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS projects (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(200) NOT NULL,
  description TEXT,
  live_url    VARCHAR(500),
  github_url  VARCHAR(500),
  image_url   VARCHAR(500),
  status      ENUM('live','in_progress','archived') NOT NULL DEFAULT 'in_progress',
  featured    TINYINT(1) NOT NULL DEFAULT 0,
  sort_order  TINYINT UNSIGNED DEFAULT 0,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ── Project tech tags ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS project_tags (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  project_id INT UNSIGNED NOT NULL,
  tag        VARCHAR(80)  NOT NULL,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

-- ── Contact messages ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS messages (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR(150) NOT NULL,
  email      VARCHAR(255) NOT NULL,
  subject    VARCHAR(300),
  body       TEXT         NOT NULL,
  ip_address VARCHAR(45),
  read_at    TIMESTAMP    NULL DEFAULT NULL,
  replied_at TIMESTAMP    NULL DEFAULT NULL,
  created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);

-- ── Site settings (key/value store) ──────────────────────────────
CREATE TABLE IF NOT EXISTS settings (
  `key`       VARCHAR(100) NOT NULL PRIMARY KEY,
  `value`     TEXT,
  updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ================================================================
--  Seed data
-- ================================================================

INSERT IGNORE INTO about (id, headline, tagline, bio, full_name, role, location, email, github_url, linkedin_url, whatsapp, portfolio_url)
VALUES (1,
  'LET''S BUILD.',
  'If you have any projects to discuss feel free to get in touch!',
  'Passionate developer based in Nepal, building web applications and always looking for exciting projects to collaborate on.',
  'Srijesh Bista',
  'Full Stack Developer',
  'Nepal',
  'srijeshbista367@gmail.com',
  'https://github.com/SrijeshBista',
  'https://www.linkedin.com/in/srijesh-bista-670662309/',
  '9779765982888',
  'https://srijeshbista.com.np'
);

INSERT IGNORE INTO skill_categories (id, name, sort_order) VALUES
  (1, 'Frontend',  1),
  (2, 'Backend',   2),
  (3, 'Database',  3),
  (4, 'DevOps',    4),
  (5, 'Design',    5);

INSERT IGNORE INTO skills (category_id, name, proficiency, sort_order) VALUES
  (1, 'HTML/CSS',   95, 1),
  (1, 'JavaScript', 88, 2),
  (1, 'React',      80, 3),
  (2, 'Node.js',    75, 1),
  (2, 'Python',     65, 2),
  (3, 'MongoDB',    70, 1),
  (4, 'Git',        85, 1),
  (5, 'Figma',      60, 1);

INSERT IGNORE INTO settings (`key`, `value`) VALUES
  ('site_title',       'Srijesh Bista — Portfolio'),
  ('meta_description', 'Full stack developer portfolio — Srijesh Bista. Available for freelance and collaboration.'),
  ('copyright_year',   '2025'),
  ('email_notify',     '1'),
  ('whatsapp_notify',  '1');
