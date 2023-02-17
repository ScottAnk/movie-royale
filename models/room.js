const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recommendedMovie = new Schema()

const roomSchema = new Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  roomCode: {
    type: String,
    required: true,
  },
  parentalControlsOn: {
    type: Boolean,
    default: false,
  },
  proposedMovies: {
    type: [recommendedMovie],
    default: [],
  },
  locked: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Room', roomSchema)
