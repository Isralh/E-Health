import React, { useEffect, useState, createContext } from 'react'
import Services from './Services'
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
    setModalState(true)
    setSelectedDoctor(doctor)
  }

  /* function to close modal */
  const modalClose = () => {
    setModalState(false)
  }

  /* on page load get all of the doctors from our database */
  useEffect(() => {
    Services()
      .then(data => { if (data.status === 200) { setDoctors(data.data) } })
      .catch(e => console.log(e))
  }, [])

  /* function to start the booking process */
  const doctorChoice = window.localStorage
  const history = useHistory()
  const bookDoctor = (doctor) => {
    doctorChoice.setItem('doctor', doctor.id)
    history.push('/checkoutRegister')
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
        />
      </doctorContext.Provider>
    </div>
  )
}

export default Doctors
