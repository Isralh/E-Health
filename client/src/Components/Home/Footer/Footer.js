import React, { useState, useEffect } from 'react'
import Links from './Links'
import ContactUs from './ContactUs'
import NewsLetter from './NewsLetter'
import Social from './Social'
import axios from 'axios'
import './Styles.scss'

const Footer = () => {
  /* state to hold newsletter email input */
  const [email, setEmail] = useState()

  /* function to get input value onChange */
  const getEmailInput = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  /* function to save email to the database */
  const signUp = async (e) => {
    e.preventDefault()

    const apiUrl = 'http://localhost:3002/api/signup/newsletters'

    const expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const value = expression.test(email)

    if (value === false) {
      window.alert('Please enter a valid e-mail address')
    } else {
      const postEmail = await axios.post(apiUrl, { email })

      try {
        if (postEmail.status === 200) window.alert(postEmail.data.message)
        if (postEmail.status === 201) window.alert(postEmail.data.message)
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <footer className='footer-container'>
      <Links />
      <ContactUs />
      <NewsLetter
        handleChange={getEmailInput}
        handleSignUp={signUp}
      />
      <Social />
    </footer>
  )
}

export default Footer
