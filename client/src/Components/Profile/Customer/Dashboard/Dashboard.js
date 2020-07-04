import React, { useEffect, useState } from 'react'
import NavBar from '../../../NavBar/NavBar'
import Heading from '../../SharedComponents/Heading'
import './styles.scss'
import { BookingButton } from './Button'
import Appointment from '../../SharedComponents/Appointment'
import { GetAppointment } from './Services'
import JwtDecode from 'jwt-decode'
import NoAppointments from '../../SharedComponents/NoAppointments'
const Dashboard = () => {
  /* customer's information we got from the Jwt token saved in the local storage */
  const customerToken = window.localStorage.getItem('token')
  const customer = JwtDecode(customerToken)

  /* state to hold customer's appointment schedule */
  const [appointments, setAppointments] = useState('')

  /* on initial load fetch the customer's appointment schedule */
  useEffect(() => {
    if (customer !== null || undefined) {
      GetAppointment(customer.userId)
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
      <Heading name={customer.firstName.toUpperCase()} />
      <BookingButton />
      {appointments.length > 0
        ? appointments.map((appointment, i) =>
          <Appointment
            key={i}
            date={appointment.date}
            time={appointment.time}
            session='JOIN SESSION'
            sessionId={appointment.appointment_id}
          />
        )
        : <NoAppointments />}
    </div>
  )
}

export default Dashboard
