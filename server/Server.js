const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const providers = require('./src/Routes/Providers')
const customers = require('./src/Routes/Customers')
const newsLetters = require('./src/Routes/NewsLetters')
const socket = require('./src/Socket/Socket')
require('dotenv').config()

const app = express()

const server = require('http').createServer(app)

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', providers)
app.use('/api', customers)
app.use('/api', newsLetters)

const PORT = process.env.PORT

socket(server)

server.listen(PORT, (e) => {
  if (e) console.log(e)

  console.log(`listening to PORT ${PORT}`)
})
