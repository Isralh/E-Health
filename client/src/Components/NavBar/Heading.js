import React from 'react'
import { Link } from 'react-router-dom'
import { HomeLinkStyle } from './LinkStyle'
import './Styles.scss'
const Heading = () => {
  return (
    <div className='heading-container'>
      <Link to='/' style={HomeLinkStyle}><h1 className='companyName'>E-Health</h1></Link>
    </div>
  )
}
export default Heading
