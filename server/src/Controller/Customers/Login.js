const customers = require('../../Models/Customers')
const jwtToken = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

const loginCustomer = async (req, res) => {
  const { email, password } = req.body
  const existingCustomer = await customers.findOne({
    where: { email: email }
  })
  try {
    if (!existingCustomer) return res.status(200).send({ message: 'Email account does not exist' })
    if (existingCustomer) {
      bcrypt.compare(password, existingCustomer.password).then(result => {
        if (!result) return res.status(200).send({ message: 'Incorrect password' })

        if (result) {
          const token = jwtToken.sign({
            userId: existingCustomer.id,
            firstName: existingCustomer.first_name,
            lastName: existingCustomer.last_name,
            role: 'customer'
          }, process.env.JWTSECRET, { expiresIn: '5hrs' })
          return res.status(202).send({ message: 'success', token: token })
        }
      }).catch(e => { return res.status(500).send({ message: 'server error' }) })
    }
  } catch (e) {
    return res.status(500).send({ message: 'server error' })
  }
}

module.exports = loginCustomer
