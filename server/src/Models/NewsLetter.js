const Database = require('../Database/mysqlDB')
const { DataTypes } = require('sequelize')

module.exports = Database.define('newsletters', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true
  }
})
