import React, { useState, useEffect } from 'react'
import './Styles.scss'
import NavBar from '../../Home/NavBar/NavBar'
import Heading from './Heading'
import { FirstForm, SecondForm } from './Form'
import { validateFirstName, validateLastName, validatePassWord, validateConfirmPassword, validateErrors } from './Helpers'
const ProviderRegister = () => {
  // forminput state for the registration page
  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    education: '',
    experience: '',
    summary: '',
    resume: '',
    profilePicture: ''
  })

  // input errors state for the registration
  const [errors, setErrors] = useState({
    firstName: ' ',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    education: '',
    experience: '',
    summary: '',
    resume: '',
    profilePicture: ''
  })

  // toggle between first and second form based on completion and error handling
  const [firstFormComplete, setFirstFormComplete] = useState(false)

  // get input values onChange and update our form state
  const handleFormInput = (e) => {
    e.persist()
    const value = e.target.value.trim()
    setFormInput(prev => { return { ...prev, [e.target.name]: value } })
  }

  // go to the previous form section
  const handlePrevious = () => {
    setFirstFormComplete(false)
  }

  // check if there were any errors in the first form submission and set the errors state
  const goToNextForm = () => {
    validateFirstName(formInput.firstName, setErrors)
    validateLastName(formInput.lastName, setErrors)
    validatePassWord(formInput.password, setErrors)
    validateConfirmPassword(formInput.confirmPassword, setErrors)
    formInput.email.length < 3 ? setErrors(prev => { return { ...prev, email: 'Passwords must match' } }) : setErrors(prev => { return { ...prev, email: null } })
  }

  // change the formview based on error state changes
  useEffect(() => {
    validateErrors(errors.firstName, errors.lastName, errors.email, errors.password, errors.confirmPassword, setFirstFormComplete)
  }, [errors])

  useEffect(() => {
    console.log(errors)
    console.log(formInput)
  }, [formInput, errors])
  return (
    <div className='container'>
      <NavBar />
      <div className='content-container'>
        <Heading data-testid='top-heading' />
        {firstFormComplete
          ? <SecondForm
            handleChange={handleFormInput}
            previousForm={handlePrevious}
          />
          : <FirstForm
            firstName={formInput.firstName}
            lastName={formInput.lastName}
            email={formInput.email}
            password={formInput.password}
            confirmPassword={formInput.confirmPassword}
            handleChange={handleFormInput}
            handleNext={goToNextForm}
            firstNameError={errors.firstName}
            lastNameError={errors.lastName}
            emailError={errors.email}
            passwordError={errors.password}
            confirmPasswordError={errors.confirmPassword}
          />}
      </div>
    </div>
  )
}
export default ProviderRegister
