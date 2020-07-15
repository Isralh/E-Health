import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export const UserNotLoggedIn = ({ handleDropDown, showDropDownChoice }) => {
  return (
    <ul>
      <Link to='/' className='link'><li>Home</li></Link>
      <Link to='/bookAppointment' className='link'><li>Book Appointment</li></Link>
      <Link to='/createAccount' className='link'><li>Register</li></Link>
      <li className='link' onClick={handleDropDown}>Login <FontAwesomeIcon icon={faCaretDown} /></li>
      <div className='dropdown-choice' style={{ display: showDropDownChoice ? 'block' : 'none' }}>
        <Link className='link' to='/customer/login'><li>Customer</li></Link>
        <Link className='link' to='/provider/login'><li>Provider</li></Link>
      </div>
    </ul>
  )
}

export const CustomerLoggedIn = ({ handleDropDown, showDropDownChoice, userName, handleLogout }) => {
  return (
    <>
      <ul>
        <Link to='/' className='link'><li>Home</li></Link>
        <Link to='/bookAppointment' className='link'><li>Book Appointment</li></Link>
        <Link to='/createAccount' className='link'><li>Register</li></Link>
        <li className='link' onClick={handleDropDown}>{`Welcome ${userName}`} <FontAwesomeIcon icon={faCaretDown} /></li>
        <div className='dropdown-choice' style={{ display: showDropDownChoice ? 'block' : 'none' }}>
          <Link className='link' to='/customer/dashboard'><li>Dashboard</li></Link>
          <Link className='link' to='/customer/profile'><li>Profile</li></Link>
          <li className='link' onClick={handleLogout}>logout</li>
        </div>
      </ul>
    </>
  )
}

export const ProviderLoggedIn = ({ handleDropDown, showDropDownChoice, userName, handleLogout }) => {
  return (
    <>
      <ul>
        <Link to='/' className='link'><li>Home</li></Link>
        <Link to='/bookAppointment' className='link'><li>Book Appointment</li></Link>
        <Link to='/createAccount' className='link'><li>Register</li></Link>
        <li className='link' onClick={handleDropDown}>{`Welcome ${userName}`} <FontAwesomeIcon icon={faCaretDown} /></li>
        <div className='dropdown-choice' style={{ display: showDropDownChoice ? 'block' : 'none' }}>
          <Link className='link' to='/provider/dashboard'><li>Dashboard</li></Link>
          <Link className='link' to='/provider/profile'><li>Profile</li></Link>
          <li className='link' onClick={handleLogout}>logout</li>
        </div>
      </ul>
    </>
  )
}
