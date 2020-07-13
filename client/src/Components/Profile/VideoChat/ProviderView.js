import React from 'react'
import { Link } from 'react-router-dom'
const ProviderView = ({ users = [], myVideoRef, customerVideoRef, callClient, calling, callStatus, offer }) => {
  /* when customer/client is not online render the below */
  const clientOffline = () => {
    return (
      <div className='withoutPeer-view'>
        <div className='my-video-container'>
          <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
        </div>
        <div className='peer-container'>
          <h1>Waiting for client to start session...</h1>
          <Link to='/provider/dashboard' className='end-session'><button>End Session</button></Link>
        </div>
      </div>
    )
  }

  /* when calling client render the below */
  const callingClient = () => {
    if (calling === false && offer === null) {
      return (
        <div className='withPeer-view'>
          <div className='my-video-container'>
            <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
          </div>
          <div className='client-online'>
            <h1>Client in online, call client to start session...</h1>
            <div className='option-control'>
              <button className='call-client' onClick={callClient}>Call Client</button>
              <Link to='/provider/dashboard' className='end-session'><button>End Session</button></Link>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='withPeer-view'>
          <div className='my-video-container'>
            <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
          </div>
          <div className='client-online'>
            <h1>Calling client, waiting for response...</h1>
            <div className='option-control'>
              <Link to='/provider/dashboard' className='end-session'><button>End Session</button></Link>
            </div>
          </div>
        </div>
      )
    }
  }

  /* when client answers call from provider render the below */
  const clientAnsweredCall = () => {
    return (
      <div className='withPeer-view'>
        <div className='my-video-container'>
          <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
        </div>
        <div className='peer-view'>
          <video className='peer-video' ref={customerVideoRef} autoPlay playsInline />
        </div>
        <div className='endCallSession'>
          <Link to='/provider/dashboard' className='end-session'><button>End Session</button></Link>
        </div>
      </div>
    )
  }

  /* Based on call status accepted or not render the below */
  const checkCallStatus = () => {
    if (callStatus === true) {
      return (
        clientAnsweredCall()
      )
    } else {
      return (
        callingClient()
      )
    }
  }

  /* Based on the client is online or offline render the below */
  const view = () => {
    if (users.length > 1) {
      return (
        checkCallStatus()
      )
    } else {
      return (
        clientOffline()
      )
    }
  }

  return (
    <div className='view-container'>
      {view()}
    </div>
  )
}

export default ProviderView
