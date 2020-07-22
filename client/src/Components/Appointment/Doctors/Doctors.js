import React, { useEffect, useState, createContext } from 'react'
import Image from '../Image/Image'
import Description from '../Description/Description'
import Modal from '../Modal/Modal'
import { useHistory } from 'react-router-dom'
import { DoctorRating } from '../DoctorRating/DoctorRating'
import Loading from './Loading'
import axios from 'axios'
import './styles.scss'

export const doctorContext = createContext()
const Doctors = () => {
  /* customer token */
  const customerToken = window.localStorage.getItem('token')

  /* state to toggle modal open and close */
  const [modalState, setModalState] = useState(false)

  /* state to put all of our doctors information in */
  const [doctors, setDoctors] = useState()

  /* state to hold the selected doctor on view profile */
  const [selectedDoctor, setSelectedDoctor] = useState()

  /* state to hold loading status */
  const [loading, setLoading] = useState({
    class: 'loading-container',
    view: true
  })

  /* state to hold doctor's container class */
  const [doctorsClassName, setDoctorsClassName] = useState('doctors-container-none')

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

  /* on initial render get all of the doctors from our database */
  useEffect(() => {
    const getProviders = async () => {
      const apiUrl = 'http://localhost:3002/api/get/provider/AllProviders'

      const allProviders = await axios.get(apiUrl)

      try {
        if (allProviders.status === 200) {
          setLoading({ view: false, class: 'loading-container-none' })
          setDoctorsClassName('doctors-container')
          setDoctors(allProviders.data)
        }
        if (allProviders.status === 500) return history.push('/500')
      } catch (e) {
        return history.push('/500')
      }
    }
    getProviders()
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
  const history = useHistory()
  const bookDoctor = (doctor) => {
    doctorId.setItem('providerId', doctor.id)
    redirectUser()
  }

  /* state to hold user's doctor rating and Id, data used to post rating to the database */
  const [givenRating, setGivenRating] = useState()
  const [ratedDoctorId, setRatedDoctorId] = useState()

  /* function to get the doctor Id */
  const getDoctorId = (doctor) => {
    setRatedDoctorId(doctor.id)
  }

  /* function to get the rating given to the doctor */
  const getRating = (e) => {
    if (user !== null) {
      setGivenRating(e.currentTarget.id)
    } else window.alert('You must be signed in to rate doctor!')
  }

  /* post rating to the database */
  useEffect(() => {
    const apiUrl = 'http://localhost:3002/api/post/provider/rating'

    const postRating = async () => {
      if (givenRating !== undefined && ratedDoctorId !== undefined) {
        const data = { rating: givenRating, doctorId: ratedDoctorId }

        const response = await axios.post(apiUrl, data,
          { headers: { Authorization: `Bearer ${customerToken}` } })
        try {
          if (response.status === 200) return window.alert(response.data.message)
          if (response.status === 500) return history.push('/500')
        } catch (e) {
          return history.push('/500')
        }
      }
    }

    postRating()
  }, [givenRating, ratedDoctorId])

  return (
    <div className='list-container'>
      {loading.view === true ? <Loading loadingState={loading} loadingClass={loading.class} />
        : doctors !== undefined ? doctors.map(doctor =>
          <div key={doctor.id} className={doctorsClassName}>
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
