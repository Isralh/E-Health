import React, { useState } from 'react'
import NavBar from '../../NavBar/NavBar'
import Form from '../SharedComponent/Form'
import LoginHeader from '../SharedComponent/LoginHeader'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import '../SharedComponent/Styles.scss'

const CustomerLogin = () => {
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

  /* function to submit the form and login customer */
  const token = window.localStorage
  const history = useHistory()
  const submitLogin = async (e) => {
    e.preventDefault()

    const apiUrl = 'https://e-health.work/api/post/login/customers'

    const loginCustomer = await axios.post(apiUrl, formInput)

    try {
      if (loginCustomer.data.message === 'Email account does not exist') {
        setError(prev => { return { ...prev, email: loginCustomer.data.message } })
      } else if (loginCustomer.data.message === 'Incorrect password') {
        setError(prev => { return { ...prev, password: loginCustomer.data.message } })
      } else if (loginCustomer.status === 202) {
        token.setItem('token', loginCustomer.data.token)
        history.push('/customer/dashboard')
      } else if (loginCustomer.status === 500) return history.push('/500')
    } catch (e) {
      return history.push('/500')
    }
  }

  return (
    <div className='login-container'>
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
          loginButton='flex'
          providerLoginButton='none'
        />
      </div>
    </div>
  )
}

export default CustomerLogin
