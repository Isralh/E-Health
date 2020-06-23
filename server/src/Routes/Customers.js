const router = require('express').Router()
const Registration = require('../Controller/Customers/Registration')

router.post('/post/register/customers', Registration)

module.exports = router
