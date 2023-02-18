const mongoose = require('mongoose')

const recommendedMovieSchema = require('./recommendedMovieSchema')

const Schema = mongoose.Schema

const roomSchema = new Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  roomName: {
    type: String,
    requred: true,
  },
  roomCode: {
    type: String,
    required: true,
  },
  parentalControlsOn: {
    type: Boolean,
    default: false,
  },
  recommendedMovies: {
    type: [recommendedMovieSchema],
    default: [],
  },
  locked: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Room', roomSchema)
