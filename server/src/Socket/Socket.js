
const roomUsers = {}
const users = {}

const socket = (server) => {
  // /* io listen to our server */
  const io = require('socket.io')(server)

  io.on('connection', socket => {


    // console.log(roomUsers)
    /* when they first connect we will send them their user id */
    socket.emit('socketId', socket.id)

    /* join room */
    socket.on('join', ({ name, room }) => {
      socket.join(room)
      io.in(room).clients((err, id) => {
        if (err) console.log(err)
        io.to(room).emit('allId', id)
      })

      socket.on('doctorCalling', data => {
        io.to(data.customer).emit('answerCall', data.offer)
      })
      socket.on('accepted', data => {
        io.to(data.provider).emit('customerAccepted', data.accept)
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