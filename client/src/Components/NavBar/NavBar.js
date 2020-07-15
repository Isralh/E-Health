import React, { useState, useEffect } from 'react'
import Burger from './Burger'
import Heading from './Heading'
import NavMenu from './NavMenu'
import JwtDecode from 'jwt-decode'
import DesktopTabletView from './DesktopTabletView'
import Nav from './Nav'
import { useHistory } from 'react-router-dom'
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

  useEffect(() => {
    user()
  }, [])

  /* function to get the user's name if user() returns undefined */
  const loggedInUser = () => {
    let userName
    if (user() !== undefined) {
      userName = user().firstName
    }
    return userName
  }

  // const [navDropDown, setNavDropDown] = useState('none')
  // const [dropDownView, setDropDownView] = useState('none')
  // const toggleNavDropDown = () => {
  //   setNavDropDown('flex')
  // }
  // const toggleDropDown = () => {
  //   setDropDownView('flex')
  // }

  /* function to logout user and remove the token */
  const history = useHistory()
  const logOutUser = () => {
    if (userToken !== null) {
      token.removeItem('token')
      history.push('/')
    }
  }

  /* desktop loginOptions */

  const [navMenu, setNavMenu] = useState(false)
  const [dropDownChoice, setDropDownChoice] = useState(false)
  const showNavDropDown = () => {
    setNavMenu(!navMenu)
  }
  const displayDropDown = () => {
    setDropDownChoice(!dropDownChoice)
  }

  useEffect(() => {
    if (navMenu === false) {
      setDropDownChoice(false)
    }
  }, [navMenu])
  return (
    <div className='nav-container'>
      <nav>
        <div className='navigation'>
          <Heading />
          <Burger
            handleDropDown={showNavDropDown}
          />
          <Nav
            showNavMenu={navMenu}
            showDropDownChoice={dropDownChoice}
            handleDropDown={displayDropDown}
            userStatus={userToken}
            currentUser={user()}
            userName={loggedInUser()}
            handleLogout={logOutUser()}
          />
        </div>
      </nav>
    </div>
  )
}

export default NavBar
