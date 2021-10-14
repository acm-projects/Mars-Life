const mongoose = require('mongoose')
const https = require('https')
var dataList = []

const options = {
    hostname: 'api.nasa.gov',
    path: '/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=UsULBxdgulmBqWNLnbcbaBjoyEVDpUUbFcZbf1td',
    method: 'GET'
}

//alert(options)                                          //alert

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', data => {
        dataList.push(data)
    }).on('end', () => {
        let data = JSON.parse(Buffer.concat(dataList))
        let imgList = []

        for(var i = 0; i < 10; i++) {
            imgList[i] = data.photos[i].img_src
        }

        for(var i = 0; i < 10; i++) {
            console.log(imgList[i])
        }
    })

})

req.on('error', error => {
    console.error(error)
})
  
req.end()

//---schema---
const MarsImageSchema = new mongoose.Schema({
    sol:String,
    camera:String,
    img_src:String
})

mongoose.model("mars_image", MarsImageSchema)
