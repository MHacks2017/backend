require('dotenv').config()
let api = require('./intrepidapi.js')
const express = require('express')
const app = express()

let port = process.env.PORT
let postTypes = ['Body.Door.FrontLeft', 'Body.Door.FrontRight', 'Body.Door.BackLeft', 'Body.Door.BackRight', 'Body.Window.FrontLeft', 'Body.Window.FrontRight', 'Body.Window.BackLeft', 'Body.Window.BackRight', 'Body.Liftgate', 'Body.FrontLiftgate', 'Body.Unlock', 'Body.Lock']



app.get('/', function(req, res) {
  res.json({value: 'Hello World!'})
})

app.get('/alldata', function(req, res) {
  api.intrepid_api_get_call()
  .then( result => {
    res.json(result)
  })
  .catch( err => {
    console.log('endpoint /alldata caught error: ' + err)
  })
})


// requires a request object with body.postType equal to a value on https://mhacks.intrepidcs.com/docs, and a value associated with postType
app.post('/postdata', function(req, res) { 
  api.intrepid_api_post_call()
  .then (result => {
    res.json(result)
  })
  .catch( err => {
    console.log('endpoint /postdata caught error: ' + err)
  })
})


app.listen(port, function() {
  console.log('Listening on port ' + port)
})
