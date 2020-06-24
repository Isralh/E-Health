import React from 'react'

const Form = ({
  firstName, firstNameError, handleChange, lastNameError, lastName, handleSubmit, handleLogin,
  emailError, email, password, passwordError, confirmPassword, confirmPasswordError, submitHeading
}) => {
  return (
    <div className='form-container'>
      <form className='registration-form'>
        <div className='input-wrapper'>
          <p>{firstNameError}</p>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            required
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <p>{lastNameError}</p>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            required
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <p>{emailError}</p>
          <input
            type='text'
            name='email'
            placeholder='E-mail'
            required
            value={email}
            onChange={handleChange}
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
          />
        </div>
        <div className='input-wrapper'>
          <p>{confirmPasswordError}</p>
          <input
            type='text'
            name='confirmPassword'
            placeholder='Confirm Password'
            required
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className='button-container'>
          <p>Existing user? <span onClick={handleLogin}>Login</span></p>
          <button
            onClick={handleSubmit}
            type='submit'
          >{submitHeading}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
