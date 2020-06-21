import React from 'react'
import Nav from '../../Home/NavBar/NavBar'
import Heading from '../Heading/Heading'
import TopParagraph from '../TopParagraph/TopParagraph'
import Doctors from '../Doctors/Doctors'
import './styles.scss'
const Appointment = () => {
  return (
    <div className='appointment-container'>
      <Nav />
      <Heading />
      <TopParagraph />
      <Doctors />
    </div>
  )
}

export default Appointment
