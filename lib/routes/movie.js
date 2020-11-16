const { Router } = require('express');
const request = require('superagent');
const Movie = require('../models/Movie');

const options = {
  'x-rapidapi-key': process.env.KEY,
  'x-rapidapi-host': process.env.HOST,
  useQueryString: true
}

module.exports = Router()
  .post('/', (req, res, next) => {
    Movie
      .create({
        filmRef: req.body.filmRef,
        title: req.body.title,
        thumbsUp: req.body.thumbsUp,
        thumbsDown: req.body.thumbsDown, 
      })
      .then(movie => res.send(movie))
      .catch(next);
  })

  .patch('/', (req, res, next) => {
    Movie
      .findOneAndUpdate({ filmRef: req.body.filmRef }, req.body, { new: true })
      .then(data => res.send(data))
      .catch(next)
  })

  .get('/film/:filmRef', (req, res, next) => {
    Movie
    .find({filmRef: req.params.filmRef})
    .then(data => res.send(data))
    .catch(next)
  })

  .get('/film/:search', (req, res, next) => {
    request
    .get(`${process.env.API_URL}/search/${req.params.search}`)
    .set(options)
    .then(data => res.send(data))

  .catch(next)
  })

  .get('/film/:id', (req, res, next) => {
    request
    .get(`${process.env.API_URL}/film/${req.params.id}`)
    .set(options)
    .then(data => res.send(data))
  .catch(next)
  });
