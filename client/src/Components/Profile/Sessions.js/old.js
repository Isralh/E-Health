// import React, { useEffect, useState, useRef } from 'react'
// import io from 'socket.io-client'
// import Peer from 'simple-peer'
// import JwtDecode from 'jwt-decode'
// import CustomerView from './CustomerView'
// import ProviderView from './ProviderView'
// import './styles.scss'

// /* socket to send and receive message to the server */
// let socket

// const Sessions = ({ match }) => {
//   /* user's information we get from the Jwt token saved in the local storage */
//   const userToken = window.localStorage.getItem('token')
//   const user = JwtDecode(userToken)
//   console.log(user)

//   const [users, setUsers] = useState()
//   const [myId, setMyId] = useState()
//   const [peerId, setPeerId] = useState()
//   const [userStream, setUserStream] = useState()
//   const [peerStream, setPeerStream] = useState()
//   const [isCalling, setIsCalling] = useState(false)
//   const [accepted, setAccepted] = useState(false)
//   const [callOffer, setCallOffer] = useState(null)
//   /* ref to user's video */
//   const userVideoRef = useRef()

//   /* ref to peer's video */
//   const customerVideo = useRef()

//   const doctorVideo = useRef()

//   /* the video chat room name */
//   const room = match.params.id

//   /* on initial load connect to the socket in the server */

//   useEffect(() => {
//     /* connection to the socket in the server */
//     socket = io('http://localhost:3002')

//     /* get the individuals socket Id */
//     socket.on('socketId', data => {
//       setMyId(data)
//     })

//     /* send the individuals name and connection room to the server */
//     socket.emit('join', { name: user.firstName, room })

//     socket.on('allId', data => {
//       console.log(data)
//       setUsers(data)
//     })

//     socket.on('callReceived', data => {
//       setIsCalling(true)
//       setCallOffer(data.data)
//     })

//     socket.on('accepted', data => {
//       console.log(data)
//     })
//     socket.on('disconnect', data => {
//       console.log(data.message)
//     })

//     /* get user's media stream on initial render */
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//       .then(media => {
//         if (media) {
//           userVideoRef.current.srcObject = media
//           setUserStream(media)
//         }
//       }).catch((e) => console.log(e))
//   }, [])

//   useEffect(() => {
//     if (users !== undefined) {
//       const peer = users.filter(user => user !== myId)
//       setPeerId(peer.toString())
//     }
//   }, [users])

//   const handleCalling = () => {
//     const provider = new Peer({ initiator: true, trickle: false, stream: userStream })

//     provider.on('signal', data => {
//       socket.emit('doctorCalling', { customer: peerId, offer: data })
//     })

//     provider.on('stream', stream => {
//       customerVideo.current.srcObject = stream
//     })

//     socket.on('accepted', signal => {
//       provider.signal(signal.data)
//     })
//   }

//   function handleAnswer () {
//     const peer = new Peer({
//       initiator: false,
//       trickle: false,
//       stream: userStream
//     })
//     peer.on('signal', data => {
//       socket.current.emit('acceptCall', { signal: data, to: peerId })
//     })

//     peer.on('stream', stream => {
//       doctorVideo.current.srcObject = stream
//     })
//   }

//   useEffect(() => {
//     console.log(users)
//     console.log(myId)
//     console.log(peerId)
//     console.log(userStream)
//     console.log(callOffer)
//   }, [users, myId, peerId, userStream, callOffer])
//   return (
//     <div>
//       {user.role === 'customer'
//         ? <CustomerView
//           users={users}
//           role={user.role}
//           myVideoRef={userVideoRef}
//           doctorVideoRef={doctorVideo}
//           offer={callOffer}
//           calling={isCalling}
//           AcceptCall={handleAnswer}
//         />
//         : <ProviderView
//           users={users}
//           role={user.role}
//           myVideoRef={userVideoRef}
//           customerVideoRef={customerVideo}
//           callClient={handleCalling}
//           />}
//     </div>
//   )
// }

// export default Sessions
