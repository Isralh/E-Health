import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ModalImage from './ModalImage'
import { TopDescription, MainDescription } from './ModalDescription'
import { DoctorRating } from '../DoctorRating/DoctorRating'
import './styles.scss'

const Modal = ({ viewModal, closeModal, data }) => {
  /* show doctor's rating in orange starts */
  const viewRating = (doctor) => {
    return parseInt((doctor.rating / doctor.ratingCount).toFixed(0))
  }

  /* show doctor's rating in number based on their rating */
  const doctorRate = (doctor) => {
    if (parseInt((doctor.rating / doctor.ratingCount).toFixed(0)) === 5) {
      return '5.0'
    } else if (parseInt((doctor.rating / doctor.ratingCount).toFixed(0)) === 4) {
      return '4.0'
    } else if (parseInt((doctor.rating / doctor.ratingCount).toFixed(0)) === 3) {
      return '3.0'
    } else if (parseInt((doctor.rating / doctor.ratingCount).toFixed(0)) === 2) {
      return '2.0'
    } else if (parseInt((doctor.rating / doctor.ratingCount).toFixed(0)) === 1) {
      return '1.0'
    }
  }

  return (
    <div className='modal-container' style={{ display: viewModal ? 'block' : 'none' }}>
      <div className='modal-content'>
        {data !== undefined
          ? <>
            <div className='topModal-content'>
              <TopDescription
                firstName={data.first_name}
                lastName={data.last_name}
                showRating={DoctorRating(viewRating(data))}
                doctorRating={doctorRate(data)}
                years={data.yearsOfExperience}
              />
              <ModalImage
                doctorsImage={data.image}
              />
              <div onClick={closeModal} className='close-modal'><span><FontAwesomeIcon icon={faTimes} /></span></div>
            </div>
            <div className='main-content'>
              <MainDescription
                education={data.education}
                bio={data.summary}
              />
            </div>
          </>
          : null}
      </div>
    </div>
  )
}

export default Modal
