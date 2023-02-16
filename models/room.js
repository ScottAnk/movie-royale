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

// generate a room code automatically when room is created
// function generateCode(next) {
//   if (!this.isNew) {
//     return next()
//   }

//   function makeRandomString() {
//     // excluding 1, 2, 8, and 0 for reduced ambiguity
//     const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ345679'

//     let result = ''
//     for (let i = 0; i < 6; i++) {
//       const randomIndex = Math.floor(Math.random() * symbols.length)
//       result += symbols[randomIndex]
//     }

//     return result
//   }
//   //find a unique string
//   console.log('pre validation hook')
//   let proposedCode = makeRandomString()
//   let codeAlreadyUsed = mongoose
//     .model('Room')
//     .findOne({ roomCode: proposedCode })
//     .exec()
//   while (codeAlreadyUsed) {
//     proposedCode = makeRandomString()
//     codeAlreadyUsed = mongoose
//       .model('Room')
//       .findOne({ roomCode: proposedCode })
//       .exec()
//   }

//   this.roomCode = proposedCode
//   next()
// }

module.exports = mongoose.model('Room', roomSchema)
