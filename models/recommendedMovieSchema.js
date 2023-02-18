const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recommendedMovieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  trailer: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  imdbid: {
    type: String,
    required: true,
  },
  usersVotingYes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  },
  usersVotingNo: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  },
})

module.exports = recommendedMovieSchema
