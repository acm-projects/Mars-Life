const mongoose = require('mongoose')
const https = require('https')

const options = {
    hostname: 'api.nasa.gov',
    path: '/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=UsULBxdgulmBqWNLnbcbaBjoyEVDpUUbFcZbf1td',
    method: 'GET'
}

const req = https.request(options, res => {             //make changes???
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', d => {
      console.log(JSON.parse(d))
    })
})

req.on('error', error => {
    console.error(error)
})
  
req.end()

//---schema---
const MarsImageSchema = new mongoose.MarsImageSchema({
    sol:int,
    camera:string
})

mongoose.model("mars_image", MarsImageSchema)