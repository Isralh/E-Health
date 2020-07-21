const jwt = require('jsonwebtoken')
const jwtSecret = require('../../Config/JwtSecret')
const jwtVerify = (req, res, next) => {
  console.log(req.headers)
  const authHeader = req.headers.authorization
  console.log(authHeader)
  if (authHeader === undefined) {
    return res.status(403).send({ message: 'forbidden' })
  } else {
    const token = authHeader.split(' ')[1]

    jwt.verify(token, jwtSecret.secret, (err, user) => {
      if (err) return res.status(403).send({ message: 'forbidden' })
      req.user = user
      next()
    })
  }
}

module.exports = jwtVerify
