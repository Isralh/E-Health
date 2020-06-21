import React, { useState, useContext } from 'react'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Image from '../Image/Image'
import Description from '../Description/Description'
import { doctorContext } from '../Doctors/Doctors'
const Modal = ({ viewModal }) => {
  const data = useContext(doctorContext)
  console.log(data)
  const [imageFlex, setImageFlex] = useState('150px')
  const [descriptionFlex, setDescriptionFlex] = useState('60%')
  return (
    <div className='modal-container' style={{ display: viewModal ? 'block' : 'none' }}>
      <div className='modal-content'>
        <div className='top-content'>
          <Image
            imageFlex={imageFlex}
          />
          <Description flexPercentage={descriptionFlex} />
          <div className='close-modal'><span><FontAwesomeIcon icon={faTimes} /></span></div>
        </div>
      </div>
    </div>
  )
}

export default Modal
