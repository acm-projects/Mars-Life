const mongoose = require('mongoose')
//const https = require('https')
//import {Agent} from 'https';
const fetch = require("cross-fetch");

var dataList = []

let IMG_API = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=UsULBxdgulmBqWNLnbcbaBjoyEVDpUUbFcZbf1td";

let data1 = []
    fetch(IMG_API)
      .then(res => res.json())
      .then(data => {
          for(var i = 0; i < 500; i++){
            dataList[i] = {
                img_src : data.photos[i].img_src,
                camera_name : data.photos[i].camera.full_name,
                earth_date : data.photos[i].earth_date
            }
          }
      })



const refreshHandler = (key) => {            //print the key when an item is pressed
  //console.log(key)
}

//---schema---
const MarsImageSchema = new mongoose.Schema({
    sol:String,
    camera:String,
    img_src:String
})

mongoose.model("mars_image", MarsImageSchema)

module.exports = {
    dataList: dataList
}