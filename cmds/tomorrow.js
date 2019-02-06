const ora = require('ora')
const getWeather = require('../utils/weatherTomorrow')

const formatTomorrow = (res) => {
        let day = res.daily.data[1]
        let date = new Date(day.time * 1000)
        let tomorrow = `${date.toString().slice(0,16)}:\nSummary: ${day.summary} \nPrecip chance: ${day.precipProbability}% \nHigh: ${day.temperatureHigh}°  \nLow: ${day.temperatureLow}° \nWind: ${day.windSpeed} mph, Cloud Cover: ${day.cloudCover * 100}%, Moon Phase: ${day.moonPhase * 100}%\n----------------------------`
        return console.log(tomorrow)
}

module.exports = (args) => {
  const spinner = ora().start()
  const location = args.location || args.l
    getWeather(location)
        .then(res => {
            spinner.stop()
            console.log(`Check it out, the forecast for tomorrow in ${location}:\n`)
            formatTomorrow(res)
            return res
        })
        .catch(err => {
            spinner.stop()
            return console.error(`Error in today.js: ${err}`)
        })
}