import React from 'react'
import Links from './Links'
import ContactUs from './ContactUs'
import NewsLetter from './NewsLetter'
import Social from './Social'
import './Styles.scss'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <Links />
      <ContactUs />
      <NewsLetter />
      <Social />
    </footer>
  )
}

export default Footer
