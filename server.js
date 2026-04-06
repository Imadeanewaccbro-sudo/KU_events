// ============================================================
//  Karnavati University – Event Registration Server
//  Stack: Node.js + Express + MySQL2
//  Run:   node server.js
// ============================================================

const express = require('express');
const mysql   = require('mysql2');
const cors    = require('cors');

const app  = express();
const PORT = 3000;

// ── MIDDLEWARE ──────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Log every single request
app.use(function(req, res, next) {
  console.log('-> ' + req.method + ' ' + req.url);
  if (req.method === 'POST') {
    console.log('   Body:', JSON.stringify(req.body));
  }
  next();
});

// ── DATABASE CONNECTION ─────────────────────────────────────
const db = mysql.createConnection({
  host:     'localhost',
  user:     'root',
  password: '',
  database: 'ku_events'
});

db.connect(function(err) {
  if (err) {
    console.error('MySQL connection failed:', err.message);
    process.exit(1);
  }
  console.log('Connected to MySQL database "ku_events"');
});

// ── ROUTES ──────────────────────────────────────────────────

app.post('/register', function(req, res) {
  console.log('Register request received');
  var body      = req.body;
  var firstName = body.firstName;
  var lastName  = body.lastName;
  var email     = body.email;
  var phone     = body.phone     || null;
  var course    = body.course    || null;
  var year      = body.year      || null;
  var event     = body.event;
  var message   = body.message   || null;

  if (!firstName || !lastName) return res.status(400).json({ success: false, error: 'Name required.' });
  if (!email || !email.includes('@')) return res.status(400).json({ success: false, error: 'Valid email required.' });
  if (!event) return res.status(400).json({ success: false, error: 'Event required.' });

  var sql = 'INSERT INTO registrations (first_name, last_name, email, phone, course, year_of_study, event_name, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(sql, [firstName, lastName, email, phone, course, year, event, message], function(err, result) {
    if (err) {
      console.error('DB error:', err.message);
      return res.status(500).json({ success: false, error: err.message });
    }
    console.log('Saved! ID:', result.insertId, '|', firstName, lastName, '->', event);
    res.json({ success: true, id: result.insertId });
  });
});

app.get('/registrations', function(req, res) {
  db.query('SELECT * FROM registrations ORDER BY registered_at DESC', function(err, rows) {
    if (err) return res.status(500).json({ success: false, error: err.message });
    console.log('Returning', rows.length, 'rows');
    res.json({ success: true, count: rows.length, data: rows });
  });
});

app.get('/health', function(req, res) {
  res.json({ status: 'ok', port: PORT });
});

app.listen(PORT, function() {
  console.log('');
  console.log('Karnavati University Event Server running');
  console.log('Website  -> http://localhost:' + PORT + '/karnavati_event.html');
  console.log('Health   -> http://localhost:' + PORT + '/health');
  console.log('Data     -> http://localhost:' + PORT + '/registrations');
  console.log('Waiting for requests...');
});
