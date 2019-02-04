const cities = require('all-the-cities')
const fetch = require('node-fetch')

const getThatWeatherToday = (cityInfo) => {
    return fetch(`https://api.darksky.net/forecast/${process.env.DARK_SKY_APIKEY}/${cityInfo.lat},${cityInfo.lon}?exclude=minutely,hourly,alerts,flags`)
    .then(res => res.json())
    // .then(console.log)
    .catch(err => console.error(`Error getting weather from DarkSky: ${err}`))
}

const getThatWeatherTomorrow = (cityInfo) => {
    return fetch(`https://api.darksky.net/forecast/${process.env.DARK_SKY_APIKEY}/${cityInfo.lat},${cityInfo.lon}`)
    .then(res => res.json())
    // .then(console.log)
    .catch(err => console.error(`Error getting weather from DarkSky: ${err}`))
}

module.exports = (location) => {
    let cityInfo = cities.filter(city => city.name.match(location))[0]
    return getThatWeatherTomorrow(cityInfo)
            

    // return ({lat: cityInfo.lat, lon: cityInfo.lon})
  }