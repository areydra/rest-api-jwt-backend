const express = require('express')
const router  = express.Router()
const provinces = require('../controllers/provinces')
const authMiddleware = require('../middlewares/auth')

router
    .get('/', authMiddleware, provinces.getProvinces)
    .get('/:id', provinces.getProvince)
    .post('/', provinces.postProvince)
    .patch('/:id', provinces.patchProvince)
    .delete('/:id', provinces.deleteProvince)

module.exports = router