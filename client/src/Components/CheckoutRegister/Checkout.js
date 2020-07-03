import React, { useEffect, useState } from 'react'
import NavBar from '../Home/NavBar/NavBar'
import SharedServices from '../SharedServices/SharedServices'
import DoctorCard from './DoctorCard'
import { FiveStar, FourStar } from '../Appointment/Description/Description'
import CustomerRegister from '../Register/Customer/CustomerRegister'
import Modal from '../Appointment/Modal/Modal'
const Checkout = () => {
  /* modal state */
  const [modalStatus, setModalStatus] = useState(false)

  /* selected doctor information to book appointment */
  const [doctorInfo, setDoctorInfo] = useState()

  /* show the doctor's rating */
  const doctorsRating = () => {
    return doctorInfo.rating < 120 ? <FourStar /> : <FiveStar />
  }

  /* show the doctor's number rating */
  const numberRating = () => {
    return doctorInfo.rating < 120 ? '4.0' : '5.0'
  }

  /* on page load fetch the selected doctor from the database */
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
    <div className='checkout-container'>
      <NavBar />
      <div className='content-wrapper'>
        {/*    {doctorInfo !== undefined
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
          </>
          : null} */}
        <CustomerRegister
          displayNavBar='none'
          historyPush='/payment'
          submitType='Continue'
        />
      </div>
    </div>
  )
}

export default Checkout
