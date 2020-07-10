import React from 'react'
import { Link } from 'react-router-dom'

const LinkStyle = {
  textDecoration: 'none',
  color: 'white'
}
const Links = () => {
  return (
    <div className='links-container'>
      <header className='links-heading'>
        <h1>Useful Links</h1>
      </header>
      <div className='links-content'>
        <p><Link to='/' style={LinkStyle}>Home</Link></p>
        <p><Link to='/bookAppointment' style={LinkStyle}>Book Appointment</Link></p>
        <p><Link to='/customer/login' style={LinkStyle}>Login</Link></p>
        <p><Link to='/createAccount' style={LinkStyle}>Register</Link></p>
      </div>
    </div>
  )
}

export default Links
