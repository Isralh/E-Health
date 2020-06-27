const Database = require('../Database/mysqlDB')
const { DataTypes } = require('sequelize')

module.exports = Database.define('emp_schedule', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  time: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  provider_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})
