import React from 'react'
import FrontView from '../FrontView/FrontView'
import OurDoctors from '../OurDoctors/OurDoctors'
import NavBar from '../../NavBar/NavBar'
import Convenient from '../Convenient/Convenient'
import './styles.scss'
import OurMessage from '../OurMessage/OurMessage'
import CompanyQualities from '../CompanyQualities/CompanyQualities'
const Home = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <FrontView />
      {/* <OurDoctors />
      <Convenient /> */}
      <OurMessage />
      <CompanyQualities />
    </div>
  )
}

export default Home
