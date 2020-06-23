import React from 'react'
import NavBar from '../Home/NavBar/NavBar'
import Form from './Form'
import Heading from '../Register/Provider/Heading'
import { useHistory } from 'react-router-dom'
import './Styles.scss'

const Login = () => {
  /* go to create account page */
  const history = useHistory()
  const goToRegisterPage = () => {
    history.push('/createAccount')
  }
  return (
    <div className='login-container'>
      <NavBar />
      <Heading topHeading='Login' />
      <div className='login-wrapper'>
        <Form
          handleRegister={goToRegisterPage}
        />
      </div>
    </div>
  )
}

export default Login
