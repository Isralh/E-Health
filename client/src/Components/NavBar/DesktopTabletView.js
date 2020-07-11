import React from 'react'
import Heading from './Heading'
import { Link } from 'react-router-dom'
import { LinkStyle } from './LinkStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const DesktopTabletView = ({ userStatus, handleDropDown, showDropDown, currentUser, userName, handleLogOut }) => {
  const dropDownOptions = ('link', 'options')

  return (
    <nav className='tabletDesktop-nav'>
      <div className='nav-wrapper'>
        <Heading />
        <div className='menu'>
          <ul>
            <li><Link to='/' style={LinkStyle} className='menu-link'>Home</Link></li>
            <li><Link to='/bookAppointment' style={LinkStyle} className='menu-link'>Book Appointment</Link></li>
            <li><Link to='/createAccount' style={LinkStyle} className='menu-link'>Register</Link></li>
            <li><a className='menu-link' style={LinkStyle}>Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DesktopTabletView
