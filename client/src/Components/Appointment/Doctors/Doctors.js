import React, { useEffect, useState } from 'react'
import Services from './Services'
import Image from '../Image/Image'
import Description from '../Description/Description'
import './styles.scss'
const Doctors = () => {
  const [doctors, setDoctors] = useState()

  // on page load get all of the doctors from our database
  useEffect(() => {
    Services()
      .then(data => { if (data.status === 200) { setDoctors(data.data) } })
      .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    console.log(doctors)
    if (doctors !== undefined) {
      console.log(doctors.map(doctor => doctor.first_name))
    }
  }, [doctors])
  return (
    <div className='list-container'>
      {doctors !== undefined ? doctors.map(doctor =>
        <div key={doctor.id} className='doctors-container'>
          <Image doctorsImage={doctor.image} />
          <Description
            firstName={doctor.first_name}
            lastName={doctor.last_name}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Doctors
