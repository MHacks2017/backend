require('dotenv').config()
require('./intrepidapi.js')
const express = require('express')
const app = express()

var api = require('./intrepidapi.js')

let port = process.env.PORT

app.get('/', function(req, res) {
  res.json({value: 'Hello World!'})
})

app.get('/alldata', function(req, res) {
  api.intrepid_api_call()
  .then( result => {
    res.json(result)
  })
  .catch( err => {
    console.log('endpoint \\alldata caught error: ' + err)
  })
})

app.listen(port, function() {
  console.log('Listening on port ' + port)
})
