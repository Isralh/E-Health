import React, { useRef, useState, useEffect } from 'react'
import Peer from 'simple-peer'
import io from 'socket.io-client'
import JwtDecode from 'jwt-decode'
import CustomerView from './CustomerView'
import ProviderView from './ProviderView'
import { useHistory } from 'react-router-dom'
import './styles.scss'

/* socket to send and receive message to the server */
let socket

const Sessions = ({ match }) => {
  /* user's information we get from the Jwt token saved in the local storage */
  const userToken = window.localStorage.getItem('token')
  const user = JwtDecode(userToken)

  /* state to show we're currently calling client, view only for the provider page */
  const [callingClient, setCallingClient] = useState(false)

  /* state to hold call status when customer accept call, view for provider */
  const [customerAccepted, setCustomerAccepted] = useState(false)

  const [users, setUsers] = useState()
  const [myId, setMyId] = useState()
  const [peerId, setPeerId] = useState()
  const [userStream, setUserStream] = useState()
  const [callOffer, setCallOffer] = useState(null)
  /* ref to user's video */
  const userVideoRef = useRef()

  /* ref to peer's video */
  const customerVideo = useRef()

  const doctorVideo = useRef()

  /* the video chat room name */
  const room = match.params.id

  // const getUserMedia = navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia || navigator.mediaDevices.mozGetUserMedia

  /* on initial render connect to the socket in the server */
  useEffect(() => {
    /* connection to the socket in the server */
    socket = io('http://206.189.187.231')

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
      setCallingClient(true)
      setCallOffer(data)
    })

    /* on peer refresh, refresh and start new connection */
    socket.on('peerRefresh', () => {
      window.location.reload()
    })
  }, [])

  /* peer connection */
  useEffect(() => {
    /* get user's media stream on initial render */
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(media => {
        if (media) {
          userVideoRef.current.srcObject = media
          setUserStream(media)
        }
      }).catch((e) => console.log(e))
  }, [])

  const handleCalling = () => {
    /* for the provider page to show we're calling client */
    setCallingClient(true)

    /* create a first peer which is the doctor/provider who initiates the call */
    const provider = new Peer({ initiator: true, trickle: false, stream: userStream })

    /* the call offer which is the data and we're trying to call the customer */
    provider.on('signal', data => {
      socket.emit('doctorCalling', { customer: peerId, offer: data })
    })
    /* when they accept make the customerVideo ref srcObject the customer's media stream */
    provider.on('stream', stream => {
      customerVideo.current.srcObject = stream
    })

    socket.on('customerAccepted', signal => {
      provider.signal(signal)
      setCustomerAccepted(true)
    })
  }

  /* function to accept the call on the customer side */
  const handleAnswer = () => {
    /* set call has been accepted to true, when call is accepted by client */
    setCustomerAccepted(true)

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

  /* when clicking on end session redirect to dashboard */
  const history = useHistory()
  const endCustomerSession = () => {
    const confirmEndSession = window.confirm('Are you sure you want to end session?')
    if (confirmEndSession === true) {
      history.push('/customer/dashboard')
    }
  }

  const endProviderSession = () => {
    const confirmEndSession = window.confirm('Are you sure you want to end session?')
    if (confirmEndSession === true) {
      history.push('/provider/dashboard')
    }
  }

  /* session storage used to get rid of video when redirecting to the dashboard page */
  useEffect(() => {
    const sessionStorage = window.sessionStorage.getItem('session')
    console.log(sessionStorage)
    if (sessionStorage === null) {
      window.sessionStorage.setItem('session', 'initial session')
    }
  }, [])

  return (
    <div>
      {user.role === 'customer'
        ? <>
          <CustomerView
            callStatus={customerAccepted}
            users={users}
            role={user.role}
            myVideoRef={userVideoRef}
            doctorVideoRef={doctorVideo}
            offer={callOffer}
            calling={callingClient}
            AcceptCall={handleAnswer}
            handleEndSession={endCustomerSession}
          />
          </>
        : <ProviderView
          callStatus={customerAccepted}
          offer={callOffer}
          calling={callingClient}
          users={users}
          role={user.role}
          myVideoRef={userVideoRef}
          customerVideoRef={customerVideo}
          callClient={handleCalling}
          handleEndSession={endProviderSession}
        />}
    </div>
  )
}

export default Sessions
