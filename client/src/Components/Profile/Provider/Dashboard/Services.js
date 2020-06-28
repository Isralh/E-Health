import axios from 'axios'

/* api endpoint to get provider's existing appointments */
export const GetAppointment = (id) => {
  const apiUrl = `http://localhost:3002/api/get/provider/appointments/${id}`

  const appointments = axios.get(apiUrl)

  return appointments
}
