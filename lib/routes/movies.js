const { Router } = require('express');
const request = require('superagent');
const Movie = require('../models/Movie');

const options = {
  'x-rapidapi-key': 'cf1f9e357bmshb1965fc9f8cec9ap1a3aebjsn067152a7b766',
  'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
  useQueryString: true
}

module.exports = Router()
  .post('/', (req, res, next) => {
    Movie
      .create(req.body)
      .then(movie => res.send(movie))
      .catch(next);
  })

  .patch('/', (req, res, next) => {
    Movie
      .findOneAndUpdate({ filmRef: req.body.filmRef }, req.body, { new: true })
      .then(data => res.send(data))
      .catch(next)
  })

  .get('/filmRef/:filmRef', (req, res, next) => {
    Movie
    .find({filmRef: req.params.filmRef})
    .then(data => res.send(data))
    .catch(next)
  })

  .get('/search/:search', (req, res, next) => {
    request
    .get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${req.params.search}`)
    .set(options)
    .then(data => res.send(data))

  .catch(next)
  })

  .get('/film/:id', (req, res, next) => {
    request
    .get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${req.params.id}`)
    .set(options)
    .then(data => res.send(data))
  .catch(next)
  });
