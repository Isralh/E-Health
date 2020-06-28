import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
export const AppointmentDate = ({ date, startDate, handleSelect }) => {
  return (
    <DatePicker
      selected={date}
      minDate={startDate}
      onChange={handleSelect}
      filterDate={date => date.getDay() !== 0}
      placeholderText='Select Date'
      className='date-picker'
    />
  )
}

export const AppointmentTime = ({ time = [], handleSelect }) => {
  return (
    <select className='time-picker' onChange={handleSelect}>
      {time.map((time, i) =>
        <option key={i}>{time}</option>
      )}
    </select>
  )
}
