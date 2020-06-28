const router = require('express').Router()
const postAppointments = require('../Controller/Appointments/PostAppointment')

router.post('/post/appointment', postAppointments)

module.exports = router
