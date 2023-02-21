// many thanks to the stack overflow community for this helpful code to modularize socket.io initialization
// https://stackoverflow.com/questions/54818909/access-socketio-from-another-file

let io
exports.socketConnection = (server) => {
  io = require('socket.io')(server)
  // when socket connects, configure event listeners
  io.on('connection', (socket) => {
    // allow sockets to opt into specific rooms, conviniently paralells our roomCodes
    socket.on('join room', (roomCode) => {
      console.log(`socket [${socket.id}] is joining room ${roomCode}`)
      socket.join(roomCode)
    })
  })
}

/**
 * send a message of type 'key' to sockets in room 'roomId'
 * @param {String} roomId - the roomId to target
 * @param {String} key - message type
 * @param message - any data to send
 */
exports.messageSockets = (roomId, key, message) =>
  io.to(roomId).emit(key, message)
