import React, { useState, useEffect } from 'react'
import './Styles.scss'
import NavBar from '../../Home/NavBar/NavBar'
import Heading from './Heading'
import { FirstForm, SecondForm } from './Form'
import {
  validateFirstName, validateLastName, validatePassWord,
  validateConfirmPassword, validateErrors, validateResumeFiles, validateImageFiles
} from './errorValidation'
import { s3Uploader, Registeration } from './Services'
const ProviderRegister = () => {
  const [selectedResume, setSelectedResume] = useState()
  const [selectedImage, setSelectedImage] = useState()
  const [fileName, setFileName] = useState({
    resume: '',
    image: ''
  })
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
    rate: '',
    resume: '',
    profilePicture: '',
    isSubmitting: false
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

  // check if there were any errors in the first form submission and set the errors state
  const goToNextForm = () => {
    validateFirstName(formInput.firstName, setErrors)
    validateLastName(formInput.lastName, setErrors)
    validatePassWord(formInput.password, setErrors)
    validateConfirmPassword(formInput.password, formInput.confirmPassword, setErrors)
    formInput.email.length < 3 ? setErrors(prev => { return { ...prev, email: 'Invalide email-address' } }) : setErrors(prev => { return { ...prev, email: null } })
  }

  /* onchange function to get resume file selected then check if it's a correct file type, if not send an alert.
  if it is update the input text for the resume input in the form then set selected resume state to upload the file
  to AWS S3 */
  const imageUpload = (e) => {
    const imageFile = e.target.files[0]
    validateImageFiles(imageFile, setFileName, setSelectedImage)
  }

  /* onchange function to get image file selected then check if it's a correct file type, if not send an alert.
  if it is update the input text for the image input in the form then set selected image state to upload the file
  to AWS S3 */
  const resumeUpload = (e) => {
    const resumeValue = e.target.files[0]
    validateResumeFiles(resumeValue, setFileName, setSelectedResume)
  }

  // go to the previous form section
  const handlePrevious = () => {
    setFirstFormComplete(false)
  }

  // change the formview based on error state changes
  useEffect(() => {
    validateErrors(errors.firstName, errors.lastName, errors.email, errors.password, errors.confirmPassword, setFirstFormComplete)
  }, [errors])

  /* submits the image and resume to the server to be submitted to AWS and update the form inputs for
  the image and resume url with the response we get AWS */
  const submitRegisteration = async (e) => {
    e.preventDefault()
    const fileData = new FormData()
    const data = [selectedImage, selectedResume]
    if (data) {
      for (let i = 0; i < data.length; i++) {
        fileData.append('uploadFiles', data[i], data[i].name)
      }
    }
    s3Uploader(fileData)
      .then(data => {
        setFormInput(prev => { return { ...prev, profilePicture: data[0], resume: data[1], isSubmitting: true } })
      })
      .catch(e => console.log(e))
  }

  /* upload form data to the server after we get response from AWS to set the image and resume url location
  in the form input state */
  useEffect(() => {
    if (formInput.isSubmitting === true) {
      Registeration(formInput)
        .then(data => {
          console.log(data)
          setFormInput(prev => { return { ...prev, isSubmitting: false } })
        }).catch(e => console.log(e))
    }
  }, [formInput.isSubmitting])

  return (
    <div className='container'>
      <NavBar />
      <div className='content-container'>
        <Heading />
        {firstFormComplete
          ? <SecondForm
            handleChange={handleFormInput}
            previousForm={handlePrevious}
            resumeFile={fileName.resume}
            imageFile={fileName.image}
            handleImageUpload={imageUpload}
            handleResumeUpload={resumeUpload}
            handleSubmit={submitRegisteration}
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
