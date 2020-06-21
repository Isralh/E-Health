import React, { useEffect, useState } from 'react'
import Services from './Services'
import Image from '../Image/Image'
import Description, { FiveStar, FourStar } from '../Description/Description'
import './styles.scss'
const Doctors = () => {
  const [doctors, setDoctors] = useState()
  const rateDoctor = (doctor) => {
    return doctor.rate < 120 ? '4.0' : '5.0'
  }
  const viewRating = (doctor) => {
    return doctor.rate < 120 ? <FourStar /> : <FiveStar />
  }
  // on page load get all of the doctors from our database
  useEffect(() => {
    Services()
      .then(data => { if (data.status === 200) { setDoctors(data.data) } })
      .catch(e => console.log(e))
  }, [])

  useEffect(() => {

  }, [doctors])
  return (
    <div className='list-container'>
      {doctors !== undefined ? doctors.map(doctor =>
        <div key={doctor.id} className='doctors-container'>
          <Image doctorsImage={doctor.image} />
          <Description
            firstName={doctor.first_name}
            lastName={doctor.last_name}
            showRating={viewRating(doctor)}
            doctorRating={rateDoctor(doctor)}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Doctors
