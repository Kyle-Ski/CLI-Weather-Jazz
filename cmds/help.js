const menus = {
    main: `
      outdoors [command] <options>
  
      today .............. show weather for today
      forecast ............ show a 10-day weather forcast
      tomorrow ........... show the weather for tommorow
      version ............ show package version
      help ............... show help menu for a command`,
  
    today: `
      outdoors today <options>
  
      --location, -l ..... the location to use`,
  }
  
  module.exports = (args) => {
    const subCmd = args._[0] === 'help' ? args._[1] : args._[0]
  
    console.log(menus[subCmd] || menus.main)
  }