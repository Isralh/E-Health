import React, { useEffect, useState } from 'react'
import NavBar from '../Home/NavBar/NavBar'
import CheckoutServices from './CheckoutServices'
import DoctorCard from './DoctorCard'
import { FiveStar, FourStar } from '../Appointment/Description/Description'
import CustomerRegister from '../Register/Customer/CustomerRegister'
const Checkout = () => {
  const doctorChoice = window.localStorage
  const doctorId = doctorChoice.getItem('doctor')
  /* selected doctor information to book appointment */
  const [doctorInfo, setDoctorInfo] = useState()

  /* show the doctor's rating */
  const doctorsRating = () => {
    return doctorInfo.rating < 120 ? <FourStar /> : <FiveStar />
  }

  const numberRating = () => {
    return doctorInfo.rating < 120 ? '4.0' : '5.0'
  }
  /* on page load fetch the selected doctor from the database */
  useEffect(() => {
    CheckoutServices(doctorId)
      .then(res => {
        if (res.status === 200) {
          setDoctorInfo(res.data.data)
        }
      })
  }, [])

  useEffect(() => {
    console.log(doctorInfo)
  }, [doctorInfo])
  return (
    <div className='checkout-container'>
      <NavBar />
      <div className='content-wrapper'>
        {doctorInfo !== undefined
          ? <DoctorCard
            firstName={doctorInfo.first_name}
            lastName={doctorInfo.last_name}
            rating={doctorsRating()}
            ratingNumber={numberRating()}
            hourlyRate={doctorInfo.rate}
            doctorsImage={doctorInfo.image}
          /> : null}
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
