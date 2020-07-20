import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './Styles.scss'

const Burger = ({ handleDropDown, hamburgerClass, closeClass, handleDefaultmenu }) => {
  return (
    <>
      <div onClick={handleDropDown} className={hamburgerClass}>
        <div />
        <div />
        <div />
      </div>
      <FontAwesomeIcon className={closeClass} icon={faTimes} onClick={handleDefaultmenu} />
    </>
  )
}

export default Burger
