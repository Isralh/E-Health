import React from 'react'
import { Link } from 'react-router-dom'
import { LinkStyle } from './LinkStyle'
const DropDown = ({ showDropDown, showLoginDropDown, handleLoginDropDown }) => {
  return (
    <div className='nav-dropdown' style={{ display: showDropDown }}>
      <Link to='/' style={LinkStyle} className='link'>Home</Link>
      <Link to='/bookAppointment' style={LinkStyle} className='link'>Book Appointment</Link>
      <Link style={LinkStyle} onClick={handleLoginDropDown} className='link'>Login</Link>
      <div className='login-dropdown' style={{ display: showLoginDropDown }}>
        <Link to='/provider/login' style={LinkStyle} className='link'>Provider</Link>
        <Link to='/customer/login' style={LinkStyle} className='link'>Customer</Link>
      </div>
    </div>
  )
}

export default DropDown
