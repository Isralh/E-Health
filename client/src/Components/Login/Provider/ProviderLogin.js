import React, { useState } from 'react'
import NavBar from '../../Home/NavBar/NavBar'
import Form from '../SharedComponent/Form'
import LoginProvider from './Services'
import { useHistory } from 'react-router-dom'
import LoginHeader from '../SharedComponent/LoginHeader'

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

  /* function to submit the form and login provider */
  const token = window.localStorage
  const history = useHistory()
  const submitLogin = (e) => {
    e.preventDefault()

    LoginProvider(formInput)
      .then(res => {
        if (res.data.message === 'Email account does not exist') {
          setError(prev => { return { ...prev, email: res.data.message } })
        }
        if (res.data.message === 'Incorrect password') {
          setError(prev => { return { ...prev, password: res.data.message } })
        }
        if (res.status === 202) {
          token.setItem('token', res.data.token)
          history.push('/provider/dashboard')
        }
      })
      .catch(e => console.log(e))
  }

  return (
    <div className='provider-login-container'>
      <NavBar />
      <div className='login-wrapper'>
        <LoginHeader />
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
