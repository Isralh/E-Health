const providers = require('../../Models/Providers')

const postRating = async (req, res) => {
  const { rating, doctorId } = req.body
  const existingProvider = await providers.findByPk(doctorId)
  try {
    if (!existingProvider) return res.status(404).send({ message: 'no provider found' })
    if (existingProvider) {
      existingProvider.increment({
        rating: rating,
        ratingCount: 1
      })
    }
  } catch (e) {
    return res.status(500)
  }
}

module.exports = postRating
