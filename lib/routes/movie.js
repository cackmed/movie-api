const { Router } = require('express');
const Movie = require('../models/Movie');
const { ensureAuth } = require('../middleware/auth-middleware');

module.exports = Router()
  .post('/',  ensureAuth, (req, res, next) => {
    Movie
      .create(req.body)
      .then(dataItem => res.send(dataItem))
      .catch(next);
  })

  .get('/', (req, res, next) => {

  })

  .get('/:id', (req, res, next) => {
      
  });
