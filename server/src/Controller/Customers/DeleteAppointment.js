const appointments = require('../../Models/Appointments')

const deleteAppointment = async (req, res) => {
  const id = req.params.id

  const deleteApp = await appointments.findByPk(id)

  try {
    if (!deleteApp) return res.status(404).send({ message: 'appointment not found' })
    if (deleteApp) {
      deleteApp.destroy()
      return res.status(200).send({ message: 'successfully deleted appointment' })
    }
  } catch (e) {
    return res.status(500)
  }
}

module.exports = deleteAppointment
