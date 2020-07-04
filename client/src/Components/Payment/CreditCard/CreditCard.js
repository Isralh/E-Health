import React from 'react'
import 'react-credit-cards/es/styles-compiled.css'
import './Styles.scss'

const CreditCard = ({
  handleChange, handleFocus, expiry, cvc, expiryError, zipError,
  name, number, zip, cardNumberError, cardNameError, cvcError
}) => {
  return (
    <div className='creditCard-container'>
      <div>
        <form className='payment-form'>
          <div className='input-wrapper'>
            <p className='errors'>{cardNumberError}</p>
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
            <p className='errors'>{cardNameError}</p>
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
            <p className='errors'>{expiryError}</p>
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
            <p className='errors'>{cvcError}</p>
            <input
              className='security'
              type='text'
              name='cvc'
              maxLength={3}
              placeholder='CVC code (3 digits)'
              required
              value={cvc}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </div>
          <div className='input-wrapper'>
            <p className='errors'>{zipError}</p>
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
