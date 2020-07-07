import React from 'react'
import { OurDoctorsImage } from '../../../Assets/Images/exports'
import { OurDoctorsButton } from '../Buttons/Buttons'
import './Styles.scss'
import TabletDesktopView from './TabletDesktopView'
const OurDoctors = () => {
  return (
    <>
      <div className='ourDoctors-container'>
        <div className='top-message'>
          <h1>Healthcare you deserve</h1>
        </div>
        <div className='ourDoctors-img-container'>
          <img alt='our doctors image' src={OurDoctorsImage} className='ourDoctors-Img' />
        </div>
        <div className='ourDoctors-message'>
          <p>Our doctors are graduates from the top 50 medical schools with an
        extensive experience providing high quality care to all patients. Our
        aim is to create a special relationship with all patients by taking time to listen
        to their problems.
          </p>
          <OurDoctorsButton />
        </div>
      </div>
      <TabletDesktopView />
    </>
  )
}

export default OurDoctors
