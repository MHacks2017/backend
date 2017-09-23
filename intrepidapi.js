// THIS FILE MUST BE CALLED AFTER ENVIRONMENT VARIABLES ARE LOADED
var rp = require('request-promise')
const util = require('util') // so we can print [Object object]


var getOptions = { 
  uri: "https://mhacks.intrepidcs.com/api/data",  
  headers: {
    Authorization: 'Bearer ' + process.env.INTREPID_PRIVATE_KEY
  },
  json: true
}

module.exports.intrepid_api_get_call = function() {
  return request(getOptions)
  .then( res => {
    console.log('received response with data: ' + util.inspect(res))
  })
  .catch( err => {
    console.log('api call failed')
  })
}

module.exports.intrepid_api_post_call = function() {
  console.log('ERR: Not yet implemented.')
  return Promise.resolve({value: "dummy"})
}

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



