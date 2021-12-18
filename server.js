const express = require('express');
const path = require('path');
const fs = require('fs')
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

function createNewNote(body, notesArray) {
    const note = body
    notesArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )
    return note
}

app.post('/api/notes', (req, res) => {
    console.log(req.body)
    // Increment ID based on array length
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);
})

// rework and try to refresh page
app.delete('/api/notes/:id', (req, res) => {
    const updateArray = notes.filter(({ id }) => id !== req.params.id)
    console.log(updateArray)
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: updateArray}, null, 2)
    )
    res.json({ok: true})
})

// Route for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

// route for notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});