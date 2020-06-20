const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const providers = require('./src/Routes/Providers')
app.use(express.json())
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))

app.use('/api', providers)

const PORT = 3002

app.listen(PORT, (e) => e ? console.log(e) : console.log('success'))
