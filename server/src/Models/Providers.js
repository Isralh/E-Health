const DbConnection = require('../Database/mysqlDB')
const { DataTypes } = require('sequelize')

module.exports = DbConnection.define('providers', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    allowNull: false,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  education: {
    type: DataTypes.STRING,
    allowNull: false
  },
  yearsOfExperience: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  summary: {
    type: DataTypes.TEXT({ length: 1000 }),
    allowNull: false
  },
  resume: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  userType: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'provider'
  }
})
