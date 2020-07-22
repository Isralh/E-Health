import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Styles.scss'

export const DoctorRating = (rating, handleValue) => {

  if (rating === 5) {
    return (
      <>
        <span className='checked' id={1} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='checked' id={2} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='checked' id={3} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='checked' id={4} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='checked' id={5} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
      </>
    )
  }
  if (rating === 4) {
    return (
      <>
        <span className='checked' id={1} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='checked' id={2} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='checked' id={3} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='checked' id={4} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='unchecked' id={5} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
      </>
    )
  }
  if (rating === 3) {
    return (
      <>
        <span className='checked' id={1} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='checked' id={2} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='checked' id={3} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='unchecked' id={4} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='unchecked' id={5} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
      </>
    )
  }
  if (rating === 2) {
    return (
      <>
        <span className='checked' id={1} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='checked' id={2} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='unchecked' id={3} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='unchecked' id={4} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='unchecked' id={5} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
      </>
    )
  }
  if (rating === 1) {
    return (
      <>
        <span className='checked' id={1} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='unchecked' id={2} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='unchecked' id={3} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='unchecked' id={4} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='unchecked' id={5} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
      </>
    )
  }
}
