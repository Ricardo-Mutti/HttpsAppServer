'use strict'

const fs = require('fs')
const bodyparser = require('body-parser')
const http = require('http')
const path = require('path')
const express = require('express')
const router = express.Router()
const app = express()
const directoryToServe = 'client'
const port = 3443

app.use(bodyparser())
app.use('/api', router)
app.use('/', express.static(path.join(__dirname, '..', directoryToServe)))

router.get('/', (req, res) => {
  res.json({
    hello: 'world'
  })
})

// POST
router.post('/', (req, res) => {
  res.json({
    body: req.body.body
  })
})

// const httpsOptions = {
//   cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
//   key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
// }

// https.createServer(httpsOptions, app)
//   .listen(port, function () {
//     console.log(`Serving the ${directoryToServe}/ directory at https://localhost:${port}`)
//   })

http.createServer(app).listen(port, function () {
    console.log(`Server listening at ${port}`)
  })
