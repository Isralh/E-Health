import React from 'react'
import DatePicker from 'react-datepicker'
import Calendar from 'react-calendar'
import 'react-datepicker/dist/react-datepicker.css'
const DateAndTime = ({
  handleTime, handleDate, selection, times = [], dateFilter, firstName,
  lastName, rating, ratingNumber, hourlyRate, showModal, doctorsImage
}) => {
  return (
    <div className='dateTime-container'>
      <div className='scheduler-container'>
        <div className='bioCard-container'>
          <div className='bio-wrapper'>
            <p className='doctor'>{`Dr. ${firstName} ${lastName}`}</p>
            <div><span>{rating}</span><span className='doctorRating'>{ratingNumber}</span></div>
            <p>{`$${hourlyRate}/Appointment`}</p>
            <p onClick={showModal} className='doctorProfile'>View Profile & Review</p>
          </div>
          <div className='doctorImage' style={{ backgroundImage: `url(${doctorsImage})` }} />
        </div>
        <div className='paymentInfo-container'>
          <h1>Payment Information</h1>
          {/* <div className='selection-wrapper'>
             <div className='datePicker'>
              <DatePicker
                selected={selection}
                onChange={handleDate}
                filterDate={dateFilter}
                minDate={new Date()}
                placeholderText='Choose Date'
                className='selected-date'
              />
            </div>
            <div className='time-selector'>
              <select className='selected-time' onChange={handleTime}>
                {times.map((time, i) =>
                  <option key={i}>{time}</option>
                )}
              </select>
          </div>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default DateAndTime
