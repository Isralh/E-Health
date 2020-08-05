import React, { useState, useEffect } from 'react'
import NavBar from '../../NavBar/NavBar'
import JwtDecode from 'jwt-decode'
import Heading from '../SharedComponents/Heading'
import NoAppointments from '../SharedComponents/NoAppointments'
import Appointment from './Appointment'
import Footer from '../../Home/Footer/Footer'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Loading from '../SharedComponents/Loading'
import './styles.scss'

const Dashboard = () => {
  const history = useHistory()

  /* customer's information we got from the Jwt token saved in the local storage */
  const providerToken = window.localStorage.getItem('token')
  const provider = JwtDecode(providerToken)

  /* state to hold customer's appointment schedule */
  const [appointments, setAppointments] = useState('')

  /* state to hold loading state */
  const [loading, setLoading] = useState({
    view: true,
    class: 'loading-state'
  })

  /* on initial render fetch the customer's appointment schedule */
  useEffect(() => {
    const getAppointments = async () => {
      if (provider !== null || undefined) {
        const apiUrl = `https://e-health.work/api/get/provider/appointments/${provider.userId}`
        const appointments = await axios.get(apiUrl, { headers: { Authorization: `Bearer ${providerToken}` } })
        try {
          if (appointments.status === 200) {
            setLoading({ view: false, class: 'loading-state-none' })
            setAppointments(appointments.data)
          } else if (appointments.status === 500) return history.push('/500')
        } catch (e) {
          return history.push('/500')
        }
      }
    }
    getAppointments()
  }, [])

  /* function to mark session complete and update the database */
  const markAppointmentComplete = async (appointment) => {
    const id = appointment.id
    const apiUrl = `https://e-health.work/api/delete/appointment${id}`
    const confirmComplete = window.confirm('Are you sure you want to mark as complete?')

    if (confirmComplete === true) {
      const markComplete = await axios.delete(apiUrl, { headers: { Authorization: `Bearer ${providerToken}` } })

      try {
        if (markComplete.status === 200) {
          window.alert(markComplete.data.message)
          window.location.reload()
        } else if (appointments.status === 500) return history.push('/500')
      } catch (e) {
        return history.push('/500')
      }
    }
  }

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
      {provider !== null || undefined
        ? <Heading name={provider.firstName.toUpperCase()} /> : null}
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
                session='Start Session'
                sessionId={appointment.appointment_id}
                handleDone={markAppointmentComplete.bind(this, appointment)}
              />
            )
            : <NoAppointments />}
        </div>}
      <Footer />
    </div>
  )
}

export default Dashboard
