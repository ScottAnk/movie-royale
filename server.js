const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const http = require('http')
const { Server: socketServer } = require('socket.io')

// load environment variables and open database connection
require('dotenv').config()
require('./config/database')

// initialize the express server and Socket.IO
const app = express()
const httpServer = http.createServer(app)
const io = new socketServer(httpServer)

// log socket connections
io.on('connection', (socket) => {
  console.log('a user connected')
  io.emit('test', 'hi from serverland')
})

app.use(logger('dev'))
// Process data in body of request if
// Content-Type: 'application/json'
// and put that data on req.body
app.use(express.json())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// middleware that adds the user object from a JWT to req.user
app.use(require('./config/checkToken'))

// Put all API routes here (before the catch-all)
app.use('/api/users', require('./routes/api/users'))
app.use('/api/rooms', require('./routes/api/rooms'))
app.use('/api/movies', require('./routes/api/movies'))

// Protect the api routes below from anon users
const ensureLoggedIn = require('./config/ensureLoggedIn')

// 'catch-all' route that will match all GET requests
// that don't match an API route defined above
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 3001

httpServer.listen(port, function () {
  console.log(`Express app running on port ${port}`)
})
