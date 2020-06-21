import React from 'react'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Description = ({ firstName, lastName, doctorRating, showRating, showModal, flexPercentage }) => {
  return (
    <div className='description-container' style={{ flexBasis: flexPercentage }}>
      <p>{` Dr. ${firstName} ${lastName}`}</p>
      {showRating}
      <span className='rating'>{doctorRating}</span>
      <p onClick={showModal} className='view-profile'>View Profile & Reviews</p>
      <button className='book-btn'>Book</button>
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
