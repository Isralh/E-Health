import React from 'react'
import './Styles.scss'
const ReasonForVisit = () => {
  return (
    <div className='visit-container'>
      <h1>Reason for visit</h1>
      <form className='visit-form'>
        <input
          placeholder='Please briefly describe your reason for visit...'
        />
      </form>
    </div>
  )
}

export default ReasonForVisit
