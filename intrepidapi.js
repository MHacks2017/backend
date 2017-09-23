// THIS FILE MUST BE CALLED AFTER ENVIRONMENT VARIABLES ARE LOADED
var rp = require('request-promise')
const util = require('util') // so we can print [Object object]


var options = { 
  uri: "https://mhacks.intrepidcs.com/api/data",  
  headers: {
    Authorization: 'Bearer ' + process.env.INTREPID_PRIVATE_KEY
  },
  json: true
}

rp(options)
  .then( res => {
    console.log('received response with data: ' + util.inspect(res))
  })
  .catch( err => {
    console.log('api call failed')
  })


/*
http.get(options, function(res) {

  // do something with chunk
  console.log('STATUS: ' + res.statusCode)
  console.log('HEADERS: ' + JSON.stringify(res.headers))
  res.setEncoding('utf8')  
  res.on('data', function(chunk) {
    console.log('BODY: ' + chunk)
  })
}).on('error', function(e) {
  console.log('Got error: ' + e.message)
})
*/
