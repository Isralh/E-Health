const router = require('express').Router()
const Appointment = require('../Controller/Appointment/Appointment')

router.get('/session/:id', Appointment)

module.exports = router
