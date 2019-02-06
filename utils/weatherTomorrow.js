const cities = require('all-the-cities')
const fetch = require('node-fetch')


const getThatWeatherTomorrow = (cityInfo) => {
    console.log(cityInfo)
    return fetch(`https://api.darksky.net/forecast/${process.env.DARK_SKY_APIKEY}/${cityInfo.lat},${cityInfo.lon}`)
    .then(res => res.json())
    // .then(console.log)
    .catch(err => console.error(`Error getting weather from DarkSky: ${err}`))
}

module.exports = (location) => {
    var cityInfo = {lat: 0, lon: 0}
    if(location === 'Denver'){
        cityInfo.lat = 39.7392
        cityInfo.lon = -104.9903
    } else {
        cityInfo = cities.filter(city => city.name.match(location))[0]
    }
    return getThatWeatherTomorrow(cityInfo)
    
  }