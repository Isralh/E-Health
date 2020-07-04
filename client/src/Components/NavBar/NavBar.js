import React, { useState } from 'react'
import Burger from './Burger'
import Heading from './Heading'
import './Styles.scss'
import DropDown from './DropDown'
const NavBar = () => {
  const [dropDownView, setDropDownView] = useState('none')
  const [loginDropDownView, setLoginDropDownView] = useState('none')
  const toggleDropDown = () => {
    setDropDownView('flex')
  }
  const toggleLoginDropDown = () => {
    setLoginDropDownView('flex')
  }
  return (
    <div className='nav-container'>
      <nav>
        <div className='default-view'>
          <Heading />
          <Burger
            handleDropDown={toggleDropDown}
          />
        </div>
        <DropDown
          showDropDown={dropDownView}
          handleLoginDropDown={toggleLoginDropDown}
          showLoginDropDown={loginDropDownView}
        />
      </nav>
    </div>
  )
}

export default NavBar
