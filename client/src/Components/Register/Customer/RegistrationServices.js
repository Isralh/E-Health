import axios from 'axios'

/* customer registration */
const registerCustomer = 'http://localhost:3002/api/post/register/customers'

const RegistrationServices = async (formData) => {
  const postRegistration = await axios.post(registerCustomer, formData)

  return postRegistration
}

export default RegistrationServices
