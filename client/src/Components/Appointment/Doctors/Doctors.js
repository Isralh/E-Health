import React, { useEffect, useState, createContext } from 'react'
import { getProviders, postRating } from './Services'
import Image from '../Image/Image'
import Description from '../Description/Description'
import Modal from '../Modal/Modal'
import { useHistory } from 'react-router-dom'
import { DoctorRating } from '../DoctorRating/DoctorRating'
import './styles.scss'

export const doctorContext = createContext()
const Doctors = () => {
  /* state to toggle modal open and close */
  const [modalState, setModalState] = useState(false)

  /* state to put all of our doctors information in */
  const [doctors, setDoctors] = useState()

  /* state to hold the selected doctor on view profile */
  const [selectedDoctor, setSelectedDoctor] = useState()

  /* fetch the rating data from the database and show doctor's rating in orange starts */
  const viewRating = (doctor) => {
    return parseInt((doctor.rating / doctor.ratingCount).toFixed(0))
  }

  /* show doctor's rating in number based on their rating */
  const doctorRate = (doctor) => {
    if (parseInt((doctor.rating / doctor.ratingCount).toFixed(0)) === 5) {
      return '5.0'
    } else if (parseInt((doctor.rating / doctor.ratingCount).toFixed(0)) === 4) {
      return '4.0'
    } else if (parseInt((doctor.rating / doctor.ratingCount).toFixed(0)) === 3) {
      return '3.0'
    } else if (parseInt((doctor.rating / doctor.ratingCount).toFixed(0)) === 2) {
      return '2.0'
    } else if (parseInt((doctor.rating / doctor.ratingCount).toFixed(0)) === 1) {
      return '1.0'
    }
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

  useEffect(() => {
    if (doctors !== undefined) {
      doctors.map(doctor => {
        console.log(parseInt((doctor.rating / doctor.ratingCount).toFixed(0)))
      })
    }
  }, [doctors])

  /* state to hold user's doctor rating */
  const [givenRating, setGivenRating] = useState()
  const [ratedDoctorId, setRatedDoctorId] = useState()

  const getDoctorId = (doctor) => {
    setRatedDoctorId(doctor.id)
  }

  const getRating = (e) => {
    setGivenRating(e.currentTarget.id)
  }

  /* post rating to the database */
  useEffect(() => {
    if (givenRating !== undefined && ratedDoctorId !== undefined) {
      postRating(givenRating, ratedDoctorId)
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }
  }, [givenRating, ratedDoctorId])
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
            showRating={DoctorRating(viewRating(doctor), getRating)}
            doctorRating={doctorRate(doctor)}
            showModal={openModal.bind(this, doctor)}
            handleBooking={bookDoctor.bind(this, doctor)}
            handleDoctorInfo={getDoctorId.bind(this, doctor)}
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
