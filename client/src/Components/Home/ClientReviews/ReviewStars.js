import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const ReviewStars = () => {
  return (
    <div className='rating-stars'>
      <span className='checked-star'><FontAwesomeIcon icon={faStar} /></span>
      <span className='checked-star'><FontAwesomeIcon icon={faStar} /></span>
      <span className='checked-star'><FontAwesomeIcon icon={faStar} /></span>
      <span className='checked-star'><FontAwesomeIcon icon={faStar} /></span>
      <span className='checked-star'><FontAwesomeIcon icon={faStar} /></span>
    </div>
  )
}

export default ReviewStars
