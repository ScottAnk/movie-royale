const Room = require('../../models/room')

function registerSocket(socket) {
  console.log('a user connected')
  io.emit('test', 'hi from serverland')
}

module.exports = initializeSocketIo
