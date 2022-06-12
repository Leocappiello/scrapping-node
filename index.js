const express = require('express')
const app = express()
//const {initialization} = require('./scrapper/scrapper');
const cors = require('cors');
require('dotenv').config()

//config
app.set('PORT', process.env.PORT || 3000)

//
app.use(cors())
app.use(express.json())

//

//
app.use(require('./routes/index'))

//sv
app.listen(app.get('PORT'), () => {
    console.log('listen on port ', app.get('PORT'))
})