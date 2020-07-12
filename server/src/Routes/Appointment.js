const router = require('express').Router()
const deleteAppointments = require('../Controller/Customers/DeleteAppointment')

router.delete('/delete/session/:id', deleteAppointments)
module.exports = router
