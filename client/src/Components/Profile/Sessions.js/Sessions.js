import React, { useEffect, useState, useRef } from 'react'
import io from 'socket.io-client'
import Peer from 'simple-peer'
import JwtDecode from 'jwt-decode'
import CustomerView from './CustomerView'
import ProviderView from './ProviderView'
const Sessions = ({ match }) => {
  /* user's information we get from the Jwt token saved in the local storage */
  const userToken = window.localStorage.getItem('token')
  const user = JwtDecode(userToken)
  console.log(user)

  const [users, setUsers] = useState()
  const [userId, setUserId] = useState()
  /* socket to send and receive message to the server */
  let socket

  /* the video chat room name */
  const room = match.params.id

  /* on initial load connect to the socket in the server */

  useEffect(() => {
    /* connection to the socket in the server */
    socket = io('http://localhost:3002')

    /* get the individuals socket Id */
    socket.on('socketId', data => {
      setUserId(data)
    })

    /* send the individuals name and connection room to the server */
    socket.emit('join', { name: user.firstName, room })

    /* Hello message to the individual upon entry */
    socket.on('Hello', data => {
      console.log(data)
    })

    socket.on('allId', data => {
      console.log(data)
      setUsers(data)
    })

    socket.on('disconnect', data => {
      console.log(data.message)
    })
  }, [])

  useEffect(() => {
    console.log(users)
    console.log(userId)
  }, [users, userId])
  return (
    <div>
      {user.role === 'customer' ? <CustomerView users={users} role={user.role} />
        : <ProviderView users={users} role={user.role} />}
    </div>
  )
}

export default Sessions
