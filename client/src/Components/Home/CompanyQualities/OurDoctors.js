import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd } from '@fortawesome/free-solid-svg-icons'
import './Styles.scss'

const FontAwesomeIconStyle = {
  fontSize: '30px',
  color: 'white',
  textAlign: 'center',
  margin: '8px 0px 0px 2px'
}
const OurDoctors = () => {
  return (
    <div className='companyDoctor-container'>
      <div className='fontAwesome-container'>
        <FontAwesomeIcon icon={faUserMd} style={FontAwesomeIconStyle} />
      </div>
      <div className='companyDoctor-message'>
        <h1>The Best Doctors</h1>
        <p>Our doctors are some of the best in their profession and seek to provide the best
           treatment for all visitors. An appointment with our doctors are always unrushed and we do our
            best to provide the best service.
        </p>
      </div>
    </div>
  )
}

export default OurDoctors
