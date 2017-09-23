require('dotenv').config()
require('./intrepidapi.js')
const express = require('express')
const app = express()

let port = process.env.PORT


app.get('/', function(req, res) {
  res.json({value: 'Hello World!'})
})

app.listen(port, function() {
  console.log('Listening on port ' + port)
})
