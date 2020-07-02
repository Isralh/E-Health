import React from 'react'

const ProviderView = ({ users = [], myVideoRef, customerVideoRef, callClient }) => {
  return (
    <div className='view-container'>
      {users.length > 1
        ? <div className='withPeer-view'>
          <div className='my-video-container'>
            <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
          </div>
          <button onClick={callClient}>Call Client</button>
          <div className='peer-view'>
            <video className='peer-video' ref={customerVideoRef} autoPlay playsInline />
          </div>
        </div>
        : <div className='withoutPeer-view'>
          <div className='my-video-container'>
            <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
          </div>
          <div className='peer-view'>
            <div className='message'>
              <h1>Waiting on Client...</h1>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default ProviderView
