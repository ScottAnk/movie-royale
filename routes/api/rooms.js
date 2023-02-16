const express = require('express')
router = express.Router()
const roomCtrl = require('../../controllers/api/rooms')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const router = require('./users')

router.post('/room', ensureLoggedIn, roomCtrl.createRoom)

router.get('/room/:roomCode', roomCtrl.joinRoom)

router.post('/room/:roomId/vote', ensureLoggedIn, roomCtrl.)