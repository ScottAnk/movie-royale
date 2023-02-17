const Room = require('../../models/room')
// const logOut = require('../../src/utilities/users-service')

// generate a new room in database and send it back as a response
async function createRoom(req, res, next) {
  const roomCode = await generateRoomCode()

  Room.create({
    ownerId: req.user._id,
    roomCode: roomCode,
  })
    .then((room) => res.json(room))
    .catch(next)
}

async function joinRoom(req, res) {
  try {
    // logOut()
    const room = await Room.findOne({ roomCode: req.body.roomCode })
    if (!room) throw new Error()
  } catch {
    const message = document.createElement('div')
    message.innerHTML = 'Could not find room'
  }
}

async function vote(req, res, next) {}

async function recommend(req, res, next) {}

// generate a unique room code
async function generateRoomCode() {
  // get a random string
  let proposedCode = makeRandomCode()
  let codeAlreadyUsed = await Room.findOne({ roomCode: proposedCode }).exec()

  // keep getting strings until we find one that isn't assigned to a room already
  while (codeAlreadyUsed) {
    proposedCode = makeRandomString()
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

module.exports = {
  createRoom,
  joinRoom,
  vote,
  recommend,
}
