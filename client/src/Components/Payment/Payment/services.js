import axios from 'axios'

/* Api endpoint to get selected provider(doctor) */
export const getProviderById = async (providerId) => {
  const apiUrl = `http://localhost:3002/api/get/provider/${providerId}`

  const provider = await axios.get(apiUrl)

  return provider
}

/* Api endpoint to post scheduled appointments */

export const postAppointment = async (data) => {
  const apiUrl = 'http://localhost:3002/api/post/appointment'

  const schedule = await axios.post(apiUrl, data)

  return schedule
}
