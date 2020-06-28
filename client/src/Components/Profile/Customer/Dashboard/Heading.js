import React from 'react'

const Heading = ({ customerName }) => {
  return (
    <div className='top-heading'>
      <h1>Welcome {customerName} !</h1>
    </div>
  )
}

export default Heading
