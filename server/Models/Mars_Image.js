const mongoose = require('mongoose')
const https = require('https')
const { NativeModules } = require('react-native')
var dataList = []
let imgList = []
let cameraName = []
let earthDate = []

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

        for(var i = 0; i < 10; i++) {
            imgList[i] = data.photos[i].img_src
            cameraName[i] = data.photos[i].camera.full_name
            earthDate[i] = data.photos[i].earth_date
        }

        for(var i = 0; i < 10; i++) {
            console.log(imgList[i])
            console.log(cameraName[i])
            console.log(earthDate[i])
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

module.exports = {
    dataList: dataList,
    imgList: imgList,
    cameraName: cameraName,
    earthDate: earthDate,
}