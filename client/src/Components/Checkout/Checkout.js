import React from 'react'
import NavBar from '../Home/NavBar/NavBar'
const Checkout = () => {
  const doctorChoice = window.localStorage
  const data = doctorChoice.getItem('doctor')
  console.log(data)
  return (
    <div className='checkout-container'>
      <NavBar />
    </div>
  )
}

export default Checkout
