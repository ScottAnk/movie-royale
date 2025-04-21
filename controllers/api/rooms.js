const Room = require('../../models/room')
const { messageSockets } = require('../../lib/socketIo')

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

// find a room based on roomCode and return it to client
async function joinRoom(req, res, next) {
  try {
    const room = await Room.findOne({ roomCode: req.params.roomCode })
    if (!room) throw new Error('room not found')

    res.json(room)
  } catch (error) {
    if (error?.message === 'room not found') return res.sendStatus(404)

    next(error)
  }
}

// add user's vote to a recommended movie
async function vote(req, res, next) {
  try {
    const room = await Room.findOne({ roomCode: req.params.roomCode }).exec()

    // find movie in recommended movies list
    const movie = room.recommendedMovies.find(
      (movie) => movie.imdbid === req.body.imdbid
    )

    // declare some test variables
    const votingYes = req.body.vote.toLowerCase() === 'yes'
    const alreadyVotedYes = movie.usersVotingYes.includes(req.user._id)
    const alreadyVotedNo = movie.usersVotingNo.includes(req.user._id)

    // check for duplicate vote, return early
    if ((votingYes && alreadyVotedYes) || (!votingYes && alreadyVotedNo)) {
      res.json(room)
      return
    }

    // check if user is changing a previous vote
    if (votingYes && alreadyVotedNo) {
      //remove them from usersVotingNo
      const indexInVotingNo = movie.usersVotingNo.indexOf(req.user._id)
      movie.usersVotingNo.splice(indexInVotingNo, 1)
    } else if (!votingYes && alreadyVotedYes) {
      // remove them from usersVotingYes
      const indexInVotingYes = movie.usersVotingYes.indexOf(req.user._id)
      movie.usersVotingYes.splice(indexInVotingYes, 1)
    }

    // add them to the right array
    const arrayName = 'usersVoting' + (votingYes ? 'Yes' : 'No')
    movie[arrayName].push(req.user._id)
    await room.save()

    // push an update to all sockets in the room
    messageSockets(req.params.roomCode, 'room update', room)

    res.json(room)
  } catch (error) {
    next(error)
  }
}

async function recommend(req, res, next) {
  try {
    const room = await Room.findOne({ roomCode: req.params.roomCode })

    // check if movie is already recommended in this room
    const positionInReccomendations = room.recommendedMovies.find(
      (movie) => movie.imdbid === req.body.imdbid
    )
    if (positionInReccomendations) {
      // if the movie is already recommended, count this user as a vote for yes
      req.body.vote = 'yes'
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

      console.log('reccomending movie')
      room.recommendedMovies.push(movie)
      await room.save()

      // push an update to all sockets in the room
      messageSockets(req.params.roomCode, 'room update', room)

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
  const symbols = 'ABCDEFGHIJKLMNPQRSTUVWXYZ345679'

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
