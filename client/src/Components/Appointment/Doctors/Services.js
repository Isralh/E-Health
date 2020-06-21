import axios from 'axios'

const Services = async () => {
  const apiUrl = 'http://localhost:3002/api/get/provider/AllProviders'

  const allProviders = await axios.get(apiUrl)

  return allProviders
}

export default Services
