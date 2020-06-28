const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const providers = require('./src/Routes/Providers')
const customers = require('./src/Routes/Customers')
const socket = require('./src/Socket/Socket')
const app = express()
app.use(express.json())
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))

app.use('/api', providers)
app.use('/api', customers)

const PORT = 3002

// app.listen(PORT, (e) => e ? console.log(e) : console.log('success'))

socket(app, PORT)
