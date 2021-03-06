import React from 'react'
import FrontView from '../FrontView/FrontView'
import OurDoctors from '../OurDoctors/OurDoctors'
import NavBar from '../../NavBar/NavBar'
import OurMessage from '../OurMessage/OurMessage'
import QualitiesContainer from '../CompanyQualities/QualitiesContainer'
import ClientReviews from '../ClientReviews/ClientReviews'
import Footer from '../Footer/Footer'
import './styles.scss'

const Home = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <FrontView />
      <OurMessage />
      <QualitiesContainer />
      <OurDoctors />
      <ClientReviews />
      <Footer />
    </div>
  )
}

export default Home
