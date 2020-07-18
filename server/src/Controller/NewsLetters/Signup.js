const NewsLetters = require('../../Models/NewsLetter')

/* function to create new signUps for newsletters */
const SignUp = async (req, res) => {
  const { email } = req.body
  const currentEmails = await NewsLetters.findOne({ where: { email } })

  try {
    if (currentEmails) return res.status(200).send({ message: 'E-mail already registered for newsletters' })
    if (!currentEmails) {
      const newEmail = await NewsLetters.create({ email })
      try {
        if (newEmail) return res.status(201).send({ message: 'Successfully added to newsletters' })
      } catch (e) {
        return res.status(500)
      }
    }
  } catch (e) {
    return res.status(500)
  }
}

module.exports = SignUp
