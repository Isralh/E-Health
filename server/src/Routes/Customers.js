const router = require('express').Router()
const registration = require('../Controller/Customers/Registration')
const login = require('../Controller/Customers/Login')

router.post('/post/register/customers', registration)
router.post('/post/login/customers', login)

module.exports = router
