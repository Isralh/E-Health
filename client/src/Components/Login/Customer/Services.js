import axios from 'axios'

const apiUrl = 'http://localhost:3002/api/post/login/customers'

const LoginCustomer = async (data) => {
  const loginResponse = await axios.post(apiUrl, data)

  return loginResponse
}

export default LoginCustomer
