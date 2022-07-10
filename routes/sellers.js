const express = require('express')
const router = express.Router()
const data = require('../scrapper/resource/example.json')

router.get('/', (req, res) => {
    let names = []
    for (let elem in data) {
        names.push(elem)
    }
    res.send(names)
})

module.exports = router