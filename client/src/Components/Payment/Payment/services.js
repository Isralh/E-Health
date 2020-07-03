import axios from 'axios'

const doctorChoice = window.localStorage
const doctorId = doctorChoice.getItem('doctorId')

export const providerId = doctorId

/* Api endpoint to get selected provider(doctor) */
export const getProviderById = async () => {
  const apiUrl = `http://localhost:3002/api/get/provider/${doctorId}`

  const allProviders = await axios.get(apiUrl)

  return allProviders
}

/* Api endpoint to get selected providers(doctors) schedule */
export const getSchedule = async () => {
  const apiUrl = `http://localhost:3002/api/get/provider/schedule/${doctorId}`

  const schedule = await axios.get(apiUrl)

  return schedule
}

/* Api endpoint to post scheduled appointments */

export const postAppointment = async (data) => {
  const apiUrl = 'http://localhost:3002/api/post/appointment'

  const schedule = await axios.post(apiUrl, data)

  return schedule
}
