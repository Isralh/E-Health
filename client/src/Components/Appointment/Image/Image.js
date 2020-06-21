import React from 'react'
import './styles.scss'
const Image = ({ doctorsImage, imageFlex }) => {
  return (
    <div className='doctor-images' style={{ backgroundImage: `url(${doctorsImage})`, flexBasis: imageFlex }} />
  )
}

export default Image
