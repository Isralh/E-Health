import React from 'react'
import NavBar from '../NavBar/NavBar'
import CustomerRegister from '../Register/Customer/CustomerRegister'

const Checkout = () => {
  return (
    <div className='checkout-container'>
      <NavBar
        navContainerClass='nav-container-underlined'
      />
      <div className='content-wrapper'>
        <CustomerRegister
          displayNavBar='none'
          historyPush='/payment'
          submitType='Continue'
        />
      </div>
    </div>
  )
}

export default Checkout
