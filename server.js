const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const ejs = require('ejs')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs')
})
io.on('connection', function (socket) {
  console.log('a user is connected', socket.id)
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg)
    io.emit('chat message', msg)
  })
})
server.listen(3000, function () {
  console.log('server is listening to port 3000')
})
