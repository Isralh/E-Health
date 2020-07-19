import React, { useState, useEffect, useRef } from 'react'
import Burger from './Burger'
import Heading from './Heading'
import JwtDecode from 'jwt-decode'
import { useHistory } from 'react-router-dom'
import { UserNotLoggedIn, CustomerLoggedIn, ProviderLoggedIn } from './NavView'
import './Styles.scss'

const NavBar = ({ navContainerClass = 'nav-container' }) => {
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
  const [navMenuClass, setNavMenuClass] = useState('nav-menu')
  const [desktopClass, setDesktopClass] = useState('nav-menu-desktop')
  const [burgerClassName, setBurgerClassName] = useState('burger-wrapper')
  const [dropDownChoice, setDropDownChoice] = useState(false)

  /* on mobile view when click on the burger menu open the nav menu */
  const showNavDropDown = () => {
    if (navMenuClass === 'nav-menu') {
      setNavMenuClass('nav-menu-mobile')
    } else if (navMenuClass === 'nav-menu-mobile') {
      setNavMenuClass('nav-menu')
    }
  }

  /* open menu options on mobile views */
  const displayDropDown = () => {
    setDropDownChoice(!dropDownChoice)
  }

  /* function to logout user and remove the token */
  const history = useHistory()
  const logOutUser = () => {
    if (userToken !== null) {
      if (window.location.pathname === '/') {
        token.removeItem('token')
        window.location.reload()
      } else {
        token.removeItem('token')
        history.push('/')
      }
    }
  }

  /* on click outside close the nav menu options */
  const refMenu = useRef(null)
  useEffect(() => {
    const closeLoginOption = (event) => {
      if (refMenu.current && !refMenu.current.contains(event.target)) {
        if (dropDownChoice === true) {
          setDropDownChoice(!dropDownChoice)
        }
      }
    }

    document.addEventListener('mousedown', closeLoginOption)
    return () => {
      document.removeEventListener('mousedown', closeLoginOption)
    }
  }, [refMenu, dropDownChoice])

  return (
    <nav className={navContainerClass}>
      <div className='navigation'>
        <Heading />
        <Burger
          handleDropDown={showNavDropDown}
          hamburgerClass={burgerClassName}
        />
        <div className={navMenuClass}>
          {currentUser !== undefined && currentUser !== null
            ? currentUser.role === 'customer'
              ? <CustomerLoggedIn
                handleDropDown={displayDropDown}
                showDropDownChoice={dropDownChoice}
                userName={currentUser.firstName}
                handleLogout={logOutUser}
                menuRef={refMenu}
              /> : currentUser.role === 'provider'
                ? <ProviderLoggedIn
                  handleDropDown={displayDropDown}
                  showDropDownChoice={dropDownChoice}
                  userName={currentUser.firstName}
                  handleLogout={logOutUser}
                  menuRef={refMenu}
                />
                : null
            : <UserNotLoggedIn
              handleDropDown={displayDropDown}
              showDropDownChoice={dropDownChoice}
              menuRef={refMenu}
            />}
        </div>
        <div className={desktopClass}>
          {currentUser !== undefined && currentUser !== null
            ? currentUser.role === 'customer'
              ? <CustomerLoggedIn
                handleDropDown={displayDropDown}
                showDropDownChoice={dropDownChoice}
                userName={currentUser.firstName}
                handleLogout={logOutUser}
                menuRef={refMenu}
              /> : currentUser.role === 'provider'
                ? <ProviderLoggedIn
                  handleDropDown={displayDropDown}
                  showDropDownChoice={dropDownChoice}
                  userName={currentUser.firstName}
                  handleLogout={logOutUser}
                  menuRef={refMenu}
                />
                : null
            : <UserNotLoggedIn
              handleDropDown={displayDropDown}
              showDropDownChoice={dropDownChoice}
              menuRef={refMenu}
            />}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
