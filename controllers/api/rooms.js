const Room = require('../../models/room')
import { logOut } from '../../src/utilities/users-service'

async function createRoom(req, res) {
        const room = Room.create(ownerId)
        res.json(room)
        
}

async function joinRoom(req, res) {
try {
        logOut()
        const room = await Room.findOne({ roomCode: req.body.roomCode })
        if (!room) throw new Error()
} catch {
    const message = document.createElement('div')
    message.innerHTML = 'Could not find room'
    }
}

async function vote(req, res, next) {}

async function recommend(req, res, next) {}

module.exports = {
  createRoom,
  joinRoom,
  vote,
  recommend,
}
