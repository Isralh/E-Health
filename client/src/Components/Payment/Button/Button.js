import React from 'react'
import './Styles.scss'
const Button = ({ handleAppointment }) => {
  return (
    <div className='button-conatainer'>
      <button className='total-btn' onClick={handleAppointment}>SUBMIT</button>
    </div>
  )
}

export default Button
