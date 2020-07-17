import React from 'react'
import './styles.scss'
const Description = ({ firstName, lastName, doctorRating, showRating, showModal, rates, handleBooking, handleDoctorInfo }) => {
  return (
    <div className='description-container'>
      <div className='description-wrapper' onClick={handleDoctorInfo}>
        <p className='doctor-name'>{` Dr. ${firstName} ${lastName}`}</p>
        {showRating}
        <span className='rating'>{doctorRating}</span>
        <p onClick={showModal} className='view-profile'>View doctor's profile</p>
        <p className='rates'>{`$${rates}/ Appointment`}</p>
        <button className='book-btn' onClick={handleBooking}>Book Now</button>
      </div>
    </div>
  )
}

export default Description
