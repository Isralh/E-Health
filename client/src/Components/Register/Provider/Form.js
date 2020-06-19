import React from 'react'
import './Styles.scss'
export const FirstForm = ({
  handleChange, handleNext, firstNameError, lastNameError,
  emailError, passwordError, confirmPasswordError, firstName,
  lastName, email, password, confirmPassword
}) => {
  return (
    <div className='form-container'>
      <form className='first-form' data-testid='form-control'>
        <div className='input-wrapper'>
          <p data-testid='firstNameError'>{firstNameError}</p>
          <input
            type='text'
            data-testid='firstName'
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
            data-testid='lastName'
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
            data-testid='email'
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
            data-testid='password'
            name='password'
            placeholder='Password'
            required value={password}
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <p>{confirmPasswordError}</p>
          <input
            type='text'
            data-testid='confirmPassword'
            name='confirmPassword'
            placeholder='Confirm Password'
            required value={confirmPassword}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className='button-container'>
        <p>Existing user? <span>Login</span></p>
        <button
          data-testid='first-form-button'
          type='button'
          onClick={handleNext}
        >Next
        </button>
      </div>
    </div>
  )
}

export const SecondForm = ({ handleChange, previousForm, handleSubmit }) => {
  return (
    <div className='form-container'>
      <form className='second-form'>
        <div className='input-wrapper'>
          <input
            type='text'
            name='education'
            placeholder='College or University'
            required
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <input
            type='text'
            name='experience'
            placeholder='Years of experience'
            required
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <input
            className='summary'
            type='text'
            name='summary'
            placeholder='Professional Summary'
            required
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <input
            type='file'
            name='resume'
            placeholder='Resume'
            required
            onChange={handleChange}
          />
        </div>
        <div className='input-wrapper'>
          <input
            type='file'
            accept='.jpeg .png .jpg'
            name='profilePicture'
            placeholder='Profile Picture'
            required
            onChange={handleChange}
          />
        </div>
      </form>
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
    </div>
  )
}
