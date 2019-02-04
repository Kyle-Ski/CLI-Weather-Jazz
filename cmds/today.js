const ora = require('ora')
const getWeather = require('../utils/weather')

module.exports = (args) => {
  const spinner = ora().start()
  const location = args.location || args.l
    getWeather(location)
        .then(res => {
            spinner.stop()
            console.log(`Heads up, the current conditions in ${location}:`)
            console.log(`\t${res.currently.temperature}° `)
            return res
        })
        .catch(err => {
            spinner.stop()
            return console.error(`Error in today.js: ${err}`)
        })
}