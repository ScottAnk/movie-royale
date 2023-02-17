const express = require('express')
const router = express.Router()

const roomCtrl = require('../../controllers/api/rooms')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// Create room for logged in user
router.post('/', ensureLoggedIn, roomCtrl.createRoom)

// Get room data for pre-defined room
router.get('/:roomCode', roomCtrl.joinRoom)

// Cast or update vote on a recommended movie
router.post('/:roomId/vote', ensureLoggedIn, roomCtrl.vote)

// Add a movie to room's recommended movies
router.post('/:roomId/recommend', ensureLoggedIn, roomCtrl.recommend)

module.exports = router
