import React, { useState, useEffect } from 'react'
import NavBar from '../../NavBar/NavBar'
import Form from '../SharedComponent/Form'
import LoginHeader from '../SharedComponent/LoginHeader'
import { useHistory } from 'react-router-dom'
import LoginCustomer from './Services'
import '../SharedComponent/Styles.scss'
import Footer from '../../Home/Footer/Footer'

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
          token.setItem('token', res.data.token)
          history.push('/customer/dashboard')
        }
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    console.log(formInput)
  }, [formInput])
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
