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
export const validateConfirmPassword = (confirmPassword, state) => {
  return (
    confirmPassword.length < 6 ? state(prev => { return { ...prev, confirmPassword: 'Passwords must match' } })
      : state(prev => { return { ...prev, confirmPassword: null } })
  )
}

export const validateErrors = (firstName, lastName, email, password, confirmPassword, state) => {
  if ((!firstName) && (!lastName) && (!email) && (!password) && (!confirmPassword)) {
    state(true)
  } else state(false)
}
