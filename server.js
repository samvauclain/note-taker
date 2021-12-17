const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

const db  = require('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// API notes route
app.get('/api/notes', (req, res) => {
    // res.send('Hello!');
    let results = db.notes;
    console.log(req.query);

    res.json(results);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});