import React from 'react'
import { Link } from 'react-router-dom'

/* Link inline-styling */

const LinkStyle = {
  textDecoration: 'none',
  color: 'rgb(88, 72, 72)'
}

const Form = ({
  emailError, handleChange, email, passwordError, password, handleSubmit,
  handleRegister, handleFocus, loginButton, providerLoginButton
}) => {
  return (
    <div className='login-form-container'>
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
        <div className='loginBtn-customer' style={{ display: loginButton }}>
          <p>New user? <Link to='/createAccount' style={LinkStyle}><span>Register</span></Link></p>
          <button
            onClick={handleSubmit}
            type='submit'
          >Login
          </button>
        </div>
        <div className='loginBtn-provider' style={{ display: providerLoginButton }}>
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
