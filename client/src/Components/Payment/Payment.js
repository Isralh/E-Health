import React, { useState, useEffect } from 'react'
import NavBar from '../Home/NavBar/NavBar'
import SharedServices from '../SharedServices/SharedServices'
import DoctorCard from '../CheckoutRegister/DoctorCard'
import { FiveStar, FourStar } from '../Appointment/Description/Description'
import './styles.scss'
import Modal from '../Appointment/Modal/Modal'
import DateAndTime from './DateAndTime'
const Payment = () => {
  const [modalStatus, setModalStatus] = useState(false)

  const [doctorInfo, setDoctorInfo] = useState()

  const doctorsRating = () => {
    return doctorInfo.rating < 120 ? <FourStar /> : <FiveStar />
  }

  const numberRating = () => {
    return doctorInfo.rating < 120 ? '4.0' : '5.0'
  }
  useEffect(() => {
    SharedServices()
      .then(res => {
        if (res.status === 200) {
          setDoctorInfo(res.data.data)
        }
      })
  }, [])

  /* onClick open modal */
  const modalOpen = () => {
    setModalStatus(true)
  }

  /* onClick close Modal */
  const modalClose = () => {
    setModalStatus(false)
  }
  return (
    <div className='payment-container'>
      <NavBar />
      <div className='content-wrapper' />
      {doctorInfo !== undefined
        ? <>
          <DoctorCard
            firstName={doctorInfo.first_name}
            lastName={doctorInfo.last_name}
            rating={doctorsRating()}
            ratingNumber={numberRating()}
            hourlyRate={doctorInfo.rate}
            doctorsImage={doctorInfo.image}
            showModal={modalOpen}
          /> <Modal
            data={doctorInfo}
            viewModal={modalStatus}
            closeModal={modalClose}
          />
        </> : null}
      <DateAndTime />
    </div>
  )
}

export default Payment
