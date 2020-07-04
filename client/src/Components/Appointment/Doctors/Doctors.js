import React, { useEffect, useState, createContext } from 'react'
import { getProviders } from './Services'
import Image from '../Image/Image'
import Description, { FiveStar, FourStar } from '../Description/Description'
import './styles.scss'
import Modal from '../Modal/Modal'
import { useHistory } from 'react-router-dom'

export const doctorContext = createContext()
const Doctors = () => {
  /* state to toggle modal open and close */
  const [modalState, setModalState] = useState(false)

  /* state to put all of our doctors information in */
  const [doctors, setDoctors] = useState()

  /* state to hold the selected doctor on view profile */
  const [selectedDoctor, setSelectedDoctor] = useState()

  /* mock rating system I came up with based on the doctors hourly rate */
  const rateDoctor = (doctor) => {
    return doctor.rate < 120 ? '4.0' : '5.0'
  }

  /* mock rating system I came up with based on the doctors hourly rate */
  const viewRating = (doctor) => {
    return doctor.rate < 120 ? <FourStar /> : <FiveStar />
  }

  /* function to open modal on click */
  const openModal = (doctor) => {
    setSelectedDoctor(doctor)
    setModalState(true)
  }

  /* function to close modal */
  const modalClose = () => {
    setModalState(false)
  }

  /* on page load get all of the doctors from our database */
  useEffect(() => {
    getProviders()
      .then(data => { if (data.status === 200) setDoctors(data.data) })
      .catch(e => console.log(e))
  }, [])

  /* check to see if users is signed in */
  const user = window.localStorage.getItem('token')

  /* when user tries to book doctor If user is signed in go to the payment section or direct them to create
  an account first in the checkoutRegister page */
  const redirectUser = () => {
    if (user !== null) {
      history.push('/payment')
    } else history.push('/checkoutRegister')
  }
  /* function to start the booking process */
  const doctorId = window.localStorage
  const doctorName = window.localStorage
  const history = useHistory()
  const bookDoctor = (doctor) => {
    doctorId.setItem('providerId', doctor.id)
    doctorName.setItem('doctorName', `${doctor.first_name}${doctor.last_name}`)
    redirectUser()
  }
  return (
    <div className='list-container'>
      {doctors !== undefined ? doctors.map(doctor =>
        <div key={doctor.id} className='doctors-container'>
          <Image
            doctorsImage={doctor.image}
          />
          <Description
            firstName={doctor.first_name}
            lastName={doctor.last_name}
            rates={doctor.rate}
            showRating={viewRating(doctor)}
            doctorRating={rateDoctor(doctor)}
            showModal={openModal.bind(this, doctor)}
            handleBooking={bookDoctor.bind(this, doctor)}
          />
          <button onClick={bookDoctor.bind(this, doctor)} className='tablet-book-btn'>Book</button>
        </div>
      ) : null}
      <doctorContext.Provider value={selectedDoctor}>
        <Modal
          viewModal={modalState}
          closeModal={modalClose}
          data={selectedDoctor}
        />
      </doctorContext.Provider>
    </div>
  )
}

export default Doctors
