const ora = require('ora')
const getWeather = require('../utils/weather')

module.exports = (args) => {
  const spinner = ora().start()
  const location = args.location || args.l
    getWeather(location)
        .then(res => {
            spinner.stop()
            console.log(`Heads up, the current conditions in ${location}:`)
            console.log(`Summary: ${res.currently.summary}, ${res.currently.temperature}° with winds at: ${res.currently.windSpeed} mph. Cloud cover is at ${res.currently.cloudCover * 100}% with ${res.currently.humidity * 100}% humidity.`)
            // new Date(unix timestamp * 1000)
            // .toISOString() and .toString()
            // console.log(res.daily.data[0].time)
            return res
        })
        .catch(err => {
            spinner.stop()
            return console.error(`Error in today.js: ${err}`)
        })
}