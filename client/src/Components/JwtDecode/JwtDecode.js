import JwtDecode from 'jwt-decode'
const userToken = window.localStorage.getItem('customerToken')

export const customerToken = () => {
  const decodeToken = JwtDecode(userToken)

  return decodeToken
}
