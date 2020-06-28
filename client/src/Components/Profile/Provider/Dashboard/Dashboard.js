import React from 'react'
import NavBar from '../../../Home/NavBar/NavBar'
import { StartSession } from './Button'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <NavBar />
      <StartSession />
    </div>
  )
}

export default Dashboard
