import React from 'react'
import { useHistory } from 'react-router-dom'
import './Styles.scss'

const OurMessage = () => {
  /* check if user is signed in */
  const userToken = window.localStorage.getItem('token')

  /* redirect user to different pages when clicking on Get Started based on login status */
  const history = useHistory()
  const handleGetStarted = () => {
    if (userToken === null) {
      history.push('/createAccount')
    } else history.push('/bookAppointment')
  }

  return (
    <div className='ourMessage-container'>
      <div className='ourMessage-content'>
        <h1>GET THE HEALTHCARE YOU DESERVE</h1>
        <p>At E-Health our aim is to create a special relationship will all our patients by
        taking the time to listen to them and provide them with top of the class healthcare. Our
        psychologists are graduates from the top 50 medical schools with an extensive experience
        providing high quality care to all patients.
        </p>
        <div className='ourMessage-btn'>
          <button className='getStarted-btn' onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default OurMessage
