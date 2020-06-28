import React from 'react'
import 'react-credit-cards/es/styles-compiled.css'

const CreditCard = ({
  handleChange, handleFocus, expiry, cvc, expiryError, zipcodeError,
  name, number, zip, cardNumberError, cardNameError, securityError
}) => {
  return (
    <div className='creditCard-container'>
      <div>
        {/*  <div className='paymentInfo-container'>
          <h1>Payment Information</h1>
        </div>
        <div className='appointment-setter'>
          <AppointmentDate />
          <AppointmentTime />
        </div> */}
        <form className='payment-form'>
          <div className='input-wrapper'>
            <p>{cardNumberError}</p>
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
          </div>
          <div className='input-wrapper'>
            <p>{cardNameError}</p>
            <input
              type='text'
              name='name'
              placeholder='Card Holder Name'
              required
              value={name}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </div>
          <div className='input-wrapper'>
            <p>{expiryError}</p>
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
          </div>
          <div className='input-wrapper'>
            <p>{securityError}</p>
            <input
              className='security'
              type='text'
              name='cvc'
              maxLength={3}
              placeholder='CVV code (3 digits)'
              required
              value={cvc}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </div>
          <div className='input-wrapper'>
            <p>{zipcodeError}</p>
            <input
              type='number'
              name='zip'
              placeholder='Zipcode (Required)'
              required
              value={zip}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreditCard
