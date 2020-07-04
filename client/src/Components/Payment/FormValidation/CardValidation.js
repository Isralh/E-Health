export const validateCardNumber = (number, setError) => {
  return number.length !== 16 ? setError(prev => ({ ...prev, number: '*Card number must be 16 digits' }))
    : setError(prev => ({ ...prev, number: null }))
}

export const validateName = (name, setError) => {
  return name.length < 3 ? setError(prev => ({ ...prev, name: '*Name must be at least 3 characters' }))
    : setError(prev => ({ ...prev, name: null }))
}

export const validateExpiry = (expiry, setError) => {
  return expiry.length !== 4 ? setError(prev => ({ ...prev, expiry: '*Expiry date must be 4 digits' }))
    : setError(prev => ({ ...prev, expiry: null }))
}
export const validateCVC = (CVC, setError) => {
  return CVC.length !== 3 ? setError(prev => ({ ...prev, cvc: '*CVC code must be 3 digits' }))
    : setError(prev => ({ ...prev, cvc: null }))
}
export const validateZip = (zip, setError) => {
  return zip.length < 5 ? setError(prev => ({ ...prev, zip: '*Zipcode must be at least 5 characters' }))
    : setError(prev => ({ ...prev, zip: null }))
}
