import React, { useState, useEffect } from 'react'
import Burger from './Burger'
import Heading from './Heading'
import JwtDecode from 'jwt-decode'
import { useHistory } from 'react-router-dom'
import './Styles.scss'
import { UserNotLoggedIn, CustomerLoggedIn, ProviderLoggedIn } from './NavView'

const NavBar = () => {
  /* check if there is a user token to see if the user is signed in */
  const token = window.localStorage
  const userToken = token.getItem('token')

  /* state to hold current user */
  const [currentUser, setCurrentUser] = useState()

  /* if the user is signed in decode the Jwt to get user's information */
  useEffect(() => {
    if (userToken !== null) {
      const user = JwtDecode(userToken)
      setCurrentUser(user)
    } else setCurrentUser(userToken)
  }, [])

  /* toggle drop down menu options */
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

  /* function to logout user and remove the token */
  const history = useHistory()
  const logOutUser = () => {
    if (userToken !== null) {
      token.removeItem('token')
      history.push('/')
      setNavMenu(false)
    }
  }

  return (
    <div className='nav-container'>
      <nav>
        <div className='navigation'>
          <Heading />
          <Burger
            handleDropDown={showNavDropDown}
          />
          <div className='nav-menu' style={{ display: navMenu ? 'block' : 'none' }}>
            {currentUser !== undefined && currentUser !== null
              ? currentUser.role === 'customer'
                ? <CustomerLoggedIn
                  handleDropDown={displayDropDown}
                  showDropDownChoice={dropDownChoice}
                  userName={currentUser.firstName}
                  handleLogout={logOutUser}
                /> : currentUser.role === 'provider'
                  ? <ProviderLoggedIn
                    handleDropDown={displayDropDown}
                    showDropDownChoice={dropDownChoice}
                    userName={currentUser.firstName}
                    handleLogout={logOutUser}
                  />
                  : null
              : <UserNotLoggedIn
                handleDropDown={displayDropDown}
                showDropDownChoice={dropDownChoice}
              />}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
