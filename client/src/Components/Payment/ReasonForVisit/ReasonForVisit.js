import React from 'react'
import './Styles.scss'

const ReasonForVisit = ({ handleChange, handleFocus, reason, reasonError }) => {
  return (
    <div className='visit-container'>
      <h1>Reason for visit</h1>
      <p className='errors'>{reasonError}</p>
      <textarea
        className='reason'
        name='reason'
        onChange={handleChange}
        onFocus={handleFocus}
        value={reason}
        required
      />
    </div>
  )
}

export default ReasonForVisit
