const providers = require('../../Models/Providers')
const jwtToken = require('jsonwebtoken')
const jwtSecret = require('../../Config/JwtSecret')
const bcrypt = require('bcrypt')

const loginProvider = async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body
  const existingProvider = await providers.findOne({
    where: { email: email }
  })
  try {
    if (!existingProvider) return res.status(200).send({ message: 'Email account does not exist' })
    if (existingProvider) {
      bcrypt.compare(password, existingProvider.password).then(result => {
        if (!result) return res.status(200).send({ message: 'Incorrect password' })

        if (result) {
          const token = jwtToken.sign({
            userId: existingProvider.id,
            firstName: existingProvider.first_name,
            role: 'provider'
          }, jwtSecret, { expiresIn: '5hrs' })
          return res.status(202).send({ message: 'success', token: token })
        }
      }).catch(e => { return res.status(500) })
    }
  } catch (e) {
    return res.status(500)
  }
}

module.exports = loginProvider
