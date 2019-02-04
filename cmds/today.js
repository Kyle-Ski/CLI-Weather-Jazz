const ora = require('ora')
const getWeather = require('../utils/weather')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const location = args.location || args.l
    const weather = await getWeather(location)

    spinner.stop()

    console.log(`Heads up, the current conditions in ${location}:`)
    console.log(`\t${weather.condition.temp}° ${weather.condition.text}`)
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}