import React from 'react'

const NewsLetter = ({ handleChange, handleSignUp }) => {
  return (
    <div className='newsletter-container'>
      <header className='newsletter-heading'>
        <h1>NewsLetter</h1>
      </header>
      <div className='newsletter-content'>
        <p>Sign up to get promo offers and weekly exclusive healthcare tips! </p>
        <input
          className='news-input'
          placeholder='Your Email Address'
          type='text'
          name='newsletter'
          onChange={handleChange}
        />
        <button className='signUp-btn' onClick={handleSignUp} type='submit'>Sign Up</button>
      </div>
    </div>
  )
}

export default NewsLetter
