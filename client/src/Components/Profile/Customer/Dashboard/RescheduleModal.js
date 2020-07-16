import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
const RescheduleModal = ({
  dateError, date, handleDate, handleFocus,
  timeError, handleTime, time = [], modalClass,
  handleClose, handleReschedule, submitName
}) => {
  return (
    <div className={modalClass}>
      <div className='reschedule-content'>
        <div className='reschedule-heading'>
          <h1>Reschedule</h1>
        </div>
        <div className='close'><p onClick={handleClose}><FontAwesomeIcon icon={faTimesCircle} /></p></div>
        <div className='reschedule-dateTime'>
          <div className='date-container'>
            <p className='errors'>{dateError}</p>
            <div className='date-chooser'>
              <p>Date:</p>
              <DatePicker
                selected={date}
                minDate={new Date()}
                onChange={handleDate}
                filterDate={date => date.getDay() !== 0}
                dateFormat='MM/dd/yy'
                placeholderText='Select Date'
                className='date-picker'
                name='date'
                onFocus={handleFocus}
              />
            </div>
          </div>
          <p className='errors'>{timeError}</p>
          <div className='time-chooser'>
            <p>Time:</p>
            <div className='time-selector'>
              <select className='time-picker' name='time' onChange={handleTime} onFocus={handleFocus}>
                {time.map((time, i) =>
                  <option key={i}>{time}</option>
                )}
              </select>
            </div>
          </div>
          <div className='reschedule-button'>
            <button onClick={handleReschedule}>{submitName}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RescheduleModal
