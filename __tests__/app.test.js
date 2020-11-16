const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

const request = require('supertest');
const app = require('../lib/app');

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
    const agent = request.agent(app);
    
    return agent
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
});
