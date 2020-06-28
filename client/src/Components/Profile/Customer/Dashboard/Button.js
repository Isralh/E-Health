import React from 'react'

export const BookingButton = ({ handleBooking }) => {
  return (
    <div className='booking-btn'>
      <button onClick={handleBooking}>Book Appointment</button>
    </div>
  )
}

