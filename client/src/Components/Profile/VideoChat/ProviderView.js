import React from 'react'
import { Link } from 'react-router-dom'
const ProviderView = ({ users = [], myVideoRef, customerVideoRef, callClient, calling }) => {
  return (
    <div className='view-container'>
      {users.length > 1
        ? <div className='withPeer-view'>
          <div className='my-video-container'>
            <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
          </div>
          <div className='client-online'>
            {calling === true
              ? <>
                <h1>Calling client, waiting for response...</h1>
                <div className='option-control'>
                  <Link to='/provider/dashboard' className='end-session'><button>End Session</button></Link>
                </div>
                </>
              : <>
                <h1>Client in online, call client to start session...</h1>
                <div className='option-control'>
                  <button className='call-client' onClick={callClient}>Call Client</button>
                  <Link to='/provider/dashboard' className='end-session'><button>End Session</button></Link>
                </div>
              </>}
          </div>
          <div className='peer-view'>
            <video className='peer-video' ref={customerVideoRef} autoPlay playsInline />
          </div>
        </div>
        : <div className='withoutPeer-view'>
          <div className='my-video-container'>
            <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
          </div>
          <div className='peer-container'>
            <h1>Waiting for client to start session...</h1>
            <Link to='/provider/dashboard' className='end-session'><button>End Session</button></Link>
          </div>
        </div>}
    </div>
  )
}

export default ProviderView
