const Providers = require('../../Models/Providers')
const Bcrypt = require('bcrypt')
const jwtToken = require('jsonwebtoken')
const jwtSecret = require('../../Config/JwtSecret')

const Registration = async (req, res) => {
  const clientData = req.body
  if (clientData.firstName.length < 3) return res.status(200).send({ message: 'First name must be 3 characters or more' })
  if (clientData.lastName.length < 3) return res.status(200).send({ message: 'Last name must be 3 characters or more' })
  if (clientData.password.length < 6) return res.status(200).send({ message: 'Password must be 6 characters or more' })
  if (clientData.password !== clientData.confirmPassword) return res.status(200).send({ message: 'Password must match' })
  if (clientData.education.length < 5) return res.status(200).send({ message: 'Education must be 5 characters or more' })
  if (clientData.summary.length < 20) return res.status(200).send({ message: 'Summary must be 20 characters or more' })
  if (!clientData.rate) return res.status(200).send({ message: 'please provide rate' })
  if (!clientData.resume) return res.status(200).send({ message: 'please provide resume' })
  if (!clientData.profilePicture) return res.status(200).send({ message: 'please provide profile picture' })

  const existingUsers = await Providers.findOne({
    where: { email: clientData.email }
  })
  try {
    if (existingUsers) return res.status(200).send({ message: 'email already exists' })
    Providers.create({
      first_name: clientData.firstName,
      last_name: clientData.lastName,
      email: (clientData.email).trim(),
      password: await Bcrypt.hash(clientData.password.trim(), 8),
      education: clientData.education,
      yearsOfExperience: clientData.experience,
      summary: clientData.summary,
      resume: clientData.resume,
      image: clientData.profilePicture,
      rate: clientData.rate
    }).then(provider => {
      const token = jwtToken.sign({
        userId: provider.id,
        firstName: provider.first_name,
        credential: provider.userType
      }, jwtSecret, {
        expiresIn: '5hr'
      })
      return res.status(201).send({ message: 'success', userToken: token })
    }).catch(e => {
      if (e) return res.status(500)
    })
  } catch (e) {
    if (e) return res.status(500)
  }
}

module.exports = Registration
