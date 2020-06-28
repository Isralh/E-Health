import React from 'react'
import './styles.scss'
const DoctorCard = ({ firstName, lastName, rating, doctorsImage, ratingNumber, hourlyRate, showModal }) => {
  return (
    <div className='card-container'>
      <div className='profile-wrapper'>
        <p className='doctor-name'>{`Dr. ${firstName} ${lastName}`}</p>
        <div><span>{rating}</span><span className='numberRating'>{ratingNumber}</span></div>
        <p>{`$${hourlyRate}/ Appointment`}</p>
        <p onClick={showModal} className='view-profile'>View Profile & Review</p>
      </div>
      <div className='image-container' style={{ backgroundImage: `url(${doctorsImage})` }} />
    </div>
  )
}

export default DoctorCard