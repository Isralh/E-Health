import React from 'react'
import 'react-credit-cards/es/styles-compiled.css'

const CreditCard = ({
  handleChange, handleFocus, expiry, cvc,
  name, number, zip
}) => {
  return (
    <div className='creditCard-container'>
      <div>
        <div className='paymentInfo-container'>
          <h1>Payment Information</h1>
        </div>
        <form className='payment-form'>
          <input
            type='text'
            name='number'
            maxLength={16}
            placeholder='Credit Card Number (16 digits)'
            required
            value={number}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          <input
            type='text'
            name='name'
            placeholder='Card Holder Name'
            required
            value={name}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          <input
            className='expiry'
            type='text'
            name='expiry'
            maxLength={4}
            placeholder='MM/YY Expiry'
            required
            value={expiry}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          <input
            className='security'
            type='text'
            name='cvc'
            maxLength={3}
            placeholder='Security Code'
            required
            value={cvc}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          <input
            type='number'
            name='zip'
            placeholder='Zipcode (Required)'
            required
            value={zip}
            onChange={handleChange}
            onFocus={handleFocus}
          />
        </form>
      </div>
    </div>
  )
}

export default CreditCard
