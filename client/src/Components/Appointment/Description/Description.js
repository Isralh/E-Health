import React from 'react'
import './styles.scss'
const Description = ({ firstName, lastName }) => {
  return (
    <div className='description-container'>
      <p>{` Dr. ${firstName} ${lastName}`}</p>
      <p>Stars</p>
      <p>View Profile</p>
      <p>Button Book</p>
    </div>
  )
}

export default Description
