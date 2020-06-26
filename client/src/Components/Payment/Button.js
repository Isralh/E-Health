import React from 'react'

const Button = ({ subTotal }) => {
  return (
    <div className='button-conatainer'>
      <button className='total-btn'>{subTotal}</button>
    </div>
  )
}

export default Button
