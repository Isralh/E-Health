import React, { useState, useEffect } from 'react'
import NavBar from '../Home/NavBar/NavBar'
import { getProviderById, getSchedule, postAppointment, providerId } from './services'
import { customerToken, doctorToken } from '../JwtDecode/JwtDecode'
import { FiveStar, FourStar } from '../Appointment/Description/Description'
import './styles.scss'
import Modal from '../Appointment/Modal/Modal'
import BioCard from './BioCard'
import CreditCard from './CreditCard'
import { TopHeader } from './Headers'
import ReasonForVisit from './ReasonForVistit'
import Button from './Button'
import { AppointmentDate, AppointmentTime } from './AppointmentSetter'
const Payment = () => {
  /* initial modal status is false, on view profile click it will be true and modal will be open */
  const [modalStatus, setModalStatus] = useState(false)

  /* current selected doctor information */
  const [doctorInfo, setDoctorInfo] = useState()

  /* state to hold doctor's time schedule */
  const [timeSchedule, setTimeSchedule] = useState()

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

  /* set the doctors rating based on their rate... this is a mock rating system */
  const doctorsRating = () => {
    return doctorInfo.rating < 120 ? <FourStar /> : <FiveStar />
  }

  /* set the doctors rating based on their rate... this is a mock rating system */
  const numberRating = () => {
    return doctorInfo.rating < 120 ? '4.0' : '5.0'
  }

  /* function to show the doctor's work time */
  const scheduleTime = (time) => {
    if (time === 12) return `${time}:00 PM EST`
    if (time >= 8) return `${time}:00 AM EST`
    else if (time < 8) return `${time}:00 PM EST`
  }

  /* fetch the doctor's info on initial load to show in the doctor's card */
  useEffect(() => {
    getProviderById()
      .then(res => { if (res.status === 200) setDoctorInfo(res.data.data) })
      .catch(e => console.log(e))

    getSchedule()
      .then(res => { if (res.status === 200) setTimeSchedule(res.data) })
      .catch(e => console.log(e))
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
  const submitAppointment = (e) => {
    e.preventDefault()
    const data = { customerId: customerToken().userId, providerId }
    console.log(data)
  }

  /* state to hold selected appointment date */
  const [selectedDate, setSelectedDate] = useState(null)

  /* function to change selected date onChange */
  const getSelectedDate = (date) => {
    setSelectedDate(date)
  }

  /* state to hold selected appointment time */
  const [selectedTime, setSelectedTime] = useState(null)

  /* function to change selected time onChange */
  const getSelectedTime = (e) => {
    const time = e.target.value
    setSelectedTime(time)
  }

  /* state to hold time options for appointment */
  const [timeOption, setTimeOption] = useState(
    ['Choose Time', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']
  )

  useEffect(() => {
    console.log(selectedTime)
    console.log(selectedDate)
  }, [selectedTime, selectedDate])
  return (
    <div className='payment-container'>
      <NavBar />
      <TopHeader />
      <div className='content-wrapper' />
      {doctorInfo && timeSchedule !== undefined
        ? <>
          <div className='schedule-container'>
            <BioCard
              firstName={doctorInfo.first_name}
              lastName={doctorInfo.last_name}
              rating={doctorsRating()}
              ratingNumber={numberRating()}
              hourlyRate={doctorInfo.rate}
              doctorsImage={doctorInfo.image}
              doctorSchedule={scheduleTime(timeSchedule[0].time)}
              showModal={modalOpen}
            />
            <div className='headers'>
              <h1>Choose Date and Time</h1>
            </div>
            <div className='appointment-setter'>
              <AppointmentDate
                date={selectedDate}
                handleSelect={getSelectedDate}
                startDate={new Date()}
              />
              <AppointmentTime
                time={timeOption}
                handleSelect={getSelectedTime}

              />
            </div>
            <div className='headers'>
              <h1>Payment Information</h1>
            </div>
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
          <Modal
            data={doctorInfo}
            viewModal={modalStatus}
            closeModal={modalClose}
          />
          </> : null}
    </div>

  )
}

export default Payment
