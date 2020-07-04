import React from 'react'
import './Styles.scss'
const BioCard = ({
  firstName, lastName, rating, ratingNumber, hourlyRate, showModal, doctorsImage
}) => {
  return (
    <div className='bioCard-container'>
      <div className='bio-wrapper'>
        <p className='doctor-name'>{`Dr. ${firstName} ${lastName}`}</p>
        <div><span>{rating}</span><span className='doctorRating'>{ratingNumber}</span></div>
        <p onClick={showModal} className='doctorProfile'>View Profile & Review</p>
        <p className='appointment-rate'>{`$${hourlyRate}/Appointment`}</p>
      </div>
      <div className='doctorImage' style={{ backgroundImage: `url(${doctorsImage})` }} />
    </div>
  )
}

export default BioCard
