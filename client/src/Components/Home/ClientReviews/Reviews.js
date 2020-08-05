import React from 'react'
import { FrontImage, AllisonSmith, JamesMadison } from '../../../Assets/Images/exports'
import ReviewStars from './ReviewStars'

export const FirstReview = () => {
  return (
    <>
      <div className='clientImage-container'>
        <img src={AllisonSmith} className='reviewers-image' alt='reviewer image' />
      </div>
      <div className='review-wrapper'>
        <h1>Isral Hadero</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        </p>
        <ReviewStars />
      </div>
    </>
  )
}

export const SecondReview = () => {
  return (
    <>
      <div className='clientImage-container'>
        <img src={JamesMadison} className='reviewers-image' alt='reviewer image' />
      </div>
      <div className='review-wrapper'>
        <h1>Isral Hadero</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        </p>
        <ReviewStars />
      </div>
    </>
  )
}

export const ThirdReview = () => {
  return (
    <>
      <div className='clientImage-container'>
        <img src={FrontImage} className='reviewers-image' alt='reviewer image' />
      </div>
      <div className='review-wrapper'>
        <h1>Isral Hadero</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        </p>
        <ReviewStars />
      </div>
    </>
  )
}
