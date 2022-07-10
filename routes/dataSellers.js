const express = require('express')
const router = express.Router()
const data = require('../scrapper/resource/example.json')

router.get('/', (req, res) => {
    res.send(data)
})

module.exports = router