import React, { useContext } from 'react'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { doctorContext } from '../Doctors/Doctors'
import ModalImage from './ModalImage'
import { TopDescription, MainDescription } from './ModalDescription'
import { FiveStar, FourStar } from '../Description/Description'
const Modal = ({ viewModal, closeModal }) => {
  /* the individual doctor's data received when click on view doctors profile and review */
  const data = useContext(doctorContext)

  /* mock rating system I came up with based on the doctors hourly rate */
  const rateDoctor = (data) => {
    return data.rate < 120 ? '4.0' : '5.0'
  }

  /* mock rating system I came up with based on the doctors hourly rate */
  const viewRating = (data) => {
    return data.rate < 120 ? <FourStar /> : <FiveStar />
  }

  return (
    <div className='modal-container' style={{ display: viewModal ? 'block' : 'none' }}>
      <div className='modal-content'>
        {data !== undefined
          ? <>
            <div className='top-content'>
              <TopDescription
                firstName={data.first_name}
                lastName={data.last_name}
                showRating={viewRating(data)}
                doctorRating={rateDoctor(data)}
                years={data.yearsOfExperience}
              />
              <ModalImage
                doctorsImage={data.image}
              />
              <div onClick={closeModal} className='close-modal'><span><FontAwesomeIcon icon={faTimes} /></span></div>
            </div>
            <div className='main-content'>
              <MainDescription
                years={data.yearsOfExperience}
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
