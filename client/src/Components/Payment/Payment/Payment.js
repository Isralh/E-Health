import React, { useState, useEffect } from 'react'
import NavBar from '../../NavBar/NavBar'
import { DoctorRating } from '../../Appointment/DoctorRating/DoctorRating'
import Modal from '../../Appointment/Modal/Modal'
import BioCard from '../BioCard/BioCard'
import CreditCard from '../CreditCard/CreditCard'
import TopHeader from '../Header/Header'
import ReasonForVisit from '../ReasonForVisit/ReasonForVisit'
import Button from '../Button/Button'
import { Scheduler } from '../Scheduler/Scheduler'
import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { validateCardNumber, validateName, validateExpiry, validateCVC, validateZip } from '../FormValidation/CardValidation'
import { validateDate, validateTime } from '../FormValidation/DateAndTime'
import validateReason from '../FormValidation/ReasonForVisit'
import { checkErrors } from '../FormValidation/checkErrors'
import JwtDecode from 'jwt-decode'
import Footer from '../../Home/Footer/Footer'
import axios from 'axios'
import './styles.scss'

const Payment = () => {
  /* get providersId and user's information from local storage when logged in */
  const providerChoice = window.localStorage
  const customerToken = window.localStorage.getItem('token')
  const providerId = providerChoice.getItem('providerId')
  const user = JwtDecode(customerToken)

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

  /* state to hold all of our credit card input errors */
  const [creditCardErrors, setCreditCardErrors] = useState({
    number: ' ',
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

  /* fetch the doctor's info on initial load to show in the doctor's card */
  useEffect(() => {
    const getProvider = async () => {
      const apiUrl = `https://e-health.work/api/get/provider/${providerId}`

      const provider = await axios.get(apiUrl)

      try {
        if (provider.status === 200) {
          setDoctorInfo(provider.data.data)
        } else if (provider.status === 500) return history.push('/500')
      } catch (e) {
        return history.push('/500')
      }
    }
    getProvider()
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
  const [selectedDate, setSelectedDate] = useState('')

  /* function to change selected date onChange */
  const getSelectedDate = (date) => {
    setSelectedDate(date)
  }

  /* state to hold selected appointment time */
  const [selectedTime, setSelectedTime] = useState('')

  /* function to change selected time onChange */
  const getSelectedTime = (e) => {
    const time = e.target.value
    setSelectedTime(time)
  }

  /* state to hold appointment date and time input errors */
  const [dateAndTimeErrors, setDateAndTimeErrors] = useState({
    date: '',
    time: ''
  })

  /* state to hold appointment reason */
  const [visitReason, setVisitReason] = useState('Reason for visit...')

  const getReason = (e) => {
    const value = e.target.value
    setVisitReason(value)
  }

  /* state to hold reason for visit input errors */
  const [reasonsError, setReasonsError] = useState('')

  /* array that holds time options for appointment */
  const timeOption = ['Choose Time', '8AM EST', '9AM EST', '10AM EST', '11AM EST', '12PM EST',
    '1PM EST', '2PM EST', '3PM EST', '4PM EST', '5PM EST']

  /* clear error message on individual input focus */
  const clearInputOnFocus = (e) => {
    e.persist()
    setCreditCardErrors(prev => ({ ...prev, [e.target.name]: '' }))
    setDateAndTimeErrors(prev => ({ ...prev, [e.target.name]: '' }))
    setReasonsError('')
  }

  /* onClick submit appointment */
  const history = useHistory()

  const validateInputs = (e) => {
    e.preventDefault()
    validateCardNumber(creditCard.number, setCreditCardErrors)
    validateName(creditCard.name, setCreditCardErrors)
    validateExpiry(creditCard.expiry, setCreditCardErrors)
    validateCVC(creditCard.cvc, setCreditCardErrors)
    validateZip(creditCard.zip, setCreditCardErrors)
    validateDate(selectedDate, setDateAndTimeErrors)
    validateTime(selectedTime, setDateAndTimeErrors)
    validateReason(visitReason, setReasonsError)
  }

  /* submit appointment form to the database when all errors are null */
  useEffect(() => {
    /* if there is an error with the inputs errorCheck will return true else false */
    const errorCheck = checkErrors(creditCardErrors.number, creditCardErrors.name, creditCardErrors.expiry,
      creditCardErrors.cvc, creditCardErrors.zip, dateAndTimeErrors.date, dateAndTimeErrors.time, reasonsError)

    /* if no errors post to database */
    const postAppointment = async () => {
      if (errorCheck === false) {
        const data = {
          customerId: user.userId,
          providerId,
          selectedDate: selectedDate.toISOString().substring(0, 10),
          selectedTime,
          appointmentId: uuid()
        }
        const apiUrl = 'https://e-health.work/api/post/appointment'

        const postAppointment = await axios.post(apiUrl, data,
          { headers: { Authorization: `Bearer ${customerToken}` } })

        try {
          console.log(postAppointment.status)
          if (postAppointment.status === 200) {
            window.alert(postAppointment.data.message)
          } else if (postAppointment.status === 201) {
            providerChoice.removeItem('providerId')
            history.push('/customer/dashboard')
          }
        } catch (e) {
          return history.push('/500')
        }
      }
    }

    postAppointment()
  }, [creditCardErrors, dateAndTimeErrors])

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
    <div className='payment-container'>
      <NavBar
        navContainerClass='nav-container-underlined'
      />
      <TopHeader />
      <div className='payment-wrapper'>
        {doctorInfo !== undefined
          ? <>
            <div className='schedule-container'>
              <BioCard
                firstName={doctorInfo.first_name}
                lastName={doctorInfo.last_name}
                rating={DoctorRating(viewRating(doctorInfo))}
                ratingNumber={doctorRate(doctorInfo)}
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
                  dateError={dateAndTimeErrors.date}
                  handleSelect={getSelectedDate}
                  startDate={new Date()}
                  time={timeOption}
                  timeError={dateAndTimeErrors.time}
                  handleTime={getSelectedTime}
                  handleFocus={clearInputOnFocus}
                />
              </div>
              <div className='headers'>
                <h1>Payment Information</h1>
              </div>
              <CreditCard
                number={creditCard.number}
                cardNumberError={creditCardErrors.number}
                name={creditCard.name}
                cardNameError={creditCardErrors.name}
                expiry={creditCard.expiry}
                expiryError={creditCardErrors.expiry}
                cvc={creditCard.cvc}
                cvcError={creditCardErrors.cvc}
                zip={creditCard.zip}
                zipError={creditCardErrors.zip}
                handleChange={getCreditCardInput}
                handleFocus={clearInputOnFocus}
              />
              <ReasonForVisit
                handleChange={getReason}
                handleFocus={clearInputOnFocus}
                reason={visitReason}
                reasonError={reasonsError}
              />
              <Button
                handleAppointment={validateInputs}
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
      <Footer />
    </div>
  )
}

export default Payment
