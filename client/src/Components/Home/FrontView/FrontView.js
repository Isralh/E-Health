import React from 'react'
import { BookAppointment } from '../Buttons/Buttons'
import { FrontImage, FrontBackground } from '../../../Assets/Images/exports'

import './Styles.scss'
import TabletDesktopView from './TabletDesktopView'
import NavBar from '../../NavBar/NavBar'
const FrontView = () => {
  return (
    <div className='frontView-container'>
      <div className='frontView-image'>
        <img className='frontImage' src={FrontBackground} alt='frontImage' />
      </div>
      <TabletDesktopView />
      <div className='frontView-content'>
        <h1>Healthcare from the comfort of your house.</h1>
        <div className='frontView-message'>
          <p className='eHealth-message'>At E-Health we provide you with top class mental health treatment
            from the ease of your phone or computer. Talk to our highly experienced psychiatrists
            and get the healthcare you deserve.
          </p>
        </div>
        <div className='frontView-btn-container'>
          <BookAppointment />
        </div>
      </div>
    </div>
  )
}

export default FrontView
