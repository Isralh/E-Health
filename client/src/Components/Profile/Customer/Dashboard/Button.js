import React from 'react'

export const BookingButton = ({ handleBooking }) => {
  return (
    <div className='booking-btn'>
      <button onClick={handleBooking}>Book Appointment</button>
    </div>
  )
}

export const JoinSession = () => {
  return (
    <button>Join Session</button>
  )
}
