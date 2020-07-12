import React, { useEffect, useState } from 'react'
import NavBar from '../../../NavBar/NavBar'
import Heading from '../../SharedComponents/Heading'
import { BookingButton } from './Button'
import Appointment from '../../SharedComponents/Appointment'
import JwtDecode from 'jwt-decode'
import NoAppointments from '../../SharedComponents/NoAppointments'
import Footer from '../../../Home/Footer/Footer'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles.scss'

const Dashboard = () => {
  /* customer's information we got from the Jwt token saved in the local storage */
  const customerToken = window.localStorage.getItem('token')
  const customer = JwtDecode(customerToken)

  /* state to hold customer's appointment schedule */
  const [appointments, setAppointments] = useState('')

  /* on initial render fetch the customer's appointment schedule */

  const getAppointmentData = async () => {
    const apiUrl = `http://localhost:3002/api/get/customer/appointments/${customer.userId}`
    const dashboardData = await axios.get(apiUrl)
    try {
      if (dashboardData.status === 200) {
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

  /* function to cancel appointment */

  toast.configure()
  const notify = () => toast.success('Appointment canceled successfully!', {
    autoClose: 2000
  })
  const cancelAppointment = async (appointment) => {
    const apiUrl = `http://localhost:3002/api/delete/session/${appointment.id}`
    const deletedAppointment = await axios.delete(apiUrl)
    try {
      if (deletedAppointment.status === 200) {
        notify()
        setTimeout(() => {
          window.location.reload()
        }, 2500)
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className='dashboard-container'>
      <NavBar />
      <Heading name={customer.firstName.toUpperCase()} />
      <BookingButton />
      <div className='appointment'>
        <div className='appointment-heading'>
          <h1>UPCOMING APPOINTMENT(S)</h1>
        </div>
        {appointments.length > 0
          ? appointments.map((appointment, i) =>
            <Appointment
              key={i}
              date={appointment.date}
              time={appointment.time}
              session='Join Session'
              handleJoin={joinSession.bind(this, appointment)}
              handleCancel={cancelAppointment.bind(this, appointment)}
            />) : <NoAppointments />}
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
