import React from 'react'
import { ErickKnight } from '../../../Assets/Images/exports'
import './Styles.scss'

const ClientReviews = () => {
  return (
    <div className='clientReviews-container'>
      <div className='clientReviews-content'>
        <div className='clientReviews'>
          <div className='review-wrapper'>
            <div className='reviewer-image' style={{ backgroundImage: `url(${ErickKnight})` }} />
            <h1>Isral Hadero</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientReviews
