import React from 'react'
import './Styles.scss'
const Button = ({ subTotal, handleAppointment }) => {
  return (
    <div className='button-conatainer'>
      <button className='total-btn' onClick={handleAppointment}>{subTotal}</button>
    </div>
  )
}

export default Button
