import React from 'react'
import Nav from '../../Home/NavBar/NavBar'
import TopParagraph from '../TopParagraph/TopParagraph'
import Doctors from '../Doctors/Doctors'
import './styles.scss'

const Appointment = () => {
  return (
    <div className='appointment-container'>
      <Nav />
      <TopParagraph />
      <Doctors />
    </div>

  )
}

export default Appointment
