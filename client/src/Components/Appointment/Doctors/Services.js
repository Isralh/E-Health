import axios from 'axios'

/* Api endpoint to get all of our providers(doctors) */
export const getProviders = async () => {
  const apiUrl = 'http://localhost:3002/api/get/provider/AllProviders'

  const allProviders = await axios.get(apiUrl)

  return allProviders
}

/* Api endpoint to post doctor rating */

export const postRating = async (rating, doctorId) => {
  const data = { rating, doctorId }
  const apiUrl = 'http://localhost:3002/api/post/provider/rating'

  const postData = await axios.post(apiUrl, data)

  return postData
}
