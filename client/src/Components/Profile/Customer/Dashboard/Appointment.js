import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { JoinSession } from './Button'

const FontAwesomeStyle = {
  color: 'rgb(88, 72, 72)',
  marginLeft: '20px',
  fontSize: '25px'
}
const Appointment = ({ date, time }) => {
  return (
    <div className='appointments-container'>
      <div className='heading'>
        <h1>UPCOMING APPOINTMENT(S)</h1>
      </div>
      <div className='appointment-schedule'>
        <div className='fontAwesome'><span><FontAwesomeIcon icon={faCalendarAlt} style={FontAwesomeStyle} /></span>
          <span className='date'>{date}</span>
          <span className='time'>{time}</span>
        </div>
        <JoinSession />
      </div>
    </div>
  )
}

export default Appointment
