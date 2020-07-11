import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const LinkStyle = {
  textDecoration: 'none'
}
export const BookAppointment = () => {
  return (
    <Link to='/bookAppointment' style={LinkStyle} className='link-container'>
      <button className='book-appointment-btn'>Book Appointment</button>
    </Link>
  )
}

export const GetStarted = () => {
  return (
    <Link to='/createAccount' style={LinkStyle} className='link-container'>
      <button className='getStarted-btn'>Get Started</button>
    </Link>
  )
}