import React from 'react'
import './Styles.scss'
import { Link } from 'react-router-dom'

const LinkStyle = {
  textDecoration: 'none'
}
const PageNotFound = () => {
  return (
    <div className='PageNotFound'>
      <header className='pageHeader'>
        <h1>404</h1>
      </header>
      <div className='message-container'>
        <p className='main-message'>PAGE NOT FOUND</p>
        <p className='sub-message'>The page your looking for doesn't exist or an
        expected error happened.
        </p>
        <p className='sub-message'>Go to <Link to='/' style={LinkStyle}>Home Page.</Link></p>
      </div>
    </div>
  )
}

export default PageNotFound
