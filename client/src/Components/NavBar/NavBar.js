import React, { useState } from 'react'
import Burger from './Burger'
import Heading from './Heading'
import NavMenu from './NavMenu'
import JwtDecode from 'jwt-decode'
import DesktopTabletView from './DesktopTabletView'
import './Styles.scss'

const NavBar = () => {
  /* check if there is a user token to see if the user is signed in */
  const token = window.localStorage
  const userToken = token.getItem('token')

  /* if the user is signed in decode the Jwt to get user's information */
  const user = () => {
    let currentUser
    if (userToken !== null) {
      currentUser = JwtDecode(userToken)
    }
    return currentUser
  }

  /* function to get the user's name if user() returns undefined */
  const loggedInUser = () => {
    let userName
    if (user() !== undefined) {
      userName = user().firstName
    }
    return userName
  }

  const [navDropDown, setNavDropDown] = useState('none')
  const [dropDownView, setDropDownView] = useState('none')
  const toggleNavDropDown = () => {
    setNavDropDown('flex')
  }
  const toggleDropDown = () => {
    setDropDownView('flex')
  }

  /* function to logout user and remove the token */
  const logOutUser = () => {
    if (userToken !== null) {
      token.removeItem('token')
    }
  }

  return (
    <div className='nav-container'>
      <nav>
        <div className='mobile-view'>
          <Heading />
          <Burger
            handleDropDown={toggleNavDropDown}
          />
        </div>
        <NavMenu
          showNavDropDown={navDropDown}
          handleDropDown={toggleDropDown}
          showDropDown={dropDownView}
          userStatus={userToken}
          currentUser={user()}
          userName={loggedInUser()}
          handleLogOut={logOutUser}
        />
      </nav>
      <DesktopTabletView
        userStatus={userToken}
        currentUser={user()}
        userName={loggedInUser()}
        handleLogOut={logOutUser}
      />
    </div>
  )
}

export default NavBar
