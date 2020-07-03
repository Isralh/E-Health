import React, { useState, useEffect } from 'react'
import NavBar from '../../Home/NavBar/NavBar'
import { getProviderById, postAppointment, providerId } from './services'
import { customerToken } from '../../JwtDecode/JwtDecode'
import { FiveStar, FourStar } from '../../Appointment/Description/Description'
import Modal from '../../Appointment/Modal/Modal'
import BioCard from '../BioCard/BioCard'
import CreditCard from '../CreditCard/CreditCard'
import TopHeader from '../Header/Header'
import ReasonForVisit from '../ReasonForVisit/ReasonForVisit'
import Button from '../Button/Button'
import { Scheduler } from '../Scheduler/Scheduler'
import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import './styles.scss'

const Payment = () => {
  /* initial modal status is false, on view profile click it will be true and modal will be open */
  const [modalStatus, setModalStatus] = useState(false)

  /* current selected doctor information */
  const [doctorInfo, setDoctorInfo] = useState()

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

  /* fetch the doctor's info on initial load to show in the doctor's card */
  useEffect(() => {
    getProviderById()
      .then(res => { if (res.status === 200) setDoctorInfo(res.data.data) })
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
    ['Choose Time', '8AM EST', '9AM EST', '10AM EST', '11AM EST', '12PM EST', '1PM EST', '2PM EST', '3PM EST', '4PM EST', '5PM EST']
  )

  /* onClick submit appointment */
  const doctorName = window.localStorage.getItem('doctorName')
  const history = useHistory()
  const submitAppointment = (e) => {
    e.preventDefault()
    const data = {
      customerId: customerToken().userId,
      providerId,
      selectedDate: selectedDate.toISOString().substring(0, 10),
      selectedTime,
      appointmentId: doctorName
    }
    postAppointment(data)
      .then(res => {
        if (res.status === 201) {
          return history.push('/customer/dashboard')
        }
        if (res.status === 200) {
          window.alert(res.data.message)
        }
      })
      .catch(e => console.log(e))
  }

  return (
    <div className='payment-container'>
      <NavBar />
      <TopHeader />
      <div className='payment-wrapper'>
        {doctorInfo !== undefined
          ? <>
            <div className='schedule-container'>
              <BioCard
                firstName={doctorInfo.first_name}
                lastName={doctorInfo.last_name}
                rating={doctorsRating()}
                ratingNumber={numberRating()}
                hourlyRate={doctorInfo.rate}
                doctorsImage={doctorInfo.image}
                showModal={modalOpen}
              />
              <div className='headers'>
                <h1>Choose Date and Time</h1>
              </div>
              <div className='appointment-setter'>
                <Scheduler
                  date={selectedDate}
                  handleSelect={getSelectedDate}
                  startDate={new Date()}
                  time={timeOption}
                  handleDate={getSelectedTime}
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
                handleAppointment={submitAppointment}
                book={`BOOK $${doctorInfo.rate}`}
              />
            </div>
            <Modal
              data={doctorInfo}
              viewModal={modalStatus}
              closeModal={modalClose}
            />
          </> : null}
      </div>
    </div>

  )
}

export default Payment
