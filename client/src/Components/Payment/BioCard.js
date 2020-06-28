import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
const BioCard = ({
  firstName, lastName, rating, ratingNumber, hourlyRate, showModal, doctorsImage, doctorSchedule
}) => {
  return (
    <div className='bioCard-container'>
      <div className='bio-wrapper'>
        <p className='doctor'>{`Dr. ${firstName} ${lastName}`}</p>
        <div><span>{rating}</span><span className='doctorRating'>{ratingNumber}</span></div>
        <p>{`$${hourlyRate}/Appointment`}</p>
        <p onClick={showModal} className='doctorProfile'>View Profile & Review</p>
        <p><span><FontAwesomeIcon icon={faClock} style={{ color: 'rgb(88, 72, 72)' }} /></span><span className='schedule'>{doctorSchedule}</span></p>
      </div>
      <div className='doctorImage' style={{ backgroundImage: `url(${doctorsImage})` }} />
    </div>
  )
}

export default BioCard
