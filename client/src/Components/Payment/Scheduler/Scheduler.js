import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Styles.scss'
export const Scheduler = ({ date, startDate, handleSelect, time = [], handleDate }) => {
  return (
    <div className='appointment-setter'>
      <DatePicker
        selected={date}
        minDate={startDate}
        onChange={handleSelect}
        filterDate={date => date.getDay() !== 0}
        dateFormat='dd/MM/yy'
        placeholderText='Select Date'
        className='date-picker'
      />
      <select className='time-picker' onChange={handleDate}>
        {time.map((time, i) =>
          <option key={i}>{time}</option>
        )}
      </select>
    </div>
  )
}
