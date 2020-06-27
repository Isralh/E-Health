import React from 'react'

const Button = ({ subTotal, handleAppointment }) => {
  return (
    <div className='button-conatainer'>
      <button className='total-btn' onClick={handleAppointment}>{subTotal}</button>
    </div>
  )
}

export default Button
