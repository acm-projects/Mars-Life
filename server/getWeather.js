const express = require('express');
const app = express();
const fetch = require("cross-fetch");


let MAAS2_API = "https://api.maas2.apollorion.com/";


//All weather temps are measured in celcius
function getWeather(solNum){
    if(solNum > 0){
        MAAS2_API+=solNum;
    }
    return fetch(MAAS2_API)
      .then(res => res.json())
      .then(data => {
          const weather_info={
              sol: data.sol, 
              min: data.min_temp, 
              max: data.max_temp,
              pressure: data.pressure,
              condition: data.atmo_opacity,
              sunrise: data.sunrise,
              sunset: data.sunset,
              uvIndex: data.local_uv_irradiance_index,
              ground_min: data.min_gts_temp,
              ground_max: data.max_gts_temp,
            };
            return weather_info;
      })
}

// function getSevenDayWeather(){
//     getWeather()
// }

getWeather(1).then(data => {
    console.log(data);
});