import axios from 'axios'
const GetProvider = async () => {
  const providerChoice = window.localStorage
  const providerId = providerChoice.getItem('providerId')

  const apiUrl = `http://localhost:3002/api/get/provider/${providerId}`

  const allProviders = await axios.get(apiUrl)

  return allProviders
}

export default GetProvider
