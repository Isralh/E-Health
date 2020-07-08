import React from 'react'
import { ErickKnight, ZachSmith } from '../../../Assets/Images/exports'
import './Styles.scss'
import { BookAppointment } from '../Buttons/Buttons'
const OurDoctors = () => {
  return (
    <div className='ourDoctors-container'>
      <div className='OurDoctors-heading'>
        <h1>Our experienced doctors</h1>
      </div>
      <div className='ourDoctors-list'>
        <div className='ourDoctors'>
          <img src={ErickKnight} alt='ErickKnight' className='docImg' />
          <p className='name'>Dr. Erick Knight</p>
          <p className='reviews'>View Profile & Reviews</p>
          <BookAppointment />
        </div>
        <div className='ourDoctors'>
          <img src={ZachSmith} alt='ErickKnight' className='docImg' />
          <p className='name'>Dr. Erick Knight</p>
          <p className='reviews'>View Profile & Reviews</p>
          <BookAppointment />
        </div>
      </div>
    </div>
  )
}

export default OurDoctors
