import React from 'react'
import Burger from './Burger'
import Heading from './Heading'

import './Styles.scss'
const NavBar = () => {
  return (
    <nav className='nav-container' data-testid='navBar'>
      <Heading />
      <Burger />
    </nav>
  )
}

export default NavBar
