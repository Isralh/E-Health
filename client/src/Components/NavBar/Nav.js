import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
const Navigation = ({ showNavMenu, showDropDownChoice, userStatus, currentUser, handleDropDown, userName, handleLogout }) => {
  /* if user is not logged in show this view */
  const userNotLoggedIn = () => {
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

  const customerLoggedIn = () => {
    return (
      <ul>
        <Link to='/' className='link'><li>Home</li></Link>
        <Link to='/bookAppointment' className='link'><li>Book Appointment</li></Link>
        <Link to='/createAccount' className='link'><li>Register</li></Link>
        <li className='link' onClick={handleDropDown}>{`Welcome ${userName}`} <FontAwesomeIcon icon={faCaretDown} /></li>
        <div className='dropdown-choice' style={{ display: showDropDownChoice ? 'block' : 'none' }}>
          <Link className='link' to='/customer/dashboard'><li>Dashboard</li></Link>
          <Link className='link' to='/customer/profile'><li>Profile</li></Link>
          <Link className='link' to='/customer/profile' onClick={handleLogout}><li>Logout</li></Link>
        </div>
      </ul>
    )
  }

  // const view = () => {
  //   if (userStatus === null) {
  //     return (
  //       userNotLoggedIn()

  //     )
  //   } else if (currentUser.role === 'customer') {
  //     return customerLoggedIn()
  //   }
  // }
  return (
    <div className='nav-menu' style={{ display: showNavMenu ? 'block' : 'none' }}>
      {userStatus === null ? userNotLoggedIn()
        : currentUser.role === 'customer' ? customerLoggedIn() : null}
    </div>
  )
}

export default Navigation
