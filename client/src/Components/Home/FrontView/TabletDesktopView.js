import React from 'react'
import { BookAppointment } from '../Buttons/Buttons'
import { FrontImage } from '../../../Assets/Images/exports'

const TabletDesktopView = () => {
  return (
    <div className='tabletView' style={{ backgroundImage: `url(${FrontImage})` }}>
      <div className='frontView-content-flex'>
        <h1>Healthcare from the comfort of your house.</h1>
        <div className='frontView-message-flex'>
          <p className='eHealth-message-flex'>At E-Health we provide you with top class mental health treatment
            from the ease of your phone or computer. Talk to our highly experienced psychiatrists
            and get the healthcare you deserve.
          </p>
        </div>
        <div className='frontView-btn-container-flex'>
          <BookAppointment />
        </div>
      </div>
    </div>
  )
}

export default TabletDesktopView
