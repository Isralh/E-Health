import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const DateAndTime = ({ handleTime, handleDate, selection, times = [], dateFilter }) => {
  return (
    <div className='dateTime-container'>
      <div className='top-heading'>
        <h1><span className='step-one'>1.</span><span className='heading'>Choose Date and Time</span></h1>
      </div>
      <div className='datePicker'>
        <p> Select Date: </p>
        <DatePicker
          selected={selection}
          onChange={handleDate}
          filterDate={dateFilter}
          minDate={new Date()}
          placeholderText='Available Dates'
          isClearable
          className='selected-date'
        />
        <p> Select Time:</p>
        <select className='selected-time' onChange={handleTime}>
          {times.map((time, i) =>
            <option key={i}>{time}</option>
          )}
        </select>
        <p>Session Length:</p>
        <select className='selected-time '>
          <option>1 hour</option>
          <option>2 hours</option>
          <option>3 hours</option>
        </select>
      </div>
    </div>
  )
}

export default DateAndTime
