import React from 'react'
import { GetStarted } from '../Buttons/Buttons'
import './Styles.scss'

const OurMessage = () => {
  return (
    <div className='ourMessage-container'>
      <div className='ourMessage-content'>
        <h1>Get the healthcare you deserve</h1>
        <p>At E-Health our aim is to create a special relationship will all our patients by
        taking the time to listen to them and provide them with top of the class healthcare. Our
        psychologists are graduates from the top 50 medical schools with an extensive experience
        providing high quality care to all patients.
        </p>
        <div className='ourMessage-btn'>
          <GetStarted />
        </div>
      </div>
    </div>
  )
}

export default OurMessage
