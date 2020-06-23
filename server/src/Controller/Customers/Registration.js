const customers = require('../../Models/Customers')
const Bcrypt = require('bcrypt')
const jwtToken = require('jsonwebtoken')
const jwtSecret = require('../../Config/JwtSecret')

/* validate if some of the inputs where the correct length */
const validateLength = (data, length, res, outputMessage) => {
  if (data.length < length) return res.status(200).send({ message: outputMessage })
}

/* confirm if passwords match */
const validateConfirmPassword = (password, confirmPassword, res) => {
  if (password !== confirmPassword) return res.status(200).send({ message: 'Passwords must match' })
}

const validateEmail = (email, res) => {
  const expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const value = expression.test(email)

  if (value === false) return res.status(200).send({ message: 'please provide a valid e-mail address' })
}
/* function to see if there is an existing user */
const existingUser = async (data, res, outputMessage) => {
  const existingCustomers = await customers.findOne({ where: { email: data.email } })
  if (existingCustomers) return res.status(200).send({ message: outputMessage })
}

/* function to add in the new user */
const addUser = async (data, res, outputMessage) => {
  customers.create({
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    password: await Bcrypt.hash(data.password, 8),
    confirmPassword: data.confirmPassword,
    userType: 'customer'
  }).then(customer => {
    const token = jwtToken.sign({
      userId: customer.id,
      firstName: customer.first_name,
      credential: 'customer'
    }, jwtSecret, {
      expiresIn: '2hr'
    })
    return res.status(201).send({ message: outputMessage, userToken: token })
  }).catch(e => { if (e) return res.status(500) })
}

const Registration = async (req, res) => {
  const customerData = req.body
  console.log(customerData)
  validateLength(customerData.firstName, 3, res, 'First Name has to be at least 3 characters')
  validateLength(customerData.lastName, 3, res, 'last Name has to be at least 3 characters')
  validateLength(customerData.password, 6, res, 'password has to be at least 6 characters')
  validateEmail(customerData.email, res)
  validateConfirmPassword(customerData.password, customerData.confirmPassword, res)
  try {
    existingUser(customerData, res, 'email already exists')
    addUser(customerData, res, 'user created successfully ')
  } catch (e) {
    if (e) return res.status(500)
  }
}

module.exports = Registration
