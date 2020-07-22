import React, { useState, useEffect } from 'react'
import Modal from '../../Appointment/Modal/Modal'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './Styles.scss'

const OurDoctors = () => {
  /* state to hold the doctor's info */
  const [doctors, setDoctors] = useState()

  /* on initial render get the doctor's info from the database */
  useEffect(() => {
    const getAllDoctors = async () => {
      const apiUrl = 'http://localhost:3002/api/get/provider/AllProviders'
      const allProviders = await axios.get(apiUrl)
      try {
        if (allProviders.status === 200) {
          const data = allProviders.data.slice(0, 4)
          setDoctors(data)
        }
        if (allProviders.status === 500) return history.push('/500')
      } catch (e) {
        return history.push('/500')
      }
    }
    getAllDoctors()
  }, [])

  /* state to hold the current state of the modal if it's open or not */
  const [modalState, setModalState] = useState(false)

  /* state to hold modal(doctor's info) data */
  const [selectedDoctor, setSelectedDoctor] = useState()

  /* function to open modal and get the selected doctors information */
  const handleModalOpen = (doctor) => {
    setSelectedDoctor(doctor)
    setModalState(true)
  }
  /* function to close modal */
  const modalClose = () => {
    setModalState(false)
  }

  /* state to hold selected doctor for appointment */
  // const [doctorAppointment, setDoctorAppointment] = useState()

  /* function to get selected doctor for appointment and redirect user to the correct page */
  const history = useHistory()
  const doctorAppointment = window.localStorage
  const userToken = window.localStorage.getItem('token')
  const handleAppointment = (doctor) => {
    doctorAppointment.setItem('providerId', doctor.id)

    /* if the user doesn't have an account yet, send them to the checkout registration page
      else send them to the payments page */
    if (userToken === null || userToken === undefined) {
      history.push('/checkoutRegister')
    } else history.push('/payment')
  }

  return (
    <div className='ourDoctors-container'>
      <div className='OurDoctors-heading'>
        <h1>OUR EXPERIENCED DOCTORS</h1>
      </div>
      <div className='ourDoctors-list'>
        {doctors !== undefined
          ? doctors.map((doctor, i) =>
            <div className='ourDoctors' key={i}>
              <img src={doctor.image} alt='doctorsImage' className='docImg' />
              <p className='name'>{`Dr. ${doctor.first_name} ${doctor.last_name}`}</p>
              <p className='reviews' onClick={handleModalOpen.bind(this, doctor)}>View Profile & Reviews</p>
              <button className='book-appointment-btn' onClick={handleAppointment.bind(this, doctor)}>Book Appointment</button>
            </div>) : null}
      </div>
      <Modal
        viewModal={modalState}
        closeModal={modalClose}
        data={selectedDoctor}
      />
    </div>
  )
}

export default OurDoctors
