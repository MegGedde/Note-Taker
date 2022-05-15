const express = require('express');
const apiRoutes = require('./Develop/routes/apiRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const { notes } = require('./Develop/db/db');
const app = express();
  // parse incoming string or array data
  app.use(express.urlencoded({ extended: true }));
  // parse incoming JSON data
  app.use(express.json());
  app.use(express.static('public'));
  app.use('/api', apiRoutes);
  app.use('/', htmlRoutes);

// function findByTitle(title, notesArray) {
//   const results = notesArray.filter(notes => notes.title === title)[0];
//   return results;
// }

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });