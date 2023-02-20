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

// new rooms need to get a roomCode
roomSchema.pre('save', async function (next) {
  if (!this.isNew) return

  this.roomCode = await generateRoomCode(this)
  next()
})

// generate a unique room code
async function generateRoomCode(document) {
  const Room = document.constructor

  // get a random string
  let proposedCode = makeRandomCode()
  let codeAlreadyUsed = await Room.findOne({ roomCode: proposedCode }).exec()

  // keep getting strings until we find one that isn't assigned to a room already
  // this kind of looping and random generation will get really slow if the possibility space starts to fill up
  while (codeAlreadyUsed) {
    proposedCode = makeRandomCode()
    codeAlreadyUsed = await Room.findOne({ roomCode: proposedCode }).exec()
  }

  const uniqueCode = proposedCode
  return uniqueCode
}

// make a 6 character string to feed generateRoomCode
function makeRandomCode() {
  // TODO-SA it would be kinda tight to restrict output to prevent repeat characters

  // excluding 1, 2, 8, and 0 for reduced ambiguity
  const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ345679'

  // pick 6 character from symbols
  let randomCode = ''
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * symbols.length)
    randomCode += symbols[randomIndex]
  }

  return randomCode
}

module.exports = mongoose.model('Room', roomSchema)
