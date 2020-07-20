import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Appointment = ({ date, time, session, handleDone, sessionId }) => {
  return (
    <div className='appointments-container'>
      <div className='appointment-schedule'>
        <div className='fontAwesome'><span><FontAwesomeIcon icon={faCalendarAlt} className='calender' /></span>
          <span className='date'>{date}</span>
          <span className='time'>{time}</span>
        </div>
      </div>
      <div className='session-controller'>
        <button className='complete-btn' onClick={handleDone}>Mark as complete</button>
        <Link to={`/session/${sessionId}`} className='session-btn'><p>{session}</p></Link>
      </div>
    </div>
  )
}

export default Appointment
