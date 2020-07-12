import React, { useState, useEffect } from 'react'
import { ErickKnight, ZachSmith } from '../../../Assets/Images/exports'
import Modal from '../../Appointment/Modal/Modal'
import axios from 'axios'
import './Styles.scss'

const OurDoctors = () => {
  const [doctors, setDoctors] = useState()

  const getAllDoctors = async () => {
    const apiUrl = 'http://localhost:3002/api/get/provider/AllProviders'
    const allProviders = await axios.get(apiUrl)
    try {
      if (allProviders.status === 200) {
        setDoctors(allProviders.data)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getAllDoctors()
  }, [])

  useEffect(() => {
    console.log(doctors)
  }, [doctors])

  /* state to toggle modal open and close */
  const [modalState, setModalState] = useState(false)

  /* state to hold modal data */
  const [selectedDoctor, setSelectedDoctor] = useState()

  /* function to open modal */
  const handleModalOpen = (doctor) => {
    setSelectedDoctor(doctor)
    setModalState(true)
  }
  /* function to close modal */
  const modalClose = () => {
    setModalState(false)
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
              <button className='book-appointment-btn'>Book Appointment</button>
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
