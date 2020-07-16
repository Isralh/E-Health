const router = require('express').Router()
const deleteAppointments = require('../Controller/Customers/DeleteAppointment')
const rescheduleAppointments = require('../Controller/Customers/RescheduleAppointment')

router.delete('/delete/session/:id', deleteAppointments)
router.patch('/update/appointment:id', rescheduleAppointments)

module.exports = router
