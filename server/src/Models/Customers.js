const Database = require('../Database/mysqlDB')
const { DataTypes } = require('sequelize')

module.exports = Database.define('customers', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
    allowNull: false
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
  userType: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

// const create = async () => {
//   const createTable = await customers.sync()

//   try {
//     if (createTable) console.log('success')
//   } catch (e) {
//     console.log(e)
//   }
// }

// create()
