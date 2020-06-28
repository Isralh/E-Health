const router = require('express').Router()
const registration = require('../Controller/Customers/Registration')
const login = require('../Controller/Customers/Login')
const postAppointments = require('../Controller/Customers/PostAppointment')
const getAppointments = require('../Controller/Customers/getAppointments')

router.post('/post/register/customers', registration)
router.post('/post/login/customers', login)
router.post('/post/appointment', postAppointments)
router.get('/get/customer/appointments/:id', getAppointments)

module.exports = router
