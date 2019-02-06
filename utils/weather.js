const cities = require('all-the-cities')
const fetch = require('node-fetch')

const getThatWeatherToday = (cityInfo) => {
    return fetch(`https://api.darksky.net/forecast/${process.env.DARK_SKY_APIKEY}/${cityInfo.lat},${cityInfo.lon}?exclude=minutely,hourly,alerts,flags`)
    .then(res => res.json())
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
    return getThatWeatherToday(cityInfo)
  }