import React, { useState } from 'react'
import NavBar from '../../Home/NavBar/NavBar'
import Form from '../SharedComponent/Form'
import Heading from '../../Register/Provider/Heading'
import { useHistory } from 'react-router-dom'
import LoginCustomer from './Services'
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
  const submitLogin = (e) => {
    e.preventDefault()
    LoginCustomer(formInput)
      .then(res => {
        if (res.data.message === 'Email account does not exist') {
          setError(prev => { return { ...prev, email: res.data.message } })
        }
        if (res.data.message === 'Incorrect password') {
          setError(prev => { return { ...prev, password: res.data.message } })
        }
        if (res.status === 202) {
          token.setItem('customerToken', res.data.token)
          history.push('/customer/dashboard')
        }
      })
      .catch(e => console.log(e))
  }

  /* go to create account page */
  const history = useHistory()
  const goToRegisterPage = () => {
    history.push('/createAccount')
  }
  return (
    <div className='login-container'>
      <NavBar />
      <div className='login-wrapper'>
        <Heading topHeading='Login' />
        <Form
          handleRegister={goToRegisterPage}
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
