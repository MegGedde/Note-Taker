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
  app.use(express.static('./Develop/public'));
  app.use('/api', apiRoutes);
  app.use('/', htmlRoutes);

  const fs = require('fs');
  const path = require('path');  


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });