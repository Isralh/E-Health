import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd, faVideo, faStopwatch, faSmile } from '@fortawesome/free-solid-svg-icons'
import './Styles.scss'

const FontAwesomeDoctors = {
  fontSize: '30px',
  color: 'white',
  margin: '10px 0px 0px 2px'
}

const FontAwesomeWatch = {
  fontSize: '30px',
  color: 'white',
  margin: '10px 0px 0px 2px'
}

const FontAwesomeVideo = {
  fontSize: '25px',
  color: 'white',
  margin: '13px 0px 0px 2px'
}

const FontAwesomeSmile = {
  fontSize: '30px',
  color: 'white',
  margin: '12px 0px 0px 2px'
}
const Qualities = () => {
  return (
    <>
      <div className='companyDoctor-container'>
        <div className='fontAwesome-container'>
          <FontAwesomeIcon icon={faUserMd} style={FontAwesomeDoctors} />
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
          <FontAwesomeIcon icon={faStopwatch} style={FontAwesomeWatch} />
        </div>
        <div className='quality-message'>
          <h1>Convenient</h1>
          <p>Our doctors are some of the best in their profession and seek to provide the best
       treatment for all visitors. An appointment with our doctors are always unrushed and we do our
        best to provide the best service.
          </p>
        </div>
      </div>
      <div className='videoChat-container'>
        <div className='fontAwesome-container'>
          <FontAwesomeIcon icon={faVideo} style={FontAwesomeVideo} />
        </div>
        <div className='quality-message'>
          <h1>Video Chat</h1>
          <p>Our doctors are some of the best in their profession and seek to provide the best
       treatment for all visitors. An appointment with our doctors are always unrushed and we do our
        best to provide the best service.
          </p>
        </div>
      </div>
      <div className='qualityService-container'>
        <div className='fontAwesome-container'>
          <FontAwesomeIcon icon={faSmile} style={FontAwesomeSmile} />
        </div>
        <div className='quality-message'>
          <h1>Quality Service</h1>
          <p>Our doctors are some of the best in their profession and seek to provide the best
       treatment for all visitors. An appointment with our doctors are always unrushed and we do our
        best to provide the best service.
          </p>
        </div>
      </div>
    </>
  )
}

export default Qualities
