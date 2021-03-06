const express = require('express')
const protestController = require('../Controllers/protest')
const { checkJwt } = require('../middleware')
const router = express.Router()

router.get('/', protestController.getAllProtests)

// router.get('/:id', usersController.getUserById)

// router.post('/', checkJwt, usersController.createUser)

// router.put('/:id', checkJwt, usersController.updateUserById)

// router.delete('/:first_name', checkJwt, usersController.deleteUserByFirstName)

module.exports = router