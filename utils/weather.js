const cities = require("all-the-cities")

module.exports = async (location) => {
    let cityInfo = cities.filter(city => city.name.match(location))[0]
    console.log(cityInfo)
    return cityInfo
  }