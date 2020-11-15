const mongoose = require('mongoose');
const Movie = require('./Movie');

describe('movie model', () => {
  it('throws an error if the data does not have a title', () => {
    const movie = new Movie();
    const { errors } = movie.validateSync();
    expect(errors.title.message).toEqual('Path `title` is required.');
  });
  it('throws an error if the data does not have a thumbs up', () => {
    const user = new Movie();
    const { errors } = user.validateSync();
    expect(errors.thumbsUp.message).toEqual('Path `thumbsUp` is required.');
  });
  it('throws an error if the data does not have a thumbs down', () => {
    const user = new Movie();
    const { errors } = user.validateSync();
    expect(errors.thumbsDown.message).toEqual('Path `thumbsDown` is required.');
  });

  it('passes a working movie model', () => {
    const user = new Movie({
      title: 'Tester and the test that passed',
      thumbsUp: 32,
      thumbsDown: 0, 
    });
    expect(user.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      title: 'Tester and the test that passed',
      thumbsUp: 32,
      thumbsDown: 0, 
    });
  });
});

