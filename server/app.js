const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const providers = require('./src/Routes/Providers')
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', providers)

const PORT = 3002

app.listen(PORT, (e) => e ? console.log(e) : console.log('success'))
