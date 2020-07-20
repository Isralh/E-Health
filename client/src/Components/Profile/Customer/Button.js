import React from 'react'
import { Link } from 'react-router-dom'

const BookingButton = () => {
  return (
    <div className='booking-btn'>
      <Link to='/bookAppointment'><button>Book Appointment</button></Link>
    </div>
  )
}

export default BookingButton
