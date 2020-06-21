import React from 'react'
import Burger from './Burger'
import Heading from './Heading'
import { useHistory } from 'react-router-dom'
import './Styles.scss'
const NavBar = () => {
  const history = useHistory()
  const goToHomePage = () => {
    history.push('/')
  }
  return (
    <nav className='nav-container'>
      <Heading handleHome={goToHomePage} />
      <Burger />
    </nav>
  )
}

export default NavBar
