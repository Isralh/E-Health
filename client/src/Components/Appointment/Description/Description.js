import React from 'react'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Description = ({ firstName, lastName, doctorRating, showRating, showModal, rates, handleBooking }) => {
  return (
    <div className='description-container'>
      <div className='description-wrapper'>
        <p>{` Dr. ${firstName} ${lastName}`}</p>
        {showRating}
        <span className='rating'>{doctorRating}</span>
        <p onClick={showModal} className='view-profile'>View Profile & Reviews</p>
        <p className='rates'>{`$${rates}/hour`}</p>
        <button className='book-btn' onClick={handleBooking}>Book Now</button>
      </div>
    </div>
  )
}

export default Description

export const FiveStar = () => {
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
export const FourStar = () => {
  return (
    <>
      <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
      <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
      <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
      <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
      <span className='unchecked'><FontAwesomeIcon icon={faStar} /></span>
    </>
  )
}
