export const validateDate = (input, setError) => {
  if (input === null) {
    setError(prev => ({ ...prev, date: '*Please select appointment date' }))
  } else if (input !== null && input.length < 1) {
    setError(prev => ({ ...prev, date: '*Please select appointment date' }))
  } else setError(prev => ({ ...prev, date: null }))
}

export const validateTime = (input, setError) => {
  if (input === 'Choose Time') {
    setError(prev => ({ ...prev, time: '*Please select appointment time' }))
  } else if (input.length < 1) {
    setError(prev => ({ ...prev, time: '*Please select appointment time' }))
  }
}
