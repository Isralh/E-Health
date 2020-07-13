import React, { useState, useEffect } from 'react'
import NavBar from '../../../NavBar/NavBar'
import JwtDecode from 'jwt-decode'
import Heading from '../../SharedComponents/Heading'
import { GetAppointment } from './Services'
import NoAppointments from '../../SharedComponents/NoAppointments'
import Appointment from './Appointment'
import './styles.scss'
import Footer from '../../../Home/Footer/Footer'
const Dashboard = () => {
  /* customer's information we got from the Jwt token saved in the local storage */
  const providerToken = window.localStorage.getItem('token')
  const provider = JwtDecode(providerToken)

  /* state to hold customer's appointment schedule */
  const [appointments, setAppointments] = useState('')

  /* on initial load fetch the customer's appointment schedule */
  useEffect(() => {
    if (provider !== null || undefined) {
      GetAppointment(provider.userId)
        .then(res => {
          if (res.status === 200) {
            setAppointments(res.data)
          }
        }).catch(e => console.log(e))
    }
  }, [])

  return (
    <div className='dashboard-container'>
      <NavBar />
      {provider !== null || undefined
        ? <Heading name={provider.firstName.toUpperCase()} /> : null}
      <div className='appointment'>
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
            />
          )
          : <NoAppointments />}
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
