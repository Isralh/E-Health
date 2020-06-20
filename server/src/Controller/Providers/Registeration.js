const Providers = require('../../Models/Providers')

const Registeration = async (req, res) => {
  const clientData = await req.body
  console.log(clientData)
}

module.exports = Registeration
