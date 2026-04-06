-- ============================================================
--  Karnavati University – Event Registration Database Setup
--  Run this once in MySQL Workbench or via terminal:
--  mysql -u root -p < setup.sql
-- ============================================================

-- 1. Create the database
CREATE DATABASE IF NOT EXISTS ku_events
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE ku_events;

-- 2. Create the registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id             INT          AUTO_INCREMENT PRIMARY KEY,
  first_name     VARCHAR(100) NOT NULL,
  last_name      VARCHAR(100) NOT NULL,
  email          VARCHAR(150) NOT NULL,
  phone          VARCHAR(20)  DEFAULT NULL,
  course         VARCHAR(150) DEFAULT NULL,
  year_of_study  VARCHAR(50)  DEFAULT NULL,
  event_name     VARCHAR(200) NOT NULL,
  message        TEXT         DEFAULT NULL,
  registered_at  TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Add a unique index on email + event (prevents duplicate registrations)
ALTER TABLE registrations
  ADD UNIQUE INDEX uq_email_event (email, event_name);

-- 4. Verify
SHOW TABLES;
DESCRIBE registrations;

-- ============================================================
--  Useful queries for admin use
-- ============================================================

-- View all registrations
-- SELECT * FROM registrations ORDER BY registered_at DESC;

-- Count registrations per event
-- SELECT event_name, COUNT(*) AS total
-- FROM registrations
-- GROUP BY event_name
-- ORDER BY total DESC;

-- Find a specific person
-- SELECT * FROM registrations WHERE email = 'student@karnavati.edu.in';

-- Delete a registration
-- DELETE FROM registrations WHERE id = 5;
