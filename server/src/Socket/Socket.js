const users = {}
const socket = (server) => {
  // /* io listen to our server */
  const io = require('socket.io')(server)

  // /* current users in the room */
  // const users = {}

  // io.on('connect', socket => {
  //   const id = socket.id

  //   /* if there isn't a user with that socket id a key value pair with the socket.id being the key and also the value */
  //   if (!users[socket.id]) {
  //     users[socket.id] = socket.id
  //   }

  //   /* send the id to the user on first connection */
  //   socket.emit('id', id)

  //   /* send all users info to the room */
  //   io.sockets.emit('users', users)

  //   /* sending our signal to the customer */
  //   socket.on('callCustomer', data => {
  //     io.to(data.calling).emit('hey', { signal: data.signal, from: data.caller })
  //   })

  //   /* when they accept the call */

  //   socket.on('accepted', data => {

  //   })
  //   /* on disconnect delete the user from the room */
  //   socket.on('disconnect', () => {
  //     delete users[users.id]
  //   })
  // })

  io.on('connection', socket => {
    if (!users[socket.id]) {
      users[socket.id] = socket.id
    }
    socket.emit('yourID', socket.id)
    io.sockets.emit('allUsers', users)
    socket.on('disconnect', () => {
      delete users[socket.id]
    })

    socket.on('callUser', (data) => {
      io.to(data.userToCall).emit('hey', { signal: data.signalData, from: data.from })
    })

    socket.on('acceptCall', (data) => {
      io.to(data.to).emit('callAccepted', data.signal)
    })
  })
}

module.exports = socket
