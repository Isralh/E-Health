import axios from 'axios'
const Services = async (formData) => {
  const apiEndpoint = 'http://localhost:3002/api/post/register/customers'

  const postRegistration = await axios.post(apiEndpoint, formData)

  return postRegistration
}

export default Services
