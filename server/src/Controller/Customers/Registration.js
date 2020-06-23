const customers = require('../../Models/Customers')
const Bcrypt = require('bcrypt')
const jwtToken = require('jsonwebtoken')
const jwtSecret = require('../../Config/JwtSecret')
const { verify } = require('jsonwebtoken')

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

/* function to add in the new customer and add authentication using jwtToken */
const addCustomer = async (data, res) => {
  /* hash the password first and create the new customer */
  let hashedPassword
  Bcrypt.hash(data.password.trim(), 8, (err, hash) => {
    if (err) throw err
    hashedPassword = hash
  })
  customers.create({
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email.trim(),
    password: hashedPassword
  }).then(customer => {
    jwtToken.sign({
      userId: customer.id,
      firstName: customer.first_name,
      credential: customer.userType
    }, jwtSecret, { expiresIn: '5hr' }, (err, token) => {
      if (err) throw new Error('error with the authentication process')
      return res.status(201).send({ message: 'user created successfully', userToken: token })
    })
  }).catch(e => { if (e) return res.status(500) })
}

/* function to handle the registration process */
const Registration = async (req, res) => {
  const customerData = req.body

  /* validate user input and send if there are any errors */
  validateLength(customerData.firstName, 3, res, 'First Name has to be at least 3 characters')
  validateLength(customerData.lastName, 3, res, 'last Name has to be at least 3 characters')
  validateLength(customerData.password, 6, res, 'password has to be at least 6 characters')
  validateEmail(customerData.email, res)
  validateConfirmPassword(customerData.password, customerData.confirmPassword, res)

  /* check if customer already exists if not create a new customer */
  const existingCustomers = await customers.findOne({ where: { email: customerData.email } })
  try {
    if (existingCustomers) return res.status(200).send({ message: 'email already exists' })
    addCustomer(customerData, res)
  } catch (e) {
    if (e) return res.status(500)
  }
}

module.exports = Registration
