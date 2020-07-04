import React from 'react'
import './Styles.scss'
const ReasonForVisit = ({ handleChange, handleFocus, reason, reasonError }) => {
  return (
    <div className='visit-container'>
      <h1>Reason for visit</h1>
      <form className='visit-form'>
        <p className='errors'>{reasonError}</p>
        <input
          placeholder='Please briefly describe your reason for visit...'
          name='reason'
          required
          type='text'
          onChange={handleChange}
          onFocus={handleFocus}
          value={reason}
        />
      </form>
    </div>
  )
}

export default ReasonForVisit
