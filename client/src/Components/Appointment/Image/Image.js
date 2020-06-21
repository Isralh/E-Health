import React from 'react'
import './styles.scss'
const Image = ({ doctorsImage }) => {
  return (
    <div className='doctor-images' style={{ backgroundImage: `url(${doctorsImage})` }} />
  )
}

export default Image
