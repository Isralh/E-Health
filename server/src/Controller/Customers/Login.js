const customers = require('../../Models/Customers')
const jwtToken = require('jsonwebtoken')
const jwtSecret = require('../../Config/JwtSecret')
const loginCustomer = async (req, res) => {
  const { email, password } = await req.body
  jwtToken.sign({
    email: email,
    password: password
  }, jwtSecret, { expiresIn: '5hr' }, (e, token) => {
    if (e) throw e
    return res.status(200).send({ token })
  })
}

module.exports = loginCustomer
