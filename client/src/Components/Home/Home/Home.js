import React from 'react'
import FrontView from '../FrontView/FrontView'
import OurDoctors from '../OurDoctors/OurDoctors'
import NavBar from '../../NavBar/NavBar'
import Convenient from '../Convenient/Convenient'
import './styles.scss'
const Home = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <FrontView />
      <OurDoctors />
      <Convenient />
    </div>
  )
}

export default Home
