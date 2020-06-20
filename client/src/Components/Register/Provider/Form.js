import React, { useRef } from 'react'
import './Styles.scss'
export const FirstForm = ({
  handleChange, handleNext, firstNameError, lastNameError,
  emailError, passwordError, confirmPasswordError, firstName,
  lastName, email, password, confirmPassword
}) => {
  return (
    <div className='form-container'>
      <form className='first-form'>
        <div className='input-wrapper'>
          <p>{firstNameError}</p>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            required
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <p>{lastNameError}</p>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            required
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <p>{emailError}</p>
          <input
            type='text'
            name='email'
            placeholder='E-mail'
            required
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <p>{passwordError}</p>
          <input
            type='text'
            name='password'
            placeholder='Password'
            required
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <p>{confirmPasswordError}</p>
          <input
            type='text'
            name='confirmPassword'
            placeholder='Confirm Password'
            required
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className='button-container'>
        <p>Existing user? <span>Login</span></p>
        <button
          type='button'
          onClick={handleNext}
        >Next
        </button>
      </div>
    </div>
  )
}

export const SecondForm = ({
  handleChange, previousForm, handleSubmit, handleResumeUpload,
  resumeFile, handleImageUpload, imageFile, educationError, experienceError,
  summaryError, ratesError, userExperience, userEducation, userImage, userRates,
  userSummary, userResume
}) => {
  const resumeRef = useRef(null)
  const imageRef = useRef(null)

  const handleResumeClick = () => {
    resumeRef.current.click()
  }

  const handleImageClick = () => {
    imageRef.current.click()
  }

  return (
    <div className='form-container'>
      <form className='second-form'>
        <div className='input-wrapper'>
          <p>{educationError}</p>
          <input
            type='text'
            name='education'
            placeholder='College or University'
            required
            value={userEducation}
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <p>{experienceError}</p>
          <input
            type='number'
            name='experience'
            placeholder='Years of experience'
            required
            value={userExperience}
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <p>{summaryError}</p>
          <input
            className='summary'
            type='text'
            name='summary'
            placeholder='Professional Summary'
            required
            value={userSummary}
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <p>{ratesError}</p>
          <input
            type='number'
            name='rate'
            placeholder='$ Hourly rate'
            required
            value={userRates}
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <input
            type='file'
            ref={resumeRef}
            accept='.pdf, .doc'
            hidden='hidden'
            className='resume-file'
            name='resume'
            placeholder='Resume'
            required
            onChange={handleResumeUpload}
          />
          <button className='upload-button' type='button' onClick={handleResumeClick}>Resume</button>
          <span className='upload-text'>{resumeFile.length > 0 ? resumeFile : 'No File Chosen'}</span>
        </div>
        <div className='input-wrapper'>
          <input
            type='file'
            ref={imageRef}
            hidden='hidden'
            className='image-file'
            accept='.jpeg, .png, .jpg'
            name='profilePicture'
            placeholder='Profile Picture'
            required
            onChange={handleImageUpload}
          />
        </div>
        <button className='upload-button' type='button' onClick={handleImageClick}>Profile Pic</button>
        <span className='upload-text'>{imageFile.length > 0 ? imageFile : 'No Image Chosen'}</span>
        <div className='button-container'>
          <button
            type='button'
            onClick={previousForm}
          >Previous
          </button>
          <button
            type='submit'
            onClick={handleSubmit}
          >Register
          </button>
        </div>
      </form>
    </div>
  )
}
