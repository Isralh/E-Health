import React from 'react'
const Form = ({
  emailError, handleChange, email, passwordError, password, handleSubmit,
  handleRegister, handleFocus
}) => {
  return (
    <div className='form-container'>
      <form className='login-form'>
        <div className='input-wrapper'>
          <p>{emailError}</p>
          <input
            type='text'
            name='email'
            placeholder='Email'
            required
            value={email}
            onChange={handleChange}
            onFocus={handleFocus}
          />
        </div>
        <div className='input-wrapper'>
          <p>{passwordError}</p>
          <input
            type='text'
            name='password'
            placeholder='Password'
            required
            value={password}
            onChange={handleChange}
            onFocus={handleFocus}
          />
        </div>
        <div className='button-container'>
          <p>New user? <span onClick={handleRegister}>Register</span></p>
          <button
            onClick={handleSubmit}
            type='submit'
          >Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
