require('dotenv/config')
const express = require('express')
const logger  = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./src/routes/root')

const app  = express()
const port = process.env.PORT

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

app.use('/api', router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})