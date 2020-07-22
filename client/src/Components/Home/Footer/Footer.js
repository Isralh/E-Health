import React, { useState } from 'react'
import Links from './Links'
import ContactUs from './ContactUs'
import NewsLetter from './NewsLetter'
import Social from './Social'
import axios from 'axios'
import './Styles.scss'
import { useHistory } from 'react-router-dom'

const Footer = () => {
  /* state to hold newsletter email input */
  const [email, setEmail] = useState()

  /* function to get input value onChange */
  const getEmailInput = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  const history = useHistory()
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
        if (postEmail.status === 200) return window.alert(postEmail.data.message)
        if (postEmail.status === 201) return window.alert(postEmail.data.message)
        if (postEmail.status === 500) return history.push('/500')
      } catch (e) {
        return history.push('/500')
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
