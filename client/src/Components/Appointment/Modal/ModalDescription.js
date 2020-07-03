import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faCheck } from '@fortawesome/free-solid-svg-icons'

export const TopDescription = ({ firstName, lastName, showRating, doctorRating, years }) => {
  return (
    <div className='top-description'>
      <p className='doctor-name'>{`Dr. ${firstName} ${lastName}`}</p>
      {showRating}
      <span className='rating'>{doctorRating}</span>
      <p><span><FontAwesomeIcon icon={faGraduationCap} /></span>
        <span className='top-school'>Top 50 Medical School</span>
      </p>
      <p><span><FontAwesomeIcon icon={faCheck} /></span>
        <span className='years-experience'>{`${years} year(s) experience`}</span>
      </p>
    </div>
  )
}
export const MainDescription = ({ years, education, bio }) => {
  return (
    <div className='main-description'>
      <h4>Qualification and Experience</h4>
      <div className='qualifications-border' />
      <div>
        <h4>Education</h4>
        <p className='summary'>{education}</p>
      </div>
      <div>
        <h4>Professional Summary</h4>
        <p className='summary'>{bio}</p>
      </div>
    </div>
  )
}
