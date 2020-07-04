import React from 'react'
import { Link } from 'react-router-dom'
import { LinkStyle } from './LinkStyle'
const DropDown = ({ showDropDown, showLoginDropDown, handleLoginDropDown }) => {

  const loginClassName = ('link', 'logins')
  return (
    <div className='nav-dropdown' style={{ display: showDropDown }}>
      <Link to='/' style={LinkStyle} className='link'>Home</Link>
      <Link to='/bookAppointment' style={LinkStyle} className='link'>Book Appointment</Link>
      <a style={LinkStyle} onClick={handleLoginDropDown} className='link'>Login</a>
      <div className='login-dropdown' style={{ display: showLoginDropDown }}>
        <Link to='/provider/login' style={LinkStyle} className={loginClassName}>Provider</Link>
        <Link to='/customer/login' style={LinkStyle} className={loginClassName}>Customer</Link>
      </div>
    </div>
  )
}

export default DropDown
