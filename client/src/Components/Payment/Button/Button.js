import React from 'react'
import './Styles.scss'

const Button = ({ handleAppointment, book }) => {
  return (
    <div className='button-conatainer'>
      <button className='total-btn' onClick={handleAppointment}>{book}</button>
    </div>
  )
}

export default Button
