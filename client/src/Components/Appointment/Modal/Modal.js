import React, { useState, useContext } from 'react'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { doctorContext } from '../Doctors/Doctors'
import ModalImage from './ModalImage'
const Modal = ({ viewModal, closeModal }) => {
  const data = useContext(doctorContext)
  console.log(data)
  return (
    <div className='modal-container' style={{ display: viewModal ? 'block' : 'none' }}>
      <div className='modal-content'>
        <div className='top-content'>
          {data !== undefined
            ? <>
              <ModalImage
                doctorsImage={data.image}
              />
              <div onClick={closeModal} className='close-modal'><span><FontAwesomeIcon icon={faTimes} /></span></div>
            </> : null}{
          }
        </div>
      </div>
    </div>
  )
}

export default Modal
