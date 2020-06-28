import React from 'react'
import NavBar from '../../../Home/NavBar/NavBar'
import Heading from './Heading'
import './styles.scss'
import Button from './Button'
import { customerToken } from '../../../JwtDecode/JwtDecode'
import Appointment from './Appointment'
const Dashboard = () => {
  const customer = customerToken()
  console.log(customer)

  
  return (
    <div className='dashboard-container'>
      <NavBar />
      <Heading
        customerName={customer.firstName}
      />
      <Button />
      <Appointment />
    </div>
  )
}

export default Dashboard
