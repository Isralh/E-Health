import React from 'react'
import { Link } from 'react-router-dom'

const CustomerView = ({ users = [], myVideoRef, AcceptCall, doctorVideoRef, calling, callStatus }) => {
  /* when provider is not online render the below */
  const providerOffline = () => {
    return (
      <div className='withoutPeer-view'>
        <div className='my-video-container'>
          <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
        </div>
        <div className='peer-container'>
          <h1>Waiting for doctor to start session...</h1>
          <Link to='/customer/dashboard' className='end-session'><button>End Session</button></Link>
        </div>
      </div>
    )
  }

  /* when provider is calling render the below */
  const providerCalling = () => {
    if (calling === true) {
      return (
        <div className='withPeer-view'>
          <div className='my-video-container'>
            <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
          </div>
          <div className='peer-calling'>
            <h1>Doctor is calling, please answer call to start session...</h1>
            <button onClick={AcceptCall} className='answer-call'>Answer Call</button>
            <Link to='/customer/dashboard' className='end-session'><button>End Session</button></Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className='withPeer-view'>
          <div className='my-video-container'>
            <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
          </div>
          <div className='doctor-online'>
            <h1>Doctor is on the line and will call shortly...</h1>
            <Link to='/customer/dashboard' className='end-session'><button>End Session</button></Link>
          </div>
        </div>
      )
    }
  }

  /* when client answers call from provider render the below */
  const callIsAnswered = () => {
    return (
      <div className='withPeer-view'>
        <div className='my-video-container'>
          <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
        </div>
        <div className='peer-view'>
          <video className='peer-video' ref={doctorVideoRef} autoPlay playsInline />
        </div>
        <div className='endCallSession'>
          <Link to='/customer/dashboard' className='end-session'><button>End Session</button></Link>
        </div>
      </div>
    )
  }

  /* Based on call status accepted or not render the below */
  const checkCallStatus = () => {
    if (callStatus === true) {
      return (
        callIsAnswered()
      )
    } else {
      return (
        providerCalling()
      )
    }
  }

  /* Based on the provider is online or offline render the below */
  const view = () => {
    if (users.length > 1) {
      return (
        checkCallStatus()
      )
    } else {
      return (
        providerOffline()
      )
    }
  }

  return (
    <div className='view-container'>
      {view()}
    </div>
  )
}

export default CustomerView
