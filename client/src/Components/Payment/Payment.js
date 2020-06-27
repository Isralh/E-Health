import React, { useState, useEffect } from 'react'
import NavBar from '../Home/NavBar/NavBar'
import SharedServices from '../SharedServices/SharedServices'
import { FiveStar, FourStar } from '../Appointment/Description/Description'
import './styles.scss'
import Modal from '../Appointment/Modal/Modal'
import BioCard from './BioCard'
import CreditCard from './CreditCard'
import { TopHeader } from './Headers'
import ReasonForVisit from './ReasonForVistit'
import Button from './Button'
const Payment = () => {
  /* initial modal status is false, on view profile click it will be true and modal will be open */
  const [modalStatus, setModalStatus] = useState(false)

  /* current selected doctor information */
  const [doctorInfo, setDoctorInfo] = useState()

  /* state to hold booking selection date */
  const [bookingDate, setBookingDate] = useState()

  /* state to hold the selected booking time */
  const [bookingTime, setBookingTime] = useState()

  /* state to hold our credit card info */
  const [creditCard, setCreditCard] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    zip: ''
  })

  /* function to get the credit card inputs onChange */
  const getCreditCardInput = (e) => {
    e.persist()
    const value = e.target.value
    setCreditCard(prev => { return { ...prev, [e.target.name]: value } })
  }

  useEffect(() => {
    console.log(creditCard)
  }, [creditCard])
  /* Available booking time */
  const [availableTimes, setAvailableTimes] = useState(
    ['Choose Time', '8 AM', '9AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'])

  /* filter out the weekends so user can't book */
  const filterDates = (date) => {
    return date.getDay() !== 6 && date.getDay() !== 0
  }

  /* get the booking date from the customer */
  const getBookingDate = (date) => {
    setBookingDate(date)
  }

  /* function to get the booking time from the customer */

  const getBookingTime = (e) => {
    setBookingTime(e.target.value)
  }

  /* set the doctors rating based on their rate... this is a mock rating system */
  const doctorsRating = () => {
    return doctorInfo.rating < 120 ? <FourStar /> : <FiveStar />
  }

  /* set the doctors rating based on their rate... this is a mock rating system */
  const numberRating = () => {
    return doctorInfo.rating < 120 ? '4.0' : '5.0'
  }

  /* fetch the doctor's info on initial load to show in the doctor's card */
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

  /* onClick submit appointment */
  const submitAppointment = () => {

  }
  return (
    <div className='payment-container'>
      <NavBar />
      <TopHeader />
      <div className='content-wrapper' />
      {doctorInfo !== undefined
        ? <>
          <Modal
            data={doctorInfo}
            viewModal={modalStatus}
            closeModal={modalClose}
          />
          <div className='schedule-container'>
            <BioCard
              times={availableTimes}
              dateFilter={filterDates}
              handleDate={getBookingDate}
              selection={bookingDate}
              handleTime={getBookingTime}
              firstName={doctorInfo.first_name}
              lastName={doctorInfo.last_name}
              rating={doctorsRating()}
              ratingNumber={numberRating()}
              hourlyRate={doctorInfo.rate}
              doctorsImage={doctorInfo.image}
              showModal={modalOpen}
            />
            <CreditCard
              number={creditCard.number}
              name={creditCard.name}
              expiry={creditCard.expiry}
              cvc={creditCard.cvc}
              zip={creditCard.zip}
              handleChange={getCreditCardInput}
            />
            <ReasonForVisit />
            <Button
              subTotal={'Book' + ' ' + `$${doctorInfo.rate}`}
              handleAppointment={submitAppointment}
            />
          </div>
          </> : null}
    </div>

  )
}

export default Payment
