import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FirstReview, SecondReview, ThirdReview } from './Reviews'
import './Styles.scss'

const ClientReviews = () => {
  const [index, setIndex] = useState(0)
  const [firstFlex, setFirstFlex] = useState(0)
  const [secondFlex, setSecondFlex] = useState(1)
  const allReviews = [<FirstReview />, <SecondReview />, <ThirdReview />]

  /* pagination for view less than 900px  width */
  const handleRight = () => {
    if (index < 2) {
      setIndex(prev => { return prev + 1 })
    } else setIndex(0)
  }

  const handleLeft = () => {
    if (index > 0) {
      setIndex(prev => { return prev - 1 })
    } else setIndex(2)
  }

  return (
    <div className='clientReviews-container'>
      <div className='clientReviews-content'>
        <div className='review-heading'>
          <h1>WHAT OUR CLIENTS SAY</h1>
        </div>
        <div className='clientReviews'>
          {allReviews[index]}
        </div>
        <div className='clientReviews-tablet'>
          <div className='review-first'>
            {allReviews[firstFlex]}
          </div>
          <div className='review-second'>
            {allReviews[secondFlex]}
          </div>
          <div className='review-third'>
            {allReviews[2]}
          </div>
        </div>
        <div className='pagination'>
          <button onClick={handleLeft}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className='btn'
            />
          </button>
          <button onClick={handleRight}>
            <FontAwesomeIcon
              icon={faArrowRight}
              className='btn'
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClientReviews
