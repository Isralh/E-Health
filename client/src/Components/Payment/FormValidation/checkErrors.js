/* pass the error states and checks if all of them equal null(meaning there are no errors in our input) */
export const checkErrors = (number, name, expiry, cvc, zip, date, time, reason) => {
  const inputs = [number, name, expiry, cvc, zip, date, time, reason]

  const nulls = inputs.some(item => {
    return item !== null
  })

  return nulls
}
