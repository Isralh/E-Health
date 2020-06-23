import React, { useState } from 'react'
import NavBar from '../Home/NavBar/NavBar'
import Form from './Form'
import Heading from '../Register/Provider/Heading'
import { useHistory } from 'react-router-dom'
import './Styles.scss'

const Login = () => {
  /* state to hold all of our form input */
  const [formInput, setFormInput] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState({
    email: '',
    password: ''
  })
  /* on change get user's input and update the formInput state */
  const getUserInput = (e) => {
    const value = e.target.value
    setFormInput(prev => { return { ...prev, [e.target.name]: value } })
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
        />
      </div>
    </div>
  )
}

export default Login
