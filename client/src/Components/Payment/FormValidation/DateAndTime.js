export const validateDate = (input, setError) => {
  return input.length < 1 ? setError(prev => ({ ...prev, date: '*Please select appointment Date' }))
    : setError(prev => ({ ...prev, date: null }))
}

export const validateTime = (input, setError) => {
  return input.length < 1 ? setError(prev => ({ ...prev, time: '*Please select appointment time' }))
    : setError(prev => ({ ...prev, time: null }))
}
