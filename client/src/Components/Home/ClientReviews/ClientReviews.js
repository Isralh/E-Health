import React, { useState } from 'react'
import ReviewStars from './ReviewStars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FirstReview, SecondReview, ThirdReview } from './Reviews'
import './Styles.scss'

const ClientReviews = () => {
  const [index, setIndex] = useState(0)
  const [secondIndex, setSecondIndex] = useState(1)
  const allReviews = [<FirstReview />, <SecondReview />, <ThirdReview />]
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
          <div className='review-flex-first'>
            {allReviews[index]}
          </div>
          <div className='review-flex-second'>
            {allReviews[secondIndex]}
          </div>
        </div>
        <div className='pagination'>
          <button>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ fontSize: '18px' }}
              onClick={handleLeft}
              className='left-btn'
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ fontSize: '18px' }}
              onClick={handleRight}
              className='right-btn'
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClientReviews
