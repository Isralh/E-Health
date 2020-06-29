// const socketIo = require('socket.io')
const socket = (server) => {
  /* configuration to make socket.io listen to our server */

  /* io listen to our server */
  const io = socketIo.listen(server)
  /* current users in the room */
  const users = {}

  io.on('connect', socket => {
    const id = socket.id

    /* if there isn't a user with that socket id a key value pair with the socket.id being the key and also the value */
    if (!users[socket.id]) {
      users[socket.id] = socket.id
    }

    /* send the id to the user on first connection */
    socket.emit('id', id)

    /* send all users info to the room */
    io.sockets.emit('users', users)

    /* on disconnect delete the user from the room */
    socket.on('disconnect', () => {
      delete users[users.id]
    })
  })
}

module.exports = socket
