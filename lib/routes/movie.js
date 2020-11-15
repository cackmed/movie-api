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
      .create(req.body)
      .then(movie => res.send(movie))
      .catch(next);
  })

  .get('/:search', (req, res, next) => {
    request
    .get(`${process.env.API_URL}/search/${req.params.search}`)
    .set(options)
    .then(movieItem => {
      res.send(movieItem)
  })
  .catch(next)
  })

  .get('/:id', (req, res, next) => {
    request
    .get(`${process.env.API_URL}/film/${req.params.id}`)
    .set(options)
    .then(movieItem => {
      Movie
      .findById(movieItem.id) 
      .then(dataItem => {
        if(dataItem) {
          res.send({ dataItem, movieItem})
        }
        else {
          res.send(movieItem)
        }
      })
      
  })
  .catch(next)
  });
