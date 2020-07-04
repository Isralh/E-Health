const validateReason = (reason, setError) => {
  return reason.length < 20 ? setError('*Must be at least 20 characters')
    : setError(null)
}

export default validateReason
