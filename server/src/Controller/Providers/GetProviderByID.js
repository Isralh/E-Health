const providers = require('../../Models/Providers')

const GetProviderByID = async (req, res) => {
  const doctorId = req.params.id
  if (doctorId === null || doctorId === undefined) {
    return res.status(204).send({ message: 'please provide doctor info' })
  }
  const provider = await providers.findByPk(doctorId)

  try {
    if (provider) {
      return res.status(200).send({ data: provider, message: 'success' })
    }
    return res.status(404)
  } catch (e) {
    return res.status(500)
  }
}

module.exports = GetProviderByID
