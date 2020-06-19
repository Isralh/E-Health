const Sequelize = require('sequelize').Sequelize
require('dotenv').config()
module.exports = new Sequelize('e_health', 'root', '1992', {
  host: 'localhost',
  dialect: 'mysql'
})
