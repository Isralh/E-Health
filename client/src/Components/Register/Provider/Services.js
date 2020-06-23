import axios from 'axios'

/* function to upload image and resume to AWS s3 */
const imageUploadUrl = 'http://localhost:3002/api/post/provider/uploadImageResume'
export const s3Uploader = async (formData) => {
  const imageData = await axios.post(imageUploadUrl, formData)

  return imageData.data.data
}

/* After we get response from AWS upload all of the form data to the server, first check the form input
to see if the length of the resume and profilePicture is more than one if not it means we haven't gotten
response from AWS yet */
const registrationUrl = 'http://localhost:3002/api/post/provider/register'
export const Registration = async (data) => {
  const registrationData = await axios.post(registrationUrl, data)

  return registrationData
}
