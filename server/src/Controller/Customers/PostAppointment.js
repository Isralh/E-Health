const appointments = require('../../Models/Appointments')

const validateData = (data, res, outPutMessage) => {
  if (!data) return res.status(200).send({ message: outPutMessage })
}
const postAppointment = async (req, res) => {
  const { customerId, providerId, appointmentId, selectedDate, selectedTime } = req.body
  validateData(selectedDate, res, 'please provide the appointment date')
  validateData(selectedTime, res, 'please provide the appointment time')

  const existingAppointment = await appointments.findOne({
    where: { provider_id: providerId, date: selectedDate, time: selectedTime }
  })

  try {
    if (existingAppointment) return res.status(200).send({ message: 'Doctor unavailable on selected time. Please choose another time.' })
    const newAppointment = appointments.create({
      provider_id: providerId,
      customer_id: customerId,
      appointment_id: appointmentId,
      date: selectedDate,
      time: selectedTime
    })
    try {
      if (newAppointment) return res.status(201).send({ message: 'Appointment created successfully ' })
    } catch (e) {
      return res.status(500)
    }
  } catch (e) {
    return res.status(500)
  }
}

module.exports = postAppointment
