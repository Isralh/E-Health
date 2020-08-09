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
        <h1>Aiko Lee</h1>
        <p>" I've always been able to talk to my doctor and get my problems resolved.
        Talking to my doctor at E-Health is like dealing with a trusted family.
        I Would not consider changing doctor or healthcare provider anytime soon."
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
        <h1>Xavier Fernandez</h1>
        <p>" I'm pleased with the treatment I've received at E-Health and so grateful that
        I'm able to get quality health care treatment from the comfort of my home. The doctors
        at E-Health are easy to talk to and helped me solve my problems. "
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
        <h1>Jasmine Harris</h1>
        <p>" I have used E-Health for a couple years and have always been very satisfied with
        the care and attention that I have received. The doctor's are very attentive and experts
        at what they do, one of the best in the country."
        </p>
        <ReviewStars />
      </div>
    </>
  )
}
