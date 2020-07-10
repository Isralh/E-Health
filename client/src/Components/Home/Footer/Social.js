import React from 'react'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Social = () => {
  return (
    <div className='social-container'>
      <div className='copyright'>
        <p>Copyright ©2020 All rights reserved</p>
      </div>
      <div className='social-icons'>
        <span><FontAwesomeIcon icon={faFacebook} /></span>
        <span><FontAwesomeIcon icon={faInstagram} /></span>
        <span><FontAwesomeIcon icon={faTwitter} /></span>
      </div>
    </div>
  )
}

export default Social
