import React from 'react'
import { Link } from 'react-router-dom'
import './Styles.scss'

const Heading = () => {
  return (
    <div className='heading-container'>
      <Link to='/' className='home-link'><h1 className='companyName'>E-Health</h1></Link>
    </div>
  )
}
export default Heading
