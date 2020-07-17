const providers = require('../../Models/Providers')

const GetProviderByID = async (req, res) => {
  const providerId = req.params.id
  if (providerId === null || providerId === undefined) {
    return res.status(204).send({ message: 'please provide doctor info' })
  }
  const provider = await providers.findByPk(providerId)

  try {
    if (provider) {
      const providerData = {
        first_name: provider.first_name,
        last_name: provider.last_name,
        image: provider.image,
        rate: provider.rate,
        summary: provider.summary,
        education: provider.education,
        yearsOfExperience: provider.yearsOfExperience,
        rating: provider.rating,
        ratingCount: provider.ratingCount
      }
      return res.status(200).send({ data: providerData, message: 'success' })
    }
    return res.status(404)
  } catch (e) {
    return res.status(500)
  }
}

module.exports = GetProviderByID
