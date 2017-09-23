// THIS FILE MUST BE CALLED AFTER ENVIRONMENT VARIABLES ARE LOADED
var request = require('request-promise')
const util = require('util') // so we can print [Object object]


var options = { 
  uri: "https://mhacks.intrepidcs.com/api/data",  
  headers: {
    Authorization: 'Bearer ' + process.env.INTREPID_PRIVATE_KEY
  },
  json: true
}

module.exports.intrepid_api_call = function() {
  return request(options)
  .then( res => {
    console.log('received response with data: ' + util.inspect(res))
    return Promise.resolve(res)
  })
  .catch( err => {
    console.log('api call failed')
    return Promise.reject("err")
  })
}
