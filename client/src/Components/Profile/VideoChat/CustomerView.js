import React from 'react'
import { Link } from 'react-router-dom'

const CustomerView = ({ users = [], myVideoRef, AcceptCall, doctorVideoRef, calling, offer }) => {
  return (
    <div className='view-container'>
      {users.length > 1
        ? <div className='withPeer-view'>
          <div className='my-video-container'>
            <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
          </div>
          {(offer !== null) && (calling === true)
            ? <div className='peer-calling'>
              <h1>Doctor is calling, please answer call to start session...</h1>
              <button onClick={AcceptCall} className='answer-call'>Answer Call</button>
              <Link to='/customer/dashboard' className='end-session'><button>End Session</button></Link>
            </div>
            : <div className='doctor-online'>
              <h1>Doctor is on the line and will call shortly...</h1>
              <Link to='/customer/dashboard' className='end-session'><button>End Session</button></Link>
            </div>}
          <div className='peer-view'>
            <video className='peer-video' ref={doctorVideoRef} autoPlay playsInline />
          </div>
        </div>
        : <div className='withoutPeer-view'>
          <div className='my-video-container'>
            <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
          </div>
          <div className='peer-container'>
            <h1>Waiting for doctor to start session...</h1>
            <Link to='/customer/dashboard' className='end-session'><button>End Session</button></Link>
          </div>
        </div>}
    </div>
  )
}

export default CustomerView
