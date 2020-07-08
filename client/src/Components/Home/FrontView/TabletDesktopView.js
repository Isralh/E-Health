import React from 'react'
import { BookAppointment } from '../Buttons/Buttons'
import { FrontImage, FrontBackground } from '../../../Assets/Images/exports'

const TabletDesktopView = () => {
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
          <BookAppointment />
        </div>
      </div>
    </div>
  )
}

export default TabletDesktopView
{ /* <div className='tabletView' style={{ backgroundImage: `url(${FrontImage})` }}> */ }
