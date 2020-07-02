import React, { useRef, useState, useEffect } from 'react'
import Peer from 'simple-peer'
import io from 'socket.io-client'
import JwtDecode from 'jwt-decode'
import CustomerView from './CustomerView'
import ProviderView from './ProviderView'
import './styles.scss'

/* socket to send and receive message to the server */
let socket

const Sessions = ({ match }) => {
  /* user's information we get from the Jwt token saved in the local storage */
  const userToken = window.localStorage.getItem('token')
  const user = JwtDecode(userToken)
  console.log(user)

  const [users, setUsers] = useState()
  const [myId, setMyId] = useState()
  const [peerId, setPeerId] = useState()
  const [userStream, setUserStream] = useState()
  const [isCalling, setIsCalling] = useState(false)
  const [callOffer, setCallOffer] = useState(null)
  /* ref to user's video */
  const userVideoRef = useRef()

  /* ref to peer's video */
  const customerVideo = useRef()

  const doctorVideo = useRef()

  /* the video chat room name */
  const room = match.params.id

  /* on initial load connect to the socket in the server */

  useEffect(() => {
    /* connection to the socket in the server */
    socket = io('http://localhost:3002')

    /* get the individuals socket Id */
    socket.on('socketId', data => {
      setMyId(data)
    })

    /* send the individuals name and connection room to the server */
    socket.emit('join', { name: user.firstName, room })

    socket.on('allId', data => {
      setUsers(data)
    })

    socket.on('answerCall', data => {
      setIsCalling(true)
      setCallOffer(data)
    })
  }, [])

  /* peer connection */
  useEffect(() => {
    /* get user's media stream on initial render */
    // navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    //   .then(media => {
    //     if (media) {
    //       userVideoRef.current.srcObject = media
    //       setUserStream(media)
    //     }
    //   }).catch((e) => console.log(e))
  }, [])

  const handleCalling = () => {
    /* create a first peer which is the doctor/provider who initiates the call */
    const provider = new Peer({ initiator: true, trickle: false, stream: userStream })

    /* the call offer which is the data and we're trying to call the customer
     */
    provider.on('signal', data => {
      socket.emit('doctorCalling', { customer: peerId, offer: data })
    })

    /* when they accept make the customerVideo ref srcObject the customer's media stream */
    provider.on('stream', stream => {
      customerVideo.current.srcObject = stream
    })

    socket.on('customerAccepted', signal => {
      provider.signal(signal)
    })
  }

  /* function to accept the call on the customer side */
  const handleAnswer = () => {
    /* create a new peer customer who is not the initiator but answers the call */
    const customer = new Peer({ initiator: false, trickle: false, stream: userStream })

    /* signal to send to the provider/doctor when answering the call */
    customer.on('signal', data => {
      socket.emit('accepted', { provider: peerId, accept: data })
    })

    /* after accepting get the doctorVideo ref's srcObject and make it the
       doctors/provide media stream to show in our screen */
    customer.on('stream', stream => {
      doctorVideo.current.srcObject = stream
    })

    customer.signal(callOffer)
  }

  /* filter out our Id from the users list so we can find the other peers Id we use to send calling and 
  accepting signals through sockets */
  useEffect(() => {
    if (users !== undefined) {
      const peer = users.filter(user => user !== myId)
      setPeerId(peer.toString())
    }
  }, [users])

  return (
    <div>
      {user.role === 'customer'
        ? <>
          <CustomerView
            users={users}
            role={user.role}
            myVideoRef={userVideoRef}
            doctorVideoRef={doctorVideo}
            offer={callOffer}
            calling={isCalling}
            AcceptCall={handleAnswer}
          />
          </>
        : <ProviderView
          users={users}
          role={user.role}
          myVideoRef={userVideoRef}
          customerVideoRef={customerVideo}
          callClient={handleCalling}
        />}
    </div>
  )
}

export default Sessions
