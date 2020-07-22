const customers = require('../../Models/Customers')
const Bcrypt = require('bcrypt')
const jwtToken = require('jsonwebtoken')
const jwtSecret = require('../../Config/JwtSecret')

/* function to handle the registration process */
const Registration = async (req, res) => {
  const customerData = req.body
  console.log(customerData)
  /* check if customer already exists if not create a new customer */
  const existingCustomers = await customers.findOne({ where: { email: customerData.email } })
  try {
    if (existingCustomers) return res.status(200).send({ message: 'email already exists' })
    if (customerData.password !== customerData.confirmPassword) return res.status(200).send({ message: 'passwords must match' })
    customers.create({
      first_name: customerData.firstName,
      last_name: customerData.lastName,
      email: customerData.email,
      password: await Bcrypt.hash(customerData.password.trim(), 8),
      userType: 'customer'
    }).then(customer => {
      const token = jwtToken.sign({
        userId: customer.id,
        firstName: customer.first_name,
        lastName: customer.last_name,
        role: 'customer'
      }, jwtSecret.secret, { expiresIn: '5hr' })
      return res.status(201).send({ message: 'success', token: token })
    }).catch(e => { return res.status(500).send({ message: 'server error' }) })
  } catch (e) {
    return res.status(500).send({ message: 'server error' })
  }
}
module.exports = Registration
