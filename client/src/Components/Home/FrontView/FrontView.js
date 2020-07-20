import React from 'react'
import { FrontBackground } from '../../../Assets/Images/exports'
import { Link } from 'react-router-dom'
import DesktopTabletView from './DesktopTabletView'
import './Styles.scss'

const FrontView = () => {
  return (
    <div className='frontView-container'>
      <div className='frontView-image'>
        <img className='frontImage' src={FrontBackground} alt='frontImage' />
      </div>
      <DesktopTabletView />
      <div className='frontView-content'>
        <h1>Healthcare from the comfort of your house.</h1>
        <div className='frontView-message'>
          <p className='eHealth-message'>At E-Health we provide you with top class mental health treatment
            from the ease of your phone or computer. Talk to our highly experienced psychiatrists
            and get the healthcare you deserve.
          </p>
        </div>
        <div className='frontView-btn-container'>
          <Link to='/bookAppointment' className='link-container'>
            <button className='book-appointment-btn'>Book Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FrontView
