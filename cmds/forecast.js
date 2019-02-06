const ora = require('ora')
const getWeather = require('../utils/weatherTomorrow')

const formatDaily = (res) => {
    return res.daily.data.map(day => {
        let date = new Date(day.time * 1000)
        let newDay = `${date.toString().slice(0,16)}:\nSummary: ${day.summary} \nPrecip chance: ${day.precipProbability}% \nHigh: ${day.temperatureHigh}°  \nLow: ${day.temperatureLow}° \nWind: ${day.windSpeed} mph, Cloud Cover: ${day.cloudCover * 100}%, Moon Phase: ${day.moonPhase * 100}%\n----------------------------`
        return console.log(newDay)
    })
}

module.exports = (args) => {
  const spinner = ora().start()
  const location = args.location || args.l
    getWeather(location)
        .then(res => {
            spinner.stop()
            console.log(`Look out, the forecast for the week in ${location}:\n`)
            formatDaily(res)
            return res
        })
        .catch(err => {
            spinner.stop()
            return console.error(`Error in today.js: ${err}`)
        })
}