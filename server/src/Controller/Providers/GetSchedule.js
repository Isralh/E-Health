const schedule = require('../../Models/schedule')

const getSchedule = async (req, res) => {
  const employeeSchedules = await schedule.findAll({ raw: true })

  try {
    if (employeeSchedules) return res.status(200).send(employeeSchedules)
  } catch (e) {
    if (e) return res.status(500)
  }
}

module.exports = getSchedule
