// many thanks to the stack overflow community for this helpful code to modularize socket.io initialization
// https://stackoverflow.com/questions/54818909/access-socketio-from-another-file

// declare io at package scope so it's accessible after socketConnection is called
let io

/**
 * instantiates websocket server
 * @param {Server} server - http server for websocket to bind to
 */
function socketConnection(server) {
  io = require('socket.io')(server, {
    cors: { origin: process.env.CLIENT_ORIGIN || `http://localhost:3000` },
  })

  // when socket connects, configure event listeners
  io.on('connection', function (socket) {
    // allow sockets to opt into specific rooms, conviniently paralells our roomCodes
    socket.on('join room', function (roomCode) {
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
function messageSockets(roomId, key, message) {
  io.to(roomId).emit(key, message)
}

module.exports = { socketConnection, messageSockets }
