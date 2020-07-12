import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const FontAwesomeStyle = {
  color: 'rgb(88, 72, 72)',
  marginLeft: '20px',
  fontSize: '25px'
}
const Appointment = ({ date, time, session, handleCancel, handleJoin }) => {
  return (
    <div className='appointments-container'>
      <div className='appointment-schedule'>
        <div className='fontAwesome'><span><FontAwesomeIcon icon={faCalendarAlt} style={FontAwesomeStyle} /></span>
          <span className='date'>{date}</span>
          <span className='time'>{time}</span>
        </div>
      </div>
      <div className='action-container'>
        <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
        <button className='reschedule-btn'>Reschedule</button>
        <button className='session-btn' onClick={handleJoin}>{session}</button>
      </div>
    </div>
  )
}
