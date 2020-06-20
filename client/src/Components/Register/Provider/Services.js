import axios from 'axios'

// function to upload image and resume to AWS s3
export const s3Uploader = async (formData) => {
  const imageData = await axios.post('http://localhost:3002/api/post/provider/uploadImageResume', formData)

  return imageData.data.data
}

/* After we get response from AWS upload all of the form data to the server, first check the form input
to see if the length of the resume and profilePicture is more than one if not it means we haven't gotten
response from AWS yet */
export const Registration = async (data) => {
  const registrationData = await axios.post('http://localhost:3002/api/post/provider/register', data)

  return registrationData
}
