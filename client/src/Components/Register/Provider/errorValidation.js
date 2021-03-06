export const validateFirstName = (firstName, state) => {
  return (
    firstName.length < 3 ? state(prev => { return { ...prev, firstName: 'Required 3 characters or more' } })
      : state(prev => { return { ...prev, firstName: null } })
  )
}

export const validateLastName = (lastName, state) => {
  return (
    lastName.length < 3 ? state(prev => { return { ...prev, lastName: 'Required 3 characters or more' } })
      : state(prev => { return { ...prev, lastName: null } })
  )
}

export const validatePassWord = (password, state) => {
  return (
    password.length < 6 ? state(prev => { return { ...prev, password: 'Required at least 6 characters or more' } })
      : state(prev => { return { ...prev, password: null } })
  )
}
export const validateConfirmPassword = (password, confirmPassword, state) => {
  return (
    password !== confirmPassword ? state(prev => { return { ...prev, confirmPassword: 'Passwords must match' } })
      : state(prev => { return { ...prev, confirmPassword: null } })
  )
}

export const validateFirstForm = (error, state) => {
  if ((!error.firstName) && (!error.lastName) && (!error.email) && (!error.password) && (!error.confirmPassword)) {
    state(true)
  } else state(false)
}
export const validateEducation = (education, state) => {
  return (
    education.length < 5 ? state(prev => { return { ...prev, education: 'Required 5 characters or more' } })
      : state(prev => { return { ...prev, education: null } })
  )
}
export const validateExperience = (experience, state) => {
  return (
    (!experience) ? state(prev => { return { ...prev, experience: 'Experience required' } })
      : state(prev => { return { ...prev, experience: null } })
  )
}
export const validateRates = (rate, state) => {
  return (
    (!rate) ? state(prev => { return { ...prev, rate: 'rates required' } })
      : state(prev => { return { ...prev, rate: null } })
  )
}
export const validateSummary = (summary, state) => {
  return (
    summary.length < 20 ? state(prev => { return { ...prev, summary: 'Required 20 characters or more' } })
      : state(prev => { return { ...prev, summary: null } })
  )
}
export const validateImages = (image, state) => {
  return (
    image === null ? window.alert('please upload profile picture')
      : state(prev => { return { ...prev, profilePicture: null } })
  )
}
export const validateResume = (resume, state) => {
  return (
    resume === null ? window.alert('please upload resume')
      : state(prev => { return { ...prev, resume: null } })
  )
}
export const validateImageFiles = (file, fileNameState, fileState) => {
  if (!file.name.includes('.jpg') && !file.name.includes('.png') && !file.name.includes('.jpeg')) {
    return window.alert('please select correct file type')
  } else if (file.size > 1000000) {
    return window.alert('File size has to be less than 1mb')
  } else {
    fileNameState(prev => { return { ...prev, image: file.name } })
    fileState(file)
  }
}

export const validateResumeFiles = (file, fileNameState, fileState) => {
  if (!file.name.includes('.pdf') && !file.name.includes('.doc')) {
    return window.alert('please select correct file type')
  } else if (file.size > 1000000) {
    return window.alert('File size has to be less than 1mb')
  } else {
    fileNameState(prev => { return { ...prev, resume: file.name } })
    fileState(file)
  }
}

// if (!errors.education && !errors.experience && !errors.profilePicture && !errors.rate && !errors.resume && !errors.summary) {
// setIsSubmitting(prev => { return { ...prev, aws: true } })

export const validateSecondForm = (error, state) => {
  if (!error.education && !error.experience && !error.profilePicture && !error.rate && !error.resume && !error.summary) {
    state(prev => { return { ...prev, aws: true } })
  }
}
