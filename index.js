const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const testRoute = require('./src/routes/test/test.route')
const userRoute = require('./src/routes/user/user.route')
const loginRoute = require('./src/routes/login/login.route')
app.use('/test', testRoute)
app.use('/user', userRoute)
app.use('/auth', loginRoute)

module.exports = app