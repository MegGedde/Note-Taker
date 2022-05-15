const { notes } = require('../../db/db.json');
const { validateNote, createNewNote } = require('../../lib/notes')
const router = require("express").Router();


router.get('/notes', (req, res) => {
    res.json(notes);
  });

router.get('/notes/:title', (req, res) => {
  const results = findByTitle(req.params.title, notes);
    res.json(results);
  }); 

router.post('/notes', (req, res) => {
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
      } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
      }
});  

module.exports = router;
