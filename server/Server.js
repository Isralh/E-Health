const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const providers = require('./src/Routes/Providers')
const customers = require('./src/Routes/Customers')
const socket = require('./src/Socket/Socket')
const app = express()

const server = require('http').createServer(app)

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', providers)
app.use('/api', customers)

const PORT = 3002

socket(server)

server.listen(3002, (e) => {
  if (e) console.log(e)

  console.log(`listening to PORT ${PORT}`)
})
