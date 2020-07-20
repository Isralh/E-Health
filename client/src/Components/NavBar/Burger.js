import React from 'react'
import './Styles.scss'

const Burger = ({ handleDropDown, hamburgerClass }) => {
  return (
    <div onClick={handleDropDown} className={hamburgerClass}>
      <div />
      <div />
      <div />
    </div>
  )
}

export default Burger
