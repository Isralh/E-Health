import React, { useState } from 'react'
import NavBar from '../../Home/NavBar/NavBar'
import Heading from '../../Register/Provider/Heading'
import Form from '../SharedComponent/Form'
import '../SharedComponent/Styles.scss'

const ProviderLogin = () => {
  /* state to hold all of our form input */
  const [formInput, setFormInput] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState({
    email: '',
    password: ''
  })

  /* onChange get user's input and update the formInput state */
  const getUserInput = (e) => {
    e.persist()
    const value = e.target.value
    setFormInput(prev => { return { ...prev, [e.target.name]: value } })
  }

  /* onFocus clear the input errors */
  const clearErrors = () => {
    setError(prev => { return { ...prev, email: '', password: '' } })
  }

  const submitLogin = () => {

  }

  return (
    <div className='provider-login-container'>
      <NavBar />
      <div className='login-wrapper'>
        <Heading topHeading='Login' />
        <Form
          handleChange={getUserInput}
          email={formInput.email}
          password={formInput.password}
          emailError={error.email}
          passwordError={error.password}
          handleSubmit={submitLogin}
          handleFocus={clearErrors}
          loginButton='none'
          providerLoginButton='flex'
        />
      </div>
    </div>
  )
}

export default ProviderLogin
