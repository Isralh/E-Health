import React, { useEffect, useState } from 'react'
import Services from './Services'
const Doctors = () => {
  const [doctors, setDoctors] = useState()

  // on page load get all of the doctors from our database
  useEffect(() => {
    Services()
      .then(data => { if (data.status === 200) { setDoctors(data.data) } })
      .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    if (doctors !== undefined) {
      console.log(doctors.map(doctor => doctor.first_name))
    }
  }, [doctors])
  return (
    <div />
  )
}

export default Doctors
