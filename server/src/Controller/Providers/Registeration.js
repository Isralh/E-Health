const Providers = require('../../Models/Providers')
const Bycrypt = require('bcrypt')
const jwtToken = require('jsonwebtoken')
const jwtSecret = require('../../Config/JwtSecret')
const validatData = (data, res, outPutMessage) => {
  if (!data) {
    return res.status(204).send({ message: outPutMessage })
  }
}
const validateLength = (data, res, outPutMessage) => {
  if (data) {
    return res.status(204).send({ message: outPutMessage })
  }
}
const validatePassword = (password, confirmPassword, res, outPutMessage) => {
  if (confirmPassword !== password) {
    return res.status(204).send({ message: outPutMessage })
  }
}

const Registeration = async (req, res) => {
  const clientData = await req.body
  validatData(clientData, res, 'data is missing')
  validateLength(clientData.firstName.length < 3, res, 'First name must be 3 characters or more')
  validateLength(clientData.lastName.length < 3, res, 'Last name must be 3 characters or more')
  // validateLength(clientData.email.length < 3, res, 'Please enter correct e-mail')
  validateLength(clientData.password.length < 6, res, 'Password must be 6 characters or more')
  validatePassword(clientData.password, clientData.confirmPassword, res, 'Passwords must match')
  validateLength(clientData.education.length < 5, res, 'Education must be 5 characters or more')
  validatData(clientData.experience, res, 'Experience is missing')
  validateLength(clientData.summary.length < 20, res, 'Summary must be 20 characters or more')
  validatData(clientData.rate, res, 'Rate is missing')
  validatData(clientData.resume, res, 'Resume is missing')
  validatData(clientData.profilePicture, res, 'Profile picture is missing')
  const existingUsers = await Providers.findOne({
    where: { email: clientData.email }
  })
  try {
    if (existingUsers) return res.status(200).send({ message: 'email already exists' })
    Providers.create({
      first_name: clientData.firstName,
      last_name: clientData.lastName,
      email: clientData.email,
      password: await Bycrypt.hash(clientData.password, 8),
      education: clientData.education,
      yearsOfExperience: clientData.experience,
      summary: clientData.summary,
      resume: clientData.resume,
      image: clientData.profilePicture,
      rate: clientData.rate
    }).then(provider => {
      const token = jwtToken.sign({
        userId: provider.id,
        firstName: provider.first_name
      }, jwtSecret, {
        expiresIn: '2hr'
      })
      return res.status(201).send({ message: 'success', userToken: token })
    }).catch(e => {
      return res.status(500)
    })
  } catch (e) {
    return res.status(500)
  }
}

module.exports = Registeration
