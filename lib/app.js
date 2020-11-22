const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: true,
    credentials: true
  }));  
  

app.use(express.json());

app.use('/api/v1/movies', require('./routes/movies'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
