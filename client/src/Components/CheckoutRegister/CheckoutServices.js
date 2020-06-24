import axios from 'axios'

/* Api endpoint from the backend to get all of our providers(doctors) */
const Services = async (id) => {
  const apiUrl = `http://localhost:3002/api/get/provider/${id}`

  const allProviders = await axios.get(apiUrl)

  return allProviders
}

export default Services
