import express from 'express';
import mysql from 'mysql2';

const app = express();

// MySQL connection configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// GET all items
app.get('/api/items', (req, res) => {
    db.query('SELECT * FROM items', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});

// GET single item by ID
app.get('/api/items/:id', (req, res) => {
    db.query('SELECT * FROM items WHERE id = ?', [req.params.id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results[0]);
    });
});

// POST new item
app.post('/api/items', (req, res) => {
    const { name, description } = req.body;
    db.query('INSERT INTO items (name, description) VALUES (?, ?)', 
        [name, description], 
        (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(201).json({ id: results.insertId });
    });
});

// PUT update item
app.put('/api/items/:id', (req, res) => {
    const { name, description } = req.body;
    db.query('UPDATE items SET name = ?, description = ? WHERE id = ?',
        [name, description, req.params.id],
        (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ message: 'Item updated successfully' });
    });
});

// DELETE item
app.delete('/api/items/:id', (req, res) => {
    db.query('DELETE FROM items WHERE id = ?', [req.params.id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ message: 'Item deleted successfully' });
    });
});

 app.listen(3000,()=>{
    console.log("Listening the server")
 })