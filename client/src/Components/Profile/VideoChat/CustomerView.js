import React from 'react'

const CustomerView = ({ users = [], myVideoRef, AcceptCall, doctorVideoRef, calling, offer }) => {
  return (
    <div className='view-container'>
      {users.length > 1
        ? <div className='withPeer-view'>
          <div className='my-video-container'>
            <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
          </div>
          {(offer !== null) && (calling === true)
            ? <div>
              <button onClick={AcceptCall}>Answer Call</button>
            </div>
            : null}
          <div className='peer-view'>
            <video className='peer-video' ref={doctorVideoRef} autoPlay playsInline />
          </div>
        </div>
        : <div className='withoutPeer-view'>
          <div className='my-video-container'>
            <video className='my-video' ref={myVideoRef} autoPlay playsInline muted />
          </div>
        </div>}
    </div>
  )
}

export default CustomerView
