import axios from 'axios'

/* Api endpoint to get all of our providers(doctors) */
export const getProviders = async () => {
  const apiUrl = 'http://localhost:3002/api/get/provider/AllProviders'

  const allProviders = await axios.get(apiUrl)

  return allProviders
}

/* Api endpoint to get all of our providers(doctors) schedule */
export const getSchedule = async () => {
  const apiUrl = 'http://localhost:3002/api/get/provider/schedule'

  const schedule = await axios.get(apiUrl)

  return schedule
}
