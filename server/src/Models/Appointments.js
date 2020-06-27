const Database = require('../Database/mysqlDB')
const { DataTypes } = require('sequelize')

module.exports = Database.define('appointments', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  },
  provider_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false
  },
  time: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})
