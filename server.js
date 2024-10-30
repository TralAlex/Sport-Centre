const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');

// Middleware configuration
app.use(cors());
app.use(express.json()); // To handle JSON payloads

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'diplomski',
    database: 'test'
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to the database:', err);
    } else {
        console.log('Successfully connected to the database.');
    }
});

// API to get users (GET)
app.get('/api/korisnici', (req, res) => {
    const sql = 'SELECT * FROM korisnik'; // Correct table name
    db.query(sql, (err, result) => {
        if (err) {
            console.log('Error fetching users:', err);
            return res.status(500).send('Error fetching users.');
        }
        res.json(result);
    });
});

// API for user registration (POST)
app.post('/api/registracija', (req, res) => {
    const { ime, prezime, email, datumrodjenja } = req.body;

    // Check for empty fields
    if (!ime || !prezime || !email || !datumrodjenja) {
        return res.status(400).send('All fields must be filled.');
    }

    // SQL query for data insertion
    const sql = 'INSERT INTO korisnik (ime, prezime, email, datumrodjenja) VALUES (?, ?, ?, ?)';
    db.query(sql, [ime, prezime, email, datumrodjenja], (err, result) => {
        if (err) {
            console.log('Error inserting user:', err);
            return res.status(500).send('Error during registration.');
        }
        res.status(201).json({ idkorisnik: result.insertId, ime });
    });
});

// API for purchasing a package (POST)
app.post('/api/kupljenipaket', (req, res) => {
    const { duration, name, price  } = req.body;
    console.log(req.body);

    // Ensure values are extracted properly
    if (!name || !price || !duration) {
        return res.status(400).send('Invalid cart summary format.');
    }

    // Query to check the package in the database
    const checkPaketSql = 'SELECT idpaket FROM paket WHERE name = ?';

    db.query(checkPaketSql, [name], (err, result) => {
        if (err) {
            console.log('Error checking package:', err);
            return res.status(500).send('Error checking package.');
        }

        if (result.length === 0) {
            return res.status(404).send('Package not found.');
        }

        const idpaket = result[0].idpaket;

        // SQL query to insert into kupljenipaket
        const insertSql = 'INSERT INTO kupljenipaket (idpaket, name, price, duration) VALUES (?, ?, ?, ?)';
        db.query(insertSql, [idpaket, name, price, duration], (err, result) => {
            if (err) {
                console.log('Error inserting purchased package:', err);
                return res.status(500).send('Error purchasing package.');
            }

            res.status(201).json({ idkupljenipaket: result.insertId });
        });
    });
});




// API for submitting a contact message (POST)
app.post('/api/poruka', (req, res) => {
    const { ime, email, poruka } = req.body;

    // Check for empty fields
    if (!ime || !email || !poruka) {
        return res.status(400).send('All fields must be filled.');
    }

    // SQL query for data insertion
    const sql = 'INSERT INTO poruka (ime, email, poruka) VALUES (?, ?, ?)';
    db.query(sql, [ime, email, poruka], (err, result) => {
        if (err) {
            console.log('Error inserting message:', err);
            return res.status(500).send('Error submitting message.');
        }
        res.status(201).json({ idporuka: result.insertId });
    });
});

// Start server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
