export const validateCardNumber = (number, setError) => {
  if (number.length !== 16) {
    setError(prev => ({ ...prev, number: '*Card number must be 16 digits' }))
  } else if (!/^\d+$/.test(number)) {
    setError(prev => ({ ...prev, number: '*Card number must contain only numbers' }))
  } else setError(prev => ({ ...prev, number: null }))
}

export const validateName = (name, setError) => {
  if (name.length < 3) {
    setError(prev => ({ ...prev, name: '*Name must be at least 3 characters' }))
  } else setError(prev => ({ ...prev, name: null }))
}

export const validateExpiry = (expiry, setError) => {
  if (expiry.length !== 4) {
    setError(prev => ({ ...prev, expiry: '*Expiry date must be 4 digits' }))
  } else if (!/^\d+$/.test(expiry)) {
    setError(prev => ({ ...prev, expiry: '*Expiry date must contain only numbers' }))
  } else setError(prev => ({ ...prev, expiry: null }))
}
export const validateCVC = (CVC, setError) => {
  if (CVC.length !== 3) {
    setError(prev => ({ ...prev, cvc: '*CVC code must be 3 digits' }))
  } else if (!/^\d+$/.test(CVC)) {
    setError(prev => ({ ...prev, cvc: '*CVC code must contain only numbers' }))
  } else setError(prev => ({ ...prev, cvc: null }))
}
export const validateZip = (zip, setError) => {
  if (zip.length < 5) {
    setError(prev => ({ ...prev, zip: '*Zipcode must be at least 5 characters' }))
  } else if (!/^\d+$/.test(zip)) {
    setError(prev => ({ ...prev, zip: '*CVC code must contain only numbers' }))
  } else setError(prev => ({ ...prev, zip: null }))
}
