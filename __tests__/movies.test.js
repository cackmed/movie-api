require('dotenv').config();
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const request = require('supertest');
const app = require('../lib/app');
const Movie = require('../lib/models/Movie')

jest.setTimeout(30000);


describe('Movie-api routes', () => {
  beforeAll(async() => {
    const uri = await mongod.getUri();
    return connect(uri);
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(async() => {
    await mongoose.connection.close();
    return mongod.stop();
  });
  it('should create a new instance of the Movie model', () => {
    
    return request(app)
    .post('/api/v1/movies')
    .send({ 
      filmRef: '1',
      title: 'Tester and the great Jest Test',
      thumbsUp: 0,
      thumbsDown: 34,
    })
    .then(res => {
      expect(res.body).toEqual({
        _id: expect.any(String),
        filmRef: '1',
        title: 'Tester and the great Jest Test',
        thumbsUp: 0,
        thumbsDown: 34,  
        __v: 0
      });
    })
  })
  it('should update a existing instance of the Movie model', async () => {
    const movieItem = await Movie.create({
      filmRef: '1',
      title: 'Tester and the great Jest Test',
      thumbsUp: 0,
      thumbsDown: 34,
    })
    return request(app)
    .patch('/api/v1/movies')
    .send({ 
      filmRef: '1',
      title: 'Tester and the great Jest Test',
      thumbsUp: 0,
      thumbsDown: 54,
    })
    .then(res => {
      expect(res.body).toEqual({
        _id: expect.any(String),
        filmRef: movieItem.filmRef,
        title: movieItem.title,
        thumbsUp: movieItem.thumbsUp,
        thumbsDown: 54,  
        __v: movieItem.__v
      });
    })
  })
  it('should get an existing instance of the Movie model by the filmRef field', async () => {
    const movieItem = await Movie.create({
      filmRef: '1',
      title: 'Tester and the great Jest Test',
      thumbsUp: 0,
      thumbsDown: 34,
    })
    return request(app)
    .get('/api/v1/movies/filmRef/1')
    .then(res => {
      expect(res.body).toEqual([{
        _id: expect.any(String),
        filmRef: movieItem.filmRef,
        title: movieItem.title,
        thumbsUp: movieItem.thumbsUp,
        thumbsDown: movieItem.thumbsDown,  
        __v: movieItem.__v
      }]);
    })
  })
})