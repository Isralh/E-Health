import React from 'react'
import './Styles.scss'
const Heading = ({ handleHome }) => {
  return (
    <div className='heading-container'>
      <h1 onClick={handleHome} className='companyName'>E-Health</h1>
    </div>
  )
}
export default Heading
