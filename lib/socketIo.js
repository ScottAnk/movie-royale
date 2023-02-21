// many thanks to the stack overflow community for this helpful code to modularize socket.io initialization
// https://stackoverflow.com/questions/54818909/access-socketio-from-another-file

let io
exports.socketConnection = (server) => {
  io = require('socket.io')(server)
  // when socket connects, configure the event listeners
  io.on('connection', (socket) => {
    // log the connection for troubleshooting
    console.info(`Client connected [id=${socket.id}]`)
    // log disconnects for troubleshooting
    socket.on('disconnect', () => {
      console.info(`Client disconnected [id=${socket.id}]`)
    })
    // send a test signal for debugging, and log response
    socket.emit('test', 'hello from socket.io module')
    socket.on('client test', (msg) => {
      console.log(msg)
    })

    // allow sockets to opt into specific rooms, conviniently coded by roomCodes
    socket.on('join room', (roomCode) => {
      console.log(`socket [${socket.id}] is joining room ${roomCode}`)
      socket.join(roomCode)
    })
  })
}

exports.sendMessage = (roomId, key, message) => io.to(roomId).emit(key, message)

exports.getRooms = () => io.sockets.adapter.rooms
