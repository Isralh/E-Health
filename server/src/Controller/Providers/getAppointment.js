const appointments = require('../../Models/Appointments')

const getAppointments = async (req, res) => {
  const providerId = req.params.id

  const appointment = await appointments.findAll({
    where: { provider_id: providerId }
  })

  try {
    if (appointment) return res.status(200).send(appointment)
    return res.status(204).send('No Appointment found')
  } catch (e) {
    return res.status(500)
  }
}

module.exports = getAppointments
