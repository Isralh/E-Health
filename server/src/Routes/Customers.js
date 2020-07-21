const router = require('express').Router()
const registration = require('../Controller/Customers/Registration')
const login = require('../Controller/Customers/Login')
const postAppointments = require('../Controller/Customers/PostAppointment')
const getAppointments = require('../Controller/Customers/getAppointments')
const deleteAppointments = require('../Controller/Customers/DeleteAppointment')
const rescheduleAppointments = require('../Controller/Customers/RescheduleAppointment')
const jwtVerify = require('../Controller/JwtVerify/JwtVerify')

router.post('/post/register/customers', registration)
router.post('/post/login/customers', login)
router.post('/post/appointment', jwtVerify, postAppointments)
router.get('/get/customer/appointments/:id', jwtVerify, getAppointments)
router.delete('/delete/session/:id', jwtVerify, deleteAppointments)
router.patch('/update/appointment:id', jwtVerify, rescheduleAppointments)

module.exports = router
