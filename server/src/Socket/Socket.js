
const socket = (app, port) => {
  /* configuration to make socket.io listen to our server */

  /* create a server, make our app listen to our port */
  const server = app.listen(port)

  /* io listen to our server */
  const io = require('socket.io').listen(server)

  /* current users in the room */
  const users = {}

  io.on('connect', socket => {
    const id = socket.id

    /* if there isn't a user with that socket id a key value pair with the socket.id being the key and also the value */
    if (!users[socket.id]) {
      users[socket.id] = socket.id
    }

    /* send the id to the user */
    io.emit('id', id)

    /* on disconnect delete the user from the room */
    socket.on('disconnect', () => {
      delete users[users.id]
    })
  })
}

module.exports = socket
