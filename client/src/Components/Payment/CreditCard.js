import React from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { SecondStep } from './Headers'

const CreditCard = ({
  handleChange, handleFocus, focusState, CardExpiry, CardCVC,
  cardName, cardNumber, number, name, expiry, cvc
}) => {
  return (
    <div className='creditCard-container'>
      <SecondStep />
      <div>
        <div className='card'>
          <Cards
            number={cardNumber}
            name={cardName}
            cvc={CardCVC}
            expiry={CardExpiry}
            focused={focusState}
            issuer='VISA'
            preview
          />
        </div>
        <form>
          <input
            type='number'
            name='number'
            placeholder='Card Number'
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
            type='number'
            name='expiry'
            placeholder='MM/YY Expiry'
            required
            value={expiry}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          <input
            type='number'
            name='cvc'
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
