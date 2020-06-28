const schedule = require('../../Models/schedule')

const getScheduleById = async (req, res) => {
  const providerId = req.params.id
  const providerSchedule = await schedule.findAll({
    where: { provider_id: providerId }
  })

  try {
    if (providerSchedule) return res.status(200).send(providerSchedule)
    if (!providerSchedule) return res.status(404).send('Not Found')
  } catch (e) {
    return req.status(500)
  }
}

module.exports = getScheduleById
