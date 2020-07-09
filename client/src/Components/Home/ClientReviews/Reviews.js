import React from 'react'
import { ErickKnight, ZachSmith, FrontImage } from '../../../Assets/Images/exports'

const FirstReview = () => {
    <div className='clientReviews'>
    <div className='clientImage-container'>
      <img src={ErickKnight} className='reviewers-image' alt='reviewer image' />
    </div>
    <div className='review-wrapper'>
      <h1>Isral Hadero</h1>
      <p>" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. "
      </p>
      <ReviewStars />
    </div>
  </div>
}

export const Reviews
