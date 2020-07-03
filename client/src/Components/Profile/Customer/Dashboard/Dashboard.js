import React, { useEffect, useState } from 'react'
import NavBar from '../../../Home/NavBar/NavBar'
import Heading from '../../SharedComponents/Heading'
import './styles.scss'
import { BookingButton } from './Button'
import Appointment from '../../SharedComponents/Appointment'
import { GetAppointment } from './Services'
import JwtDecode from 'jwt-decode'

const Dashboard = () => {
  /* customer's information we got from the Jwt token saved in the local storage */
  const customerToken = window.localStorage.getItem('token')
  const customer = JwtDecode(customerToken)
  console.log(customer)
  /* state to hold customer's appointment schedule */
  const [appointments, setAppointments] = useState(null)

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

  useEffect(() => {
    console.log(appointments)
  }, [appointments])
  return (
    <div className='dashboard-container'>
      <NavBar />
      <Heading name={customer.firstName.toUpperCase()} />
      <BookingButton />
      {appointments !== null && appointments.length > 0
        ? appointments.map((appointment, i) =>
          <Appointment
            key={i}
            date={appointment.date}
            time={appointment.time}
            session='JOIN SESSION'
            sessionId={appointment.appointment_id}
          />
        )
        : null}
    </div>
  )
}

export default Dashboard
