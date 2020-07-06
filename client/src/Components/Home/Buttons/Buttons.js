import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const LinkStyle = {
  textDecoration: 'none'
}
export const BookAppointment = () => {
  return (
    <Link to='/bookAppointment' style={LinkStyle}>
      <button className='book-appointment-btn'>Book an Appointment</button>
    </Link>
  )
}

export const OurDoctorsButton = () => {
  return (
    <Link to='/bookAppointment' style={LinkStyle}>
      <button className='ourDoctors-btn'>Our Doctors</button>

    </Link>
  )
}

export const GetStarted = () => {
  return (
    <Link to='/createAccount' style={LinkStyle}>
      <button className='getStarted-btn'>Get Started</button>
    </Link>
  )
}
