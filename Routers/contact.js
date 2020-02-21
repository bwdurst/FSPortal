const express = require('express')
const contactController = require('../Controllers/contact')
const { checkJwt } = require('../middleware')
const router = express.Router()

router.get('/', contactController.getAllContacts)

// router.get('/:id', usersController.getUserById)

// router.post('/', checkJwt, usersController.createUser)

// router.put('/:id', checkJwt, usersController.updateUserById)

// router.delete('/:first_name', checkJwt, usersController.deleteUserByFirstName)

module.exports = router