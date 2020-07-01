import React, { useState, useEffect } from 'react'
import NavBar from '../../../Home/NavBar/NavBar'
import JwtDecode from 'jwt-decode'
import Appointment from '../../SharedComponents/Appointment'
import Heading from '../../SharedComponents/Heading'
import { GetAppointment } from './Services'

const Dashboard = () => {
  /* customer's information we got from the Jwt token saved in the local storage */
  const providerToken = window.localStorage.getItem('token')
  const provider = JwtDecode(providerToken)

  /* state to hold customer's appointment schedule */
  const [appointments, setAppointments] = useState([])

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

  useEffect(() => {
    console.log(appointments)
  }, [appointments])
  return (
    <div className='dashboard-container'>
      <NavBar />
      {provider !== null || undefined
        ? <Heading name={provider.firstName} /> : null}
      {appointments !== null && appointments.length > 0
        ? appointments.map((appointment, i) =>
          <Appointment
            key={i}
            date={appointment.date}
            time={appointment.time}
            session='START SESSION'
            sessionId={appointment.appointment_id}
          />
        )
        : null}
    </div>
  )
}

export default Dashboard
