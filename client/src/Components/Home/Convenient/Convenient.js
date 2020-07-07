import React from 'react'
import { ConvenientImage } from '../../../Assets/Images/exports'
import { GetStarted } from '../Buttons/Buttons'
import './Styles.scss'

const Convenient = () => {
  return (
    <div className='convenient-container'>
      <div className='convenient-image'>
        <img src={ConvenientImage} className='convenientImg' alt='iphoneDoctor-image' />
      </div>
      <div className='message-wrapper'>
        <div className='top-message '>
          <h1>Care with a press of a button</h1>
        </div>
        <div className='convenient-message'>
          <p>Our doctors are available on your schedule. Book an appointment
        and with just a press of a button chat via video with our doctors and get the mental health
        treatment your seeking.
          </p>
        </div>
        <div className='tabletView-btn-container'>
          <GetStarted />
        </div>
      </div>
    </div>
  )
}

export default Convenient
