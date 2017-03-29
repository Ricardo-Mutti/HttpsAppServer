'use strict'

const fs = require('fs')
const bodyparser = require('body-parser')
const http = require('http')
const path = require('path')
const express = require('express')
const router = express.Router()
const app = express()
const directoryToServe = 'client'
const portHttps = 3443
const portHttp = 3442

app.use(bodyparser())
app.use('/api', router)
app.use('/', express.static(path.join(__dirname, '..', directoryToServe)))

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: "Get request done right!",
    response:
    {
      attribute1:"Attribute1",
      attribute2:"Attribute2"
   }
  })
})

// POST
router.post('/', (req, res) => {
  res.json({
    success: true,
    message: "Post request done right!",
    response:
    {
      attribute1:req.body.attribute1,
      attribute2:req.body.attribute2
   }
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

http.createServer(app).listen(portHttps, function () {
    console.log(`Https server listening at ${portHttps}`)
  })

http.createServer(app).listen(portHttp, function () {
    console.log(`Http server listening at ${portHttp}`)
  })
