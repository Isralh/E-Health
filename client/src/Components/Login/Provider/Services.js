import axios from 'axios'

/* api endpoint to provider's login info and signs in the provider */

const apiUrl = 'http://localhost:3002/api/post/login/provider'

const LoginProvider = async (data) => {
  const loginResponse = await axios.post(apiUrl, data)

  return loginResponse
}

export default LoginProvider
