import React from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { SecondStep } from './Headers'

const CreditCard = ({
  handleChange, handleFocus, focusState, expiry, cvc,
  name, number
}) => {
  return (
    <div className='creditCard-container'>
      <SecondStep />
      <div>
        <div className='card'>
          <Cards
            number={number}
            name={name}
            cvc={cvc}
            expiry={expiry}
            focused={focusState}
            issuer='VISA'
            preview
          />
        </div>
        <form>
          <input
            type='text'
            name='number'
            maxLength={16}
            placeholder='Card Number'
            required
            value={number}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          <input
            type='text'
            name='name'
            maxLength={3}
            placeholder='Card Holder Name'
            required
            value={name}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          <input
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
            type='text'
            name='cvc'
            maxLength={3}
            placeholder='cvc'
            required
            value={cvc}
            onChange={handleChange}
            onFocus={handleFocus}
          />
        </form>
      </div>
    </div>
  )
}

export default CreditCard
