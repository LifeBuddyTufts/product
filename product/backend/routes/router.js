const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.get('/users', async(req, res) => {
    const users = schemas.Users

    const userData = await users.find({}).exec()
    if (userData) {
        res.send(JSON.stringify(userData))
    }

    res.send(userData)
})

module.exports = router