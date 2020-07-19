const router = require('express').Router()
const registration = require('../Controller/Customers/Registration')
const login = require('../Controller/Customers/Login')
const postAppointments = require('../Controller/Customers/PostAppointment')
const getAppointments = require('../Controller/Customers/getAppointments')
const deleteAppointments = require('../Controller/Customers/DeleteAppointment')
const rescheduleAppointments = require('../Controller/Customers/RescheduleAppointment')

router.post('/post/register/customers', registration)
router.post('/post/login/customers', login)
router.post('/post/appointment', postAppointments)
router.get('/get/customer/appointments/:id', getAppointments)
router.delete('/delete/session/:id', deleteAppointments)
router.patch('/update/appointment:id', rescheduleAppointments)

module.exports = router
