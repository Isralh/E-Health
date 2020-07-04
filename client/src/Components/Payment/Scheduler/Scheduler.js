import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Styles.scss'
export const Scheduler = ({
  date, startDate, handleSelect, time = [],
  handleDate, dateError, timeError, handleFocus
}) => {
  return (
    <div className='appointment-setter'>
      <div className='dateError-container'>
        <p className='errors'>{dateError}</p>
      </div>
      <DatePicker
        selected={date}
        minDate={startDate}
        onChange={handleSelect}
        filterDate={date => date.getDay() !== 0}
        dateFormat='MM/dd/yy'
        placeholderText='Select Date'
        className='date-picker'
        name='date'
        onFocus={handleFocus}
      />
      <div className='time-selector'>
        <p className='errors'>{timeError}</p>
        <select className='time-picker' name='time' onChange={handleDate} onFocus={handleFocus}>
          {time.map((time, i) =>
            <option key={i}>{time}</option>
          )}
        </select>
      </div>
    </div>
  )
}
