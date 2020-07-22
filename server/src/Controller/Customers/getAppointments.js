const appointments = require('../../Models/Appointments')

const getAppointments = async (req, res) => {
  const customerId = req.params.id

  const appointment = await appointments.findAll({
    where: { customer_id: customerId }
  })

  try {
    if (appointment) return res.status(200).send(appointment)
    return res.status(204).send('No Appointment found')
  } catch (e) {
    return res.status(500).send({ message: 'server error' })
  }
}

module.exports = getAppointments
