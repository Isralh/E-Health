import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const FontAwesomeStyle = {
  color: 'rgb(88, 72, 72)',
  marginLeft: '20px',
  fontSize: '25px'
}
const Appointment = ({ date, time }) => {
  return (
    <div className='appointment-container'>
      <div className='heading'>
        <h1>UPCOMING APPOINTMENTS</h1>
      </div>
      <div className='date-time'>
        <div className='appointment-time'><span><FontAwesomeIcon icon={faCalendarAlt} style={FontAwesomeStyle} /></span>
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  )
}

export default Appointment
