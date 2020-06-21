const Providers = require('../../Models/Providers')

const AllProviders = async (req, res) => {
  const providers = await Providers.findAll({ raw: true })

  try {
    if (providers) return res.status(200).send(providers)
  } catch (e) {
    if (e) return res.status(500)
  }
}

module.exports = AllProviders
