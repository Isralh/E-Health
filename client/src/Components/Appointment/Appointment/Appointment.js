import React from 'react'
import NavBar from '../../NavBar/NavBar'
import TopContent from '../TopContent/TopContent'
import Doctors from '../Doctors/Doctors'
import Footer from '../../Home/Footer/Footer'
import './styles.scss'

const Appointment = () => {
  return (
    <div className='appointment-container'>
      <NavBar
        navContainerClass='nav-container-underlined'
      />
      <TopContent />
      <Doctors />
      <Footer />
    </div>

  )
}

export default Appointment
