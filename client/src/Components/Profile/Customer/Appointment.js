import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const Appointment = ({ date, time, session, handleCancel, handleJoin, handleReschedule }) => {
  return (
    <div className='appointments-container'>
      <div className='appointment-schedule'>
        <div className='fontAwesome'><span><FontAwesomeIcon icon={faCalendarAlt} className='calender' /></span>
          <span className='date'>{date}</span>
          <span className='time'>{time}</span>
        </div>
      </div>
      <div className='action-container'>
        <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
        <button className='reschedule-btn' onClick={handleReschedule}>Reschedule</button>
        <button className='session-btn' onClick={handleJoin}>{session}</button>
      </div>
    </div>
  )
}

export default Appointment
