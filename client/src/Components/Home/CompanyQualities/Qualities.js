import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd, faVideo, faStopwatch, faSmile } from '@fortawesome/free-solid-svg-icons'
import './Styles.scss'

const Qualities = () => {
  return (
    <>
      <div className='companyDoctor-container'>
        <div className='fontAwesome-container'>
          <FontAwesomeIcon icon={faUserMd} className='fontawesome-doctors' />
        </div>
        <div className='quality-message'>
          <h1>The Best Doctors</h1>
          <p>Our doctors are some of the best in their profession and seek to provide the best
           treatment for all visitors. An appointment with our doctors are always unrushed and we do our
            best to provide the best service.
          </p>
        </div>
      </div>
      <div className='convenient-container'>
        <div className='fontAwesome-container'>
          <FontAwesomeIcon icon={faStopwatch} className='fontawesome-watch' />
        </div>
        <div className='quality-message'>
          <h1>Convenient</h1>
          <p>Book an appointment that fits your schedule and chat with our doctors with smartphone or laptop
        from the comfort of your home. E-health let's you reschedule appointments with just a click of a
        button, no extra charges.
          </p>
        </div>
      </div>
      <div className='videoChat-container'>
        <div className='fontAwesome-container'>
          <FontAwesomeIcon icon={faVideo} className='fontawesome-video' />
        </div>
        <div className='quality-message'>
          <h1>Video Chat</h1>
          <p>Our high quality video chat system let's our patients communicate with their doctor without any
        issues and we strive to give our patients the feeling of being in the doctor's office. At E-health
        we're changing the way how the health industry works.
          </p>
        </div>
      </div>
      <div className='qualityService-container'>
        <div className='fontAwesome-container'>
          <FontAwesomeIcon icon={faSmile} className='fontawesome-smile' />
        </div>
        <div className='quality-message'>
          <h1>Quality Service</h1>
          <p>Our mission is to provider quality services to our patients and reading through our testimonial
        section from our clients you will see why E-health is a quality care provider for emotional,
        behavioral, and mental disorder.
          </p>
        </div>
      </div>
    </>
  )
}

export default Qualities
