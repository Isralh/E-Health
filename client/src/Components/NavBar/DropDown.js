import React from 'react'
import { Link } from 'react-router-dom'
import { LinkStyle } from './LinkStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
const DropDown = ({ showNavDropDown, showDropDown, handleDropDown, userStatus, userName, currentUser, handleLogOut }) => {
  const dropDownOptions = ('link', 'options')
  
  return (
    <div className='nav-dropdown' style={{ display: showNavDropDown }}>
      <Link to='/' style={LinkStyle} className='link'>Home</Link>
      <Link to='/bookAppointment' style={LinkStyle} className='link'>Book Appointment</Link>
      {userStatus === null
        ? <>
          <a style={LinkStyle} onClick={handleDropDown} className='link'>Login</a>
          <div className='login-dropdown' style={{ display: showDropDown }}>
            <Link to='/provider/login' style={LinkStyle} className={dropDownOptions}>Provider</Link>
            <Link to='/customer/login' style={LinkStyle} className={dropDownOptions}>Customer</Link>
          </div>
          </>
        : currentUser.role === 'provider'
          ? <>
            <a style={LinkStyle} onClick={handleDropDown} className='link'>{`Welcome ${userName}`} <FontAwesomeIcon icon={faCaretDown} /></a>
            <div className='provider-dropdown' style={{ display: showDropDown }}>
              <Link to='/provider/dashboard' style={LinkStyle} className={dropDownOptions}>Dashboard</Link>
              <Link to='/provider/profile' style={LinkStyle} className={dropDownOptions}>Profile</Link>
              <Link to='/' style={LinkStyle} className={dropDownOptions} onClick={handleLogOut}>LogOut</Link>
            </div>
            </>
          : currentUser.role === 'customer'
            ? <>
              <a style={LinkStyle} onClick={handleDropDown} className='link'>{`Welcome ${userName}`} <FontAwesomeIcon icon={faCaretDown} /></a>
              <div className='customer-dropdown' style={{ display: showDropDown }}>
                <Link to='/customer/dashboard' style={LinkStyle} className={dropDownOptions}>Dashboard</Link>
                <Link to='/customer/profile' style={LinkStyle} className={dropDownOptions}>Profile</Link>
                <Link to='/' style={LinkStyle} className={dropDownOptions} onClick={handleLogOut}>LogOut</Link>
              </div>
            </> : null}
    </div>
  )
}
export default DropDown
