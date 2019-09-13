const express = require('express')
const router  = express.Router()
const provinces = require('./provinces')
const users = require('./users')
const auth = require('./auth')

router.use('/provinces', provinces)
router.use('/users', users)
router.use('/auth', auth)

module.exports = router