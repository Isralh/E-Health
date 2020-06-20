import React, { useState, useEffect } from 'react'
import './Styles.scss'
import NavBar from '../../Home/NavBar/NavBar'
import Heading from './Heading'
import { FirstForm, SecondForm } from './Form'
import {
  validateFirstName, validateLastName, validatePassWord, validateResume, validateSecondForm,
  validateConfirmPassword, validateFirstForm, validateResumeFiles, validateImageFiles,
  validateEducation, validateExperience, validateSummary, validateRates, validateImages
} from './errorValidation'
import { s3Uploader, Registration } from './Services'
const ProviderRegister = () => {
  const [selectedResume, setSelectedResume] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState({
    aws: false,
    server: false
  })
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
    summary: ' ',
    rate: '',
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
    experience: ' ',
    summary: '',
    resume: ' ',
    rate: '',
    profilePicture: ' '
  })

  // toggle between first and second form based on completion and error handling
  const [firstFormComplete, setFirstFormComplete] = useState(false)

  // get input values onChange and update our form state
  const handleFormInput = (e) => {
    e.persist()
    const value = e.target.value
    setFormInput(prev => { return { ...prev, [e.target.name]: value } })
  }

  // check if there were any errors in the first form submission and set the errors state
  const goToNextForm = () => {
    validateFirstName(formInput.firstName, setErrors)
    validateLastName(formInput.lastName, setErrors)
    validatePassWord(formInput.password, setErrors)
    validateConfirmPassword(formInput.password, formInput.confirmPassword, setErrors)
    formInput.email.length < 3 ? setErrors(prev => { return { ...prev, email: 'Invalid email-address' } }) : setErrors(prev => { return { ...prev, email: null } })
  }

  // change the formview based on error state changes, if error with the first form don't move to the next form view
  useEffect(() => {
    validateFirstForm(errors, setFirstFormComplete)
  }, [errors])

  /* onchange function to get image file selected then check if it's a correct file type, if not send an alert.
  if it is update the input text for the image input in the form then setSelectedImage state we use to upload the image file
  to AWS S3 */
  const imageUpload = (e) => {
    const imageFile = e.target.files[0]
    validateImageFiles(imageFile, setFileName, setSelectedImage, setErrors)
  }

  /* onchange function to get image file selected then check if it's a correct file type, if not send an alert.
  if it is update the input text for the image input in the form then set thes selected image state we use to upload the resume file
  to AWS S3 */
  const resumeUpload = (e) => {
    const resumeValue = e.target.files[0]
    validateResumeFiles(resumeValue, setFileName, setSelectedResume, setErrors)
  }

  // go to the previous form section
  const handlePrevious = () => {
    setFirstFormComplete(false)
  }

  // On form submit check if all inputs have been filled correctly
  const submitRegistration = async (e) => {
    e.preventDefault()
    validateEducation(formInput.education, setErrors)
    validateExperience(formInput.experience, setErrors)
    validateSummary(formInput.summary, setErrors)
    validateRates(formInput.rate, setErrors)
    validateImages(selectedImage, setErrors)
    validateResume(selectedResume, setErrors)
  }

  /* validate if all necessary inputs in the second form has been submitted if not show errors in the form else setIsSubmitting to
  AWS true, in order to upload the image and resume files to AWS s3. */
  useEffect(() => {
    validateSecondForm(errors, setIsSubmitting)
  }, [errors])

  /* if all inputs have been submitted upload to aws our resume and images and with the response we get update the form values for
  the image and resume with the url sent from AWS to upload to our server. setIsSubmitting to server true to submit all form info
  to the server */
  useEffect(() => {
    if (isSubmitting.aws === true) {
      const fileData = new FormData()
      const data = [selectedImage, selectedResume]
      for (let i = 0; i < data.length; i++) {
        fileData.append('uploadFiles', data[i], data[i].name)
        s3Uploader(fileData)
          .then(data => {
            if (data[0] && data[1]) {
              setFormInput(prev => { return { ...prev, profilePicture: data[0], resume: data[1] } })
              setIsSubmitting(prev => { return { ...prev, aws: false, server: true } })
            }
          })
          .catch(e => console.log(e))
      }
    }
  }, [isSubmitting.aws])

  // upload form data to the server after we get response from AWS with image and resume url location
  useEffect(() => {
    if (isSubmitting.server === true) {
      Registration(formInput)
        .then(data => {
          if (data) {
            console.log(data)
            if (data.status === 201) {
              window.alert('success')
              setIsSubmitting(prev => { return { ...prev, server: false } })
            }
            setIsSubmitting(prev => { return { ...prev, server: false } })
          }
        }).catch(e => console.log(e))
    }
  }, [isSubmitting.server])

  useEffect(() => {
    console.log(formInput)
    console.log(errors)
    console.log(isSubmitting)
  }, [formInput, errors, isSubmitting])
  return (
    <div className='container'>
      <NavBar />
      <div className='content-container'>
        <Heading />
        {firstFormComplete
          ? <SecondForm
            handleChange={handleFormInput}
            previousForm={handlePrevious}
            handleImageUpload={imageUpload}
            handleResumeUpload={resumeUpload}
            handleSubmit={submitRegistration}
            resumeFile={fileName.resume}
            imageFile={fileName.image}
            educationError={errors.education}
            summaryError={errors.summary}
            ratesError={errors.rate}
            experienceError={errors.experience}
            userEducation={formInput.education}
            userExperience={formInput.experience}
            userRates={formInput.rate}
            userSummary={formInput.summary}
            />
          : <FirstForm
            handleChange={handleFormInput}
            handleNext={goToNextForm}
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
            />}
      </div>
    </div>
  )
}
export default ProviderRegister
