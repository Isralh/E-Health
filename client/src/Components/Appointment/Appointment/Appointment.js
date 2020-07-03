import React from 'react'
import Nav from '../../Home/NavBar/NavBar'
import TopContent from '../TopContent/TopContent'
import Doctors from '../Doctors/Doctors'
import './styles.scss'

const Appointment = () => {
  return (
    <div className='appointment-container'>
      <Nav />
      <TopContent />
      <Doctors />
    </div>

  )
}

export default Appointment
