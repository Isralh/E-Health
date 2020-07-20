import React from 'react'
import { FrontBackground } from '../../../Assets/Images/exports'
import { Link } from 'react-router-dom'

const DesktopTabletView = () => {
  return (
    <div className='tabletDesktopView' style={{ backgroundImage: `url(${FrontBackground})` }}>
      <div className='frontView-content-grid'>
        <h1>Healthcare from the comfort of your house.</h1>
        <div className='frontView-message-grid'>
          <p className='eHealth-message-grid'>At E-Health we provide you with top class mental health treatment
            from the ease of your phone or computer. Talk to our highly experienced psychiatrists
            and get the healthcare you deserve.
          </p>
        </div>
        <div className='frontView-btn-container-grid'>
          <Link to='/bookAppointment' className='link-container'>
            <button className='book-appointment-btn'>Book Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DesktopTabletView
