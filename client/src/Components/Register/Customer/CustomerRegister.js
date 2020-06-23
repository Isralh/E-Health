import React, { useState, useEffect } from 'react'
import NavBar from '../../Home/NavBar/NavBar'
import Heading from '../Provider/Heading'
import Form from './Form'
import { validateFirstName, validateLastName, validatePassWord, validateConfirmPassword, validateEmail } from '../ErrorValidation/ErrorValidation'
import RegistrationServices from './RegistrationServices'
import { useHistory } from 'react-router-dom'
import './Styles.scss'
const CustomerRegister = () => {
  /* state to hold all of our form inputs and disables/enables the submit button based on correct form
  inputs */
  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  /* state to hold all of errors during the form submission process */
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: ' ',
    email: '',
    password: '',
    confirmPassword: ''
  })

  /* function to get all of our input values on change and updated the form input state */
  const getFormInput = (e) => {
    e.persist()
    const value = e.target.value
    setFormInput(prev => { return { ...prev, [e.target.name]: value } })
  }

  /* on initial form submit confirm/validate all the inputs are correct */
  const validateForm = (e) => {
    e.preventDefault()
    validateFirstName(formInput.firstName, setErrors)
    validateLastName(formInput.lastName, setErrors)
    validateEmail(formInput.email, setErrors)
    validatePassWord(formInput.password, setErrors)
    validateConfirmPassword(formInput.password, formInput.confirmPassword, setErrors)
  }

  /* submit the form if there are no errors in the input error state */
  const submitForm = async () => {
    if (!errors.firstName && !errors.lastName && !errors.email && !errors.password && !errors.confirmPassword) {
      const response = await RegistrationServices(formInput)
      try {
        console.log(response.status)
        if (response.status === 200) return window.alert(response.data.message)
        if (response.status === 201) return window.alert(response.data.message)
      } catch (e) {
        console.log(e)
      }
    }
  }

  useEffect(() => {
    submitForm()
  }, [errors])

  const history = useHistory()
  /* go to the login page */
  const goToLoginPage = () => {
    history.push('/login')
  }

  return (
    <div className='registration-container'>
      <NavBar />
      <div className='registration-wrapper'>
        <Heading topHeading='Create an Account' />
        <Form
          handleChange={getFormInput}
          firstName={formInput.firstName}
          lastName={formInput.lastName}
          email={formInput.email}
          password={formInput.password}
          confirmPassword={formInput.confirmPassword}
          firstNameError={errors.firstName}
          lastNameError={errors.lastName}
          emailError={errors.email}
          passwordError={errors.password}
          confirmPasswordError={errors.confirmPassword}
          handleSubmit={validateForm}
          handleLogin={goToLoginPage}
        />
      </div>
    </div>
  )
}

export default CustomerRegister
