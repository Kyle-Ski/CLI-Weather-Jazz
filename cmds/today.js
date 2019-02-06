const ora = require('ora')
const getWeather = require('../utils/weather')

module.exports = (args) => {
  const spinner = ora().start()
  const location = args.location || args.l
    getWeather(location)
        .then(res => {
            spinner.stop()
            console.log(`Heads up, the current conditions in ${location}:\n`)
            console.log(`Summary: ${res.currently.summary}\nPrecip chance: ${res.currently.precipProbability}% \nTemperature: ${res.currently.temperature}°\nWind: ${res.currently.windSpeed} mph, Cloud Cover: ${res.currently.cloudCover * 100}%, with ${res.currently.humidity * 100}% humidity.\nThe Nearest Storm is ${res.currently.nearestStormDistance} miles away\n----------------------------`)
            return res
        })
        .catch(err => {
            spinner.stop()
            return console.error(`Error in today.js: ${err}`)
        })
}