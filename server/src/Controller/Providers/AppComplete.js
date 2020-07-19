const Appointments = require('../../Models/Appointments')

const MarkAppointmentComplete = async (req, res) => {
  const id = req.params.id

  const selectedAppointment = await Appointments.findByPk(id)

  try {
    if (!selectedAppointment) return res.status(404).send({ message: 'appointment not found' })
    if (selectedAppointment) {
      const deleteAppointment = await Appointments.destroy({ where: { id } })
      try {
        if (deleteAppointment) return res.status(200).send({ message: 'successfully deleted appointment' })
      } catch (e) {
        return res.status(500)
      }
    }
  } catch (e) {
    return res.status(500)
  }
}

module.exports = MarkAppointmentComplete
