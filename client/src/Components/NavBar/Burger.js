import React from 'react'
import './Styles.scss'
const Burger = ({ handleDropDown }) => {
  return (
    <div onClick={handleDropDown} className='burger-wrapper'>
      <div />
      <div />
      <div />
    </div>
  )
}

export default Burger
