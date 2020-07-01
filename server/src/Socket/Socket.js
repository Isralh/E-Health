
const roomUsers = {}
const users = {}

const socket = (server) => {
  // /* io listen to our server */
  const io = require('socket.io')(server)

  io.on('connection', socket => {
    /* if statement to check if the userId is in the all users object if not add the to all users object
     to keep track of our current users */
    if (!roomUsers[socket.id]) {
      roomUsers[socket.id] = socket.id
    }

    // console.log(roomUsers)
    /* when they first connect we will send them their user id */
    socket.emit('socketId', socket.id)

    /* join room */
    socket.on('join', ({ name, room }) => {
      socket.join(room)
      io.to(room).emit('Hello', `${name} has joined the video chat!`)
      io.in(room).clients((err, id) => {
        if (err) console.log(err)
        io.to(room).emit('allId', id)
      })

      /* when they disconnect delete the socket id from all users */
      socket.on('disconnect', () => {
        delete users[socket.id]
        io.to(room).emit('disconnect', { message: `${name} has left the chat!` })
        io.in(room).clients((err, id) => {
          if (err) console.log(err)
          io.to(room).emit('allId', id)
        })
      })
    })
  })
}

module.exports = socket
