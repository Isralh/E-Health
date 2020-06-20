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

export const validateErrors = (firstName, lastName, email, password, confirmPassword, state) => {
  if ((!firstName) && (!lastName) && (!email) && (!password) && (!confirmPassword)) {
    state(true)
  } else state(false)
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
