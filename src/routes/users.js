const express = require('express')
const router  = express.Router()
const users   = require('../controllers/users')

router
    .get('/', users.getUsers)
    .get('/:id', users.getUser)
    .post('/', users.postUser)
    .patch('/:id', users.patchUser)
    .delete('/:id', users.deleteUser)

module.exports = router