import React, { useEffect, useState } from 'react'
import NavBar from '../../NavBar/NavBar'
import Heading from '../SharedComponents/Heading'
import BookingButton from './Button'
import Appointment from './Appointment'
import JwtDecode from 'jwt-decode'
import NoAppointments from '../SharedComponents/NoAppointments'
import Footer from '../../Home/Footer/Footer'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import RescheduleModal from './RescheduleModal'
import Loading from '../SharedComponents/Loading'
import 'react-toastify/dist/ReactToastify.css'
import './styles.scss'

const Dashboard = () => {
  /* configure toast notification */
  toast.configure()

  /* customer's information we got from the Jwt token saved in the local storage */
  const customerToken = window.localStorage.getItem('token')
  const customer = JwtDecode(customerToken)

  /* state to hold customer's appointment schedule */
  const [appointments, setAppointments] = useState('')

  /* state to hold loading state */
  const [loading, setLoading] = useState({
    view: true,
    class: 'loading-state'
  })

  /* on initial render fetch the customer's appointment schedule */
  const getAppointmentData = async () => {
    const apiUrl = `http://localhost:3002/api/get/customer/appointments/${customer.userId}`
    const dashboardData = await axios.get(apiUrl, { headers: { Authorization: `Bearer ${customerToken}` } })
    try {
      if (dashboardData.status === 200) {
        setLoading({ view: false, class: 'loading-state-none' })
        setAppointments(dashboardData.data)
      }
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    if (customer !== null || undefined) {
      getAppointmentData()
    }
  }, [])

  /* function to join appointment session */
  const history = useHistory()
  const joinSession = (appointment) => {
    history.push(`/session/${appointment.appointment_id}`)
  }

  /* notification for successful cancellation */
  const notify = () => toast.success('Appointment canceled successfully!', {
    autoClose: 1500
  })

  /* function to cancel appointment */
  const cancelAppointment = async (appointment) => {
    const confirmDelete = window.confirm('Are you sure you want to cancel the appointment?')

    if (confirmDelete === true) {
      const apiUrl = `http://localhost:3002/api/delete/appointment/${appointment.id}`
      const deletedAppointment = await axios.delete(apiUrl, { headers: { Authorization: `Bearer ${customerToken}` } })
      try {
        if (deletedAppointment.status === 200) {
          notify()
          setTimeout(() => {
            window.location.reload()
          }, 2000)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }

  /* array that holds time options for reschedule */
  const timeOption = ['Select Time', '8AM EST', '9AM EST', '10AM EST', '11AM EST', '12PM EST',
    '1PM EST', '2PM EST', '3PM EST', '4PM EST', '5PM EST']

  /* toggle modal open and close */
  const [modalClassName, setModalClassName] = useState(false)

  /* state to hold appointment for reschedule */
  const [appointmentReschedule, setAppointmentReschedule] = useState()

  /* function to get current appointment selected for reschedule and open modal */
  const selectedAppointment = (appointment) => {
    setModalClassName(!modalClassName)
    setAppointmentReschedule(appointment.id)
  }

  /* function to close modal */
  const closeModal = () => {
    setModalClassName(!modalClassName)
  }

  /* submit button name status */
  const [isSubmitting, setIsSubmitting] = useState('Submit')

  /* state to hold selected appointment date */
  const [selectedDate, setSelectedDate] = useState('')

  /* function to get selected date onChange */
  const getSelectedDate = (date) => {
    setSelectedDate(date)
  }

  /* state to hold selected appointment time */
  const [selectedTime, setSelectedTime] = useState('')

  /* function to get selected time onChange */
  const getSelectedTime = (e) => {
    const time = e.target.value
    setSelectedTime(time)
  }

  /* state to hold appointment date and time input errors */
  const [dateAndTimeErrors, setDateAndTimeErrors] = useState({
    date: '',
    time: ''
  })

  /* on Submit check if there are inputs for date and length */
  const rescheduleAppointment = () => {
    if (selectedDate === null) {
      setDateAndTimeErrors(prev => ({ ...prev, date: '*Please select appointment date' }))
    } else if (selectedDate !== null && selectedDate.length < 1) {
      setDateAndTimeErrors(prev => ({ ...prev, date: '*Please select appointment date' }))
    } else setDateAndTimeErrors(prev => ({ ...prev, date: null }))

    if (selectedTime === 'Select Time') {
      setDateAndTimeErrors(prev => ({ ...prev, time: '*Please select appointment time' }))
    } else if (selectedTime.length < 1) {
      setDateAndTimeErrors(prev => ({ ...prev, time: '*Please select appointment time' }))
    } else setDateAndTimeErrors(prev => ({ ...prev, time: null }))
  }

  /* on Focus clear the error message if any */
  const clearInputError = (e) => {
    e.persist()
    setDateAndTimeErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  /* notification for successful reschedule */
  const rescheduleSuccess = () => toast.success('Appointment rescheduled successfully!', {
    autoClose: 2000
  })

  /* Post the new rescheduled appointment to the database when there's no errors
     in the input */
  useEffect(() => {
    const submitAppointment = async () => {
      if (dateAndTimeErrors.date === null && dateAndTimeErrors.time === null) {
        setIsSubmitting('Submitting...')
        const apiUrl = `http://localhost:3002/api/update/appointment${appointmentReschedule}`

        const data = { date: selectedDate.toISOString().substring(0, 10), time: selectedTime }

        const updateAppointment = await axios.patch(apiUrl, data,
          { headers: { Authorization: `Bearer ${customerToken}` } })

        try {
          if (updateAppointment.status === 201) {
            rescheduleSuccess()
            setIsSubmitting('Success')
            setTimeout(() => {
              window.location.reload()
            }, 2500)
          }
        } catch (e) {
          console.log(e)
        }
      }
    }
    submitAppointment()
  }, [dateAndTimeErrors.date, dateAndTimeErrors.time])

  /* refresh page if we're coming from video chat session to get rid of the video */
  useEffect(() => {
    const videoSession = window.sessionStorage.getItem('session')
    if (videoSession !== null) {
      window.sessionStorage.clear('session')
      window.location.reload()
    }
  }, [])
  return (
    <div className='dashboard-container'>
      <NavBar
        navContainerClass='nav-container-underlined'
      />
      <Heading name={customer.firstName.toUpperCase()} />
      <BookingButton />
      {loading.view === true ? <Loading loadingState={loading.view} loadingClass={loading.class} />
        : <div className='appointment'>
          {appointments.length > 0
            ? <div className='appointment-heading'>
              <h1>UPCOMING APPOINTMENT(S)</h1>
            </div> : null}
          {appointments.length > 0
            ? appointments.map((appointment, i) =>
              <Appointment
                key={i}
                date={appointment.date}
                time={appointment.time}
                session='Join Session'
                handleJoin={joinSession.bind(this, appointment)}
                handleCancel={cancelAppointment.bind(this, appointment)}
                handleReschedule={selectedAppointment.bind(this, appointment)}
              />) : <NoAppointments />}
        </div>}
      <RescheduleModal
        time={timeOption}
        modalClass={modalClassName === true ? 'reschedule-container' : 'reschedule-hidden'}
        handleClose={closeModal}
        date={selectedDate}
        handleDate={getSelectedDate}
        handleTime={getSelectedTime}
        handleReschedule={rescheduleAppointment}
        dateError={dateAndTimeErrors.date}
        timeError={dateAndTimeErrors.time}
        handleFocus={clearInputError}
        submitName={isSubmitting}
      />
      <Footer />
    </div>
  )
}

export default Dashboard
