// THIS FILE MUST BE CALLED AFTER ENVIRONMENT VARIABLES ARE LOADED
var request = require('request-promise')
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
    return Promise.resolve(res)
  })
  .catch( err => {
    console.log('api call failed')
    return Promise.reject("err")
  })
}

// TODO: input validation
module.exports.intrepid_api_post_call = function(req) {

  let key = req.body.key
  let value = req.body.value
  
  let jsonToSendAPI = {key: "This is the key you sent me: " + key, value: "You sent me the following value: " + value} 

  if(key && value) return Promise.resolve(jsonToSendAPI)
    else return Promise.reject("err")
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



