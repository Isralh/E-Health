import React from 'react'

const ModalImage = ({ doctorsImage }) => {
  return (
    <div className='modal-doctor-image' style={{ backgroundImage: `url(${doctorsImage})` }} />
  )
}

export default ModalImage
