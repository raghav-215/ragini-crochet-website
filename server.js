const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Database Connection
const db = new sqlite3.Database('./crochet_store.db', (err) => {
  if (err) console.error('Database connection error:', err);
  else console.log('Connected to SQLite Database.');
});

// GET all products
app.get('/api/products', (req, res) => {
  const sql = 'SELECT * FROM products ORDER BY id DESC';
  db.all(sql, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ products: rows });
  });
});

// POST add a new product (Admin)
app.post('/api/products', (req, res) => {
  const { title, category, price, description, image_url } = req.body;
  const sql = `INSERT INTO products (title, category, price, description, image_url) VALUES (?, ?, ?, ?, ?)`;
  db.run(sql, [title, category, price, description, image_url], function (err) {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ id: this.lastID, message: 'Product added successfully!' });
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));