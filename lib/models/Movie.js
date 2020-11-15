/* eslint-disable indent */
const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbsUp: {
        type: Number,
        required: true
    },
    thumbsDown: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Movie', schema);
