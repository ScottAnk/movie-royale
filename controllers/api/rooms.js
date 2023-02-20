const Room = require('../../models/room')
// const logOut = require('../../src/utilities/users-service')

// generate a new room in database and send it back as a response
async function createRoom(req, res, next) {
  const roomName = `${req.user.name}'s Room`

  Room.create({
    ownerId: req.user._id,
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

module.exports = {
  createRoom,
  joinRoom,
  vote,
  recommend,
}
