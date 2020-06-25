import React, { useState, useEffect } from 'react'
import NavBar from '../Home/NavBar/NavBar'
import SharedServices from '../SharedServices/SharedServices'
import DoctorCard from '../CheckoutRegister/DoctorCard'
import { FiveStar, FourStar } from '../Appointment/Description/Description'
import './styles.scss'
import Modal from '../Appointment/Modal/Modal'
import DateAndTime from './DateAndTime'
import CreditCard from './CreditCard'
const Payment = () => {
  /* initial modal status is false, on view profile click it will be true and modal will be open */
  const [modalStatus, setModalStatus] = useState(false)

  /* current selected doctor information */
  const [doctorInfo, setDoctorInfo] = useState()

  /* state to hold booking selection date */
  const [bookingDate, setBookingDate] = useState()

  /* state to hold the selected booking time */
  const [bookingTime, setBookingTime] = useState()

  /* focus state for the credit card */
  const [focus, setFocus] = useState()

  /* state to hold our credit card info */
  const [creditCard, setCreditCard] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: ''
  })

  /* function to get the credit card inputs onChange */
  const getCreditCardInput = (e) => {
    e.persist()
    const value = e.target.value
    setCreditCard(prev => { return { ...prev, [e.target.name]: value } })
  }

  /* function to handle on focus of the credit card inputs */
  const cardInputFocus = (e) => {
    e.persist()
    const value = e.target.name
    setFocus(value)
  }
  useEffect(() => {
    console.log(creditCard)
  }, [creditCard])
  /* Available booking time */
  const [availableTimes, setAvailableTimes] = useState(
    ['8 AM', '9AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'])

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
      <DateAndTime
        times={availableTimes}
        dateFilter={filterDates}
        handleDate={getBookingDate}
        selection={bookingDate}
        handleTime={getBookingTime}
      />
      <CreditCard
        number={creditCard.number}
        name={creditCard.name}
        expiry={creditCard.expiry}
        cvc={creditCard.cvc}
        focusState={focus}
        handleChange={getCreditCardInput}
        handleFocus={cardInputFocus}
      />
    </div>
  )
}

export default Payment
