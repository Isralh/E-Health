import React from 'react'
import './Styles.scss'
const InternalServerError = () => {
  const handleReload = () => {
    window.location.reload()
  }
  return (
    <div className='PageNotFound'>
      <header className='pageHeader'>
        <h1>500</h1>
      </header>
      <div className='message-container'>
        <p className='main-message'>Internal Server Error</p>
        <p className='sub-message'>The page your looking for doesn't exist or an
        expected error happened.
        </p>
        <button className='reload' onClick={handleReload}>Reload</button>
      </div>
    </div>
  )
}

export default InternalServerError
