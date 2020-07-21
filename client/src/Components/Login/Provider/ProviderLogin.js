import React, { useState } from 'react'
import NavBar from '../../NavBar/NavBar'
import Form from '../SharedComponent/Form'
import { useHistory } from 'react-router-dom'
import LoginHeader from '../SharedComponent/LoginHeader'
import axios from 'axios'

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
  const submitLogin = async (e) => {
    e.preventDefault()
    const apiUrl = 'http://localhost:3002/api/post/login/provider'

    const loginProvider = await axios.post(apiUrl, formInput)

    try {
      if (loginProvider.data.message === 'Email account does not exist') {
        setError(prev => { return { ...prev, email: loginProvider.data.message } })
      } else if (loginProvider.data.message === 'Incorrect password') {
        setError(prev => { return { ...prev, password: loginProvider.data.message } })
      } else if (loginProvider.status === 202) {
        token.setItem('token', loginProvider.data.token)
        history.push('/provider/dashboard')
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='provider-login-container'>
      <NavBar
        navContainerClass='nav-container-underlined'
      />
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
