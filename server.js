const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

const { notes }  = require('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// API notes route
app.get('/api/notes', (req, res) => {
    // res.send('Hello!');
    let results = notes;
    console.log(req.query);

    res.json(results);
});

app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
      res.json(result);
  });

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
  }

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});