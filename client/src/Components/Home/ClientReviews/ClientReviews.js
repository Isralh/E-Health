import React, { useState } from 'react'
import ReviewStars from './ReviewStars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Reviews from './Reviews'
import { ErickKnight, ZachSmith, FrontImage } from '../../../Assets/Images/exports'

import './Styles.scss'

const ClientReviews = () => {

  console.log(Reviews())
  const handleRight = () => {

  }
  return (
    <div className='clientReviews-container'>
      <div className='clientReviews-content'>
        <div className='review-heading'>
          <h1>WHAT OUR CLIENTS SAY</h1>
        </div>
        <div className='pagination'>
          <button><FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '18px' }} /></button>
          <button><FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '18px' }} onClick={handleRight}/></button>
        </div>
      </div>
    </div>
  )
}

export default ClientReviews
