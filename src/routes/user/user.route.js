const express = require('express')
const router = express.Router()

const userController = require('../../controller/user/user.controller')

router.post('/newUser', userController.newUser)
router.get('/findUsers', userController.findUsers)
router.get('/findUsersByProfileAndDistanceInKm', userController.findUsersByProfileAndDistanceInKm)

module.exports = router