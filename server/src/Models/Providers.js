const DbConnection = require('../Database/mysqlDB')
const { DataTypes } = require('sequelize')

const database = DbConnection.define('providers', {
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
    type: DataTypes.BLOB,
    allowNull: false
  },
  resume: {
    type: DataTypes.JSON,
    allowNull: false
  },
  image: {
    type: DataTypes.JSON,
    allowNull: false
  }
})

// const test = async () => {
//   const table = await ProviderRegister.sync()

//   try {
//     if (table) console.log('success')
//   } catch (e) {
//     console.log(e)
//   }
// }
// test()
module.exports = database
