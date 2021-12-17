# Getting Started
The application should have a <span style="color:green">db.json</span> file on the back end that will be used to store and retrieve notes using the fs module.

The following HTML routes should be created:
- <span style="color:green">GET /notes</span> should return the <span style="color:green">notes.html</span> file.
- <span style="color:green">GET *</span> should return the <span style="color:green">index.html</span> file.

The following API routes should be created:
- <span style="color:green">GET /api/notes</span> should read the db.json file and return all saved notes as JSON.
- <span style="color:green">POST /api/notes</span> should receive a new note to save on the request body, add it to the <span style="color:green">db.json</span> file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

## Bonus
You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

<span style="color:green">DELETE /api/notes/:id</span> should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the <span style="color:green">db.json</span> file, remove the note with the given <span style="color:green">id property</span>, and then rewrite the notes to the <span style="color:green">db.json</span> file.


---


AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

GIVEN a note-taking application

WHEN I open the Note Taker
- THEN I am presented with a landing page with a link to a notes page

WHEN I click on the link to the notes page
- THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

WHEN I enter a new note title and the note’s text
- THEN a Save icon appears in the navigation at the top of the page

WHEN I click on the Save icon
- THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

WHEN I click on an existing note in the list in the left-hand column
- THEN that note appears in the right-hand column

WHEN I click on the Write icon in the navigation at the top of the page
- THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column