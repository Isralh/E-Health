import axios from 'axios'
const SharedServices = async () => {
  const doctorChoice = window.localStorage
  const doctorId = doctorChoice.getItem('doctorId')

  const apiUrl = `http://localhost:3002/api/get/provider/${doctorId}`

  const allProviders = await axios.get(apiUrl)

  return allProviders
}

export default SharedServices
