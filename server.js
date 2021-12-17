const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

const db  = require('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
    if (query.id) {
      filteredResults = filteredResults.filter(note => note.id === query.id);
    }
    if (query.title) {
      filteredResults = filteredResults.filter(note => note.title === query.title);
    }
    if (query.text) {
      filteredResults = filteredResults.filter(note => note.text === query.text);
    }
    return filteredResults;
  }

// API notes route
app.get('/api/notes', (req, res) => {
    // res.send('Hello!');
    let results = db.notes;
    console.log(req.query);
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});