const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const testRoute = require('./src/routes/test/test.route')

app.use('/test', testRoute)

module.exports = app