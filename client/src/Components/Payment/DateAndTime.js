import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FirstStep } from './Headers'
const DateAndTime = ({ handleTime, handleDate, selection, times = [], dateFilter }) => {
  return (
    <div className='dateTime-container'>
      <FirstStep />
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
