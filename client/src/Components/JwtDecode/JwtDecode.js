import JwtDecode from 'jwt-decode'
const userToken = window.localStorage.getItem('token')

export const customerToken = () => {
  const decodeToken = JwtDecode(userToken)

  return decodeToken
}
