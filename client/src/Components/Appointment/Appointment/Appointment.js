import React from 'react'
import Nav from '../../NavBar/NavBar'
import TopContent from '../TopContent/TopContent'
import Doctors from '../Doctors/Doctors'
import Footer from '../../Home/Footer/Footer'
import './styles.scss'

const Appointment = () => {
  return (
    <div className='appointment-container'>
      <Nav />
      <TopContent />
      <Doctors />
      <Footer />
    </div>

  )
}

export default Appointment
