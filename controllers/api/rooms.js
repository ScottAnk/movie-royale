const Room = require('../../models/room')
// const logOut = require('../../src/utilities/users-service')

// generate a new room in database and send it back as a response
async function createRoom(req, res, next) {
  const roomCode = await generateRoomCode()
  const roomName = `${req.user.name}'s Room`

  Room.create({
    ownerId: req.user._id,
    roomCode: roomCode,
    roomName: roomName,
  })
    .then((room) => res.json(room))
    .catch(next)
}

async function joinRoom(req, res) {
  try {
    // logOut()
    const room = await Room.findOne({ roomCode: req.params.roomCode })
    res.json(room)
    if (!room) throw new Error()
  } catch {
    const message = document.createElement('div')
    message.innerHTML = 'Could not find room'
  }
}

async function vote(req, res, next) {}

async function recommend(req, res, next) {
  try {
    const room = await Room.findOne({ roomCode: req.params.roomCode })

    // check if movie is already recommended in this room
    const positionInReccomendations = room.recommendedMovies.find(
      (movie) => movie.imdbid === req.body.imdbid
    )
    if (positionInReccomendations) {
      // if the movie is already recommended, count this user as a vote for yes
      req.vote = 'yes'
      await vote(req, res, next)
    } else {
      // otherwise, add the movie to the list of reccomended movies

      // grab attributes to build a reccomendedMovie document
      const movie = {
        title: req.body.title,
        thumbnail: req.body.thumbnail,
        image: req.body.image,
        description: req.body.description,
        trailer: req.body.trailer,
        genre: req.body.genre,
        imdbid: req.body.imdbid,
        usersVotingYes: [req.user._id],
      }

      room.recommendedMovies.push(movie)
      await room.save()

      res.json(room)
    }
  } catch (error) {
    next(error)
  }
}

// generate a unique room code
async function generateRoomCode() {
  // get a random string
  let proposedCode = makeRandomCode()
  let codeAlreadyUsed = await Room.findOne({ roomCode: proposedCode }).exec()

  // keep getting strings until we find one that isn't assigned to a room already
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

module.exports = {
  createRoom,
  joinRoom,
  vote,
  recommend,
}
