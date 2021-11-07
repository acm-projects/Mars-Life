import fetch from 'cross-fetch';

const MAAS2_API = "https://api.maas2.apollorion.com/";


//would be shorter if promises didn't work this way lol
export default function getWeather(){
    let dataArr = [];
    return fetch(MAAS2_API)
    //day 1
      .then(res => res.json())
      .then(data => {
          const weather_info={sol: data.sol, min: data.min_temp, max: data.max_temp,pressure: data.pressure,condition: data.atmo_opacity, 
            sunrise: data.sunrise, sunset: data.sunset, uvIndex: data.local_uv_irradiance_index, ground_min: data.min_gts_temp, ground_max: data.max_gts_temp,
            };
            dataArr.push(weather_info);
            return fetch(MAAS2_API + String(weather_info.sol-1));
      })
    //day 2  
      .then(res => res.json())
      .then(data =>{
            const weather_info={sol: data.sol, min: data.min_temp, max: data.max_temp,pressure: data.pressure,condition: data.atmo_opacity, 
                sunrise: data.sunrise, sunset: data.sunset, uvIndex: data.local_uv_irradiance_index, ground_min: data.min_gts_temp, ground_max: data.max_gts_temp,
            };
            dataArr.push(weather_info);
            return fetch(MAAS2_API + String(weather_info.sol-1)); 
      })
    //day 2  
      .then(res => res.json())
      .then(data =>{
            const weather_info={sol: data.sol, min: data.min_temp, max: data.max_temp,pressure: data.pressure,condition: data.atmo_opacity, 
                sunrise: data.sunrise, sunset: data.sunset, uvIndex: data.local_uv_irradiance_index, ground_min: data.min_gts_temp, ground_max: data.max_gts_temp,
            };
            dataArr.push(weather_info);
            return fetch(MAAS2_API + String(weather_info.sol-1)); 
      })
    //day 3  
      .then(res => res.json())
      .then(data =>{
            const weather_info={sol: data.sol, min: data.min_temp, max: data.max_temp,pressure: data.pressure,condition: data.atmo_opacity, 
                sunrise: data.sunrise, sunset: data.sunset, uvIndex: data.local_uv_irradiance_index, ground_min: data.min_gts_temp, ground_max: data.max_gts_temp,
            };
            dataArr.push(weather_info);
            return fetch(MAAS2_API + String(weather_info.sol-1)); 
      })
    //day 4  
    .then(res => res.json())
    .then(data =>{
        const weather_info={sol: data.sol, min: data.min_temp, max: data.max_temp,pressure: data.pressure,condition: data.atmo_opacity, 
            sunrise: data.sunrise, sunset: data.sunset, uvIndex: data.local_uv_irradiance_index, ground_min: data.min_gts_temp, ground_max: data.max_gts_temp,
        };
        dataArr.push(weather_info);
        return fetch(MAAS2_API + String(weather_info.sol-1)); 
    })
    //day 5  
    .then(res => res.json())
    .then(data =>{
        const weather_info={sol: data.sol, min: data.min_temp, max: data.max_temp,pressure: data.pressure,condition: data.atmo_opacity, 
            sunrise: data.sunrise, sunset: data.sunset, uvIndex: data.local_uv_irradiance_index, ground_min: data.min_gts_temp, ground_max: data.max_gts_temp,
        };
        dataArr.push(weather_info);
        return fetch(MAAS2_API + String(weather_info.sol-1)); 
    })
    //day 6  
    .then(res => res.json())
    .then(data =>{
        const weather_info={sol: data.sol, min: data.min_temp, max: data.max_temp,pressure: data.pressure,condition: data.atmo_opacity, 
            sunrise: data.sunrise, sunset: data.sunset, uvIndex: data.local_uv_irradiance_index, ground_min: data.min_gts_temp, ground_max: data.max_gts_temp,
        };
        dataArr.push(weather_info);
        return fetch(MAAS2_API + String(weather_info.sol-1)); 
    })
    //day 7  
    .then(res => res.json())
    .then(data =>{
        const weather_info={sol: data.sol, min: data.min_temp, max: data.max_temp,pressure: data.pressure,condition: data.atmo_opacity, 
            sunrise: data.sunrise, sunset: data.sunset, uvIndex: data.local_uv_irradiance_index, ground_min: data.min_gts_temp, ground_max: data.max_gts_temp,
        };
        dataArr.push(weather_info);
        return dataArr; 
    })
}