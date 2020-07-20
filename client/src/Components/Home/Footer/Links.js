import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div className='links-container'>
      <header className='links-heading'>
        <h1>Useful Links</h1>
      </header>
      <div className='links-content'>
        <p><Link to='/' className='page-link'>Home</Link></p>
        <p><Link to='/bookAppointment' className='page-link'>Book Appointment</Link></p>
        <p><Link to='/customer/login' className='page-link'>Login</Link></p>
        <p><Link to='/createAccount' className='page-link'>Register</Link></p>
      </div>
    </div>
  )
}

export default Links
