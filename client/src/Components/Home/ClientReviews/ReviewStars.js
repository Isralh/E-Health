import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const ReviewStars = () => {
  return (
    <>
      <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
      <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
      <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
      <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
      <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
    </>
  )
}

export default ReviewStars
