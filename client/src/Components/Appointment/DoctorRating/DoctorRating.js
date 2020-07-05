import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Styles.scss'
export const DoctorRating = (rating, handleValue) => {
  // const handleValue = (e) => {
  //   console.log(e.currentTarget.id)
  // }
  const fiveStarClass = ('checked fiveStar')
  const fourStarClass = ('checked fourStar')
  const threeStarClass = ('checked threeStar')
  const twoStarClass = ('checked twoStar')
  const oneStarClass = ('checked oneStar')
  const fiveStarClassUnchecked = ('unchecked fiveStar')
  const fourStarClassUnchecked = ('unchecked fourStar')
  const threeStarClassUnchecked = ('unchecked threeStar')
  const twoStarClassUnchecked = ('unchecked twoStar')

  if (rating === 5) {
    return (
      <>
        <span className={oneStarClass} id={1} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className={twoStarClass} id={2} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className={threeStarClass} id={3} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className={fourStarClass} id={4} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className={fiveStarClass} id={5} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
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
        <span className={fiveStarClassUnchecked} id={5} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
      </>
    )
  }
  if (rating === 3) {
    return (
      <>
        <span className='checked' id={1} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='checked' id={2} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='checked' id={3} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className={fourStarClassUnchecked} id={4} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className={fiveStarClassUnchecked} id={5} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
      </>
    )
  }
  if (rating === 2) {
    return (
      <>
        <span className='checked' id={1} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className='checked' id={2} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className={threeStarClassUnchecked} id={3} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className={fourStarClassUnchecked} id={4} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className={fiveStarClassUnchecked} id={5} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
      </>
    )
  }
  if (rating === 1) {
    return (
      <>
        <span className='checked' id={1} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className={twoStarClassUnchecked} id={2} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className={threeStarClassUnchecked} id={3} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className={fourStarClassUnchecked} id={4} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
        <span className={fiveStarClassUnchecked} id={5} onClick={handleValue}><FontAwesomeIcon icon={faStar} /></span>
      </>
    )
  }
}
