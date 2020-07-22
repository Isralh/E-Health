const Appointments = require('../../Models/Appointments')

const RescheduleAppointments = async (req, res) => {
  const appointmentId = req.params.id
  const { date, time } = req.body

  const appointment = await Appointments.findByPk(appointmentId)

  try {
    if (!appointment) return res.status(404).send({ message: 'appointment not found' })
    if (appointment) {
      const newAppointment = await appointment.update({ date, time })
      try {
        if (newAppointment) return res.status(201).send({ message: 'successfully updated' })
      } catch (e) {
        return res.status(500).send({ message: 'server error' })
      }
    }
  } catch (e) {
    return res.status(500).send({ message: 'server error' })
  }
}

module.exports = RescheduleAppointments
