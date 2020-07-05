import React, { useRef } from 'react'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Description = ({ firstName, lastName, doctorRating, showRating, showModal, rates, handleBooking, handleDoctorInfo }) => {
  return (
    <div className='description-container'>
      <div className='description-wrapper' onClick={handleDoctorInfo}>
        <p className='doctor-name'>{` Dr. ${firstName} ${lastName}`}</p>
        {showRating}
        <span className='rating'>{doctorRating}</span>
        <p onClick={showModal} className='view-profile'>View Profile & Reviews</p>
        <p className='rates'>{`$${rates}/ Appointment`}</p>
        <button className='book-btn' onClick={handleBooking}>Book Now</button>
      </div>
    </div>
  )
}

export default Description

// export const DoctorRating = (rating) => {
//   if (rating === 5) {
//     return (
//       <>
//         <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
//         <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
//         <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
//         <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
//         <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
//       </>
//     )
//   }
// }
// export const FourStar = () => {
//   return (
//     <>
//       <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
//       <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
//       <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
//       <span className='checked'><FontAwesomeIcon icon={faStar} /></span>
//       <span className='unchecked'><FontAwesomeIcon icon={faStar} /></span>
//     </>
//   )
// }
