export const validateCardNumber = (numbers, setError) => {
  return numbers.length < 16 ? setError('Card number has to be at least 16 characters') : setError(null)
}

export const validateName = (name, setError) => {
  return name.length < 3 ? setError('Name has to be at least 3 characters') : setError(null)
}

export const validateExpiry = (expiry, setError) => {
  return expiry.length < 4 ? setError('Name has to be at least 4 characters') : setError(null)
}
