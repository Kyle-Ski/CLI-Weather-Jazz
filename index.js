const minimist = require('minimist')

module.exports = () => {
    const args = minimist(process.argv.slice(2))
    const cmd = args._[0] || 'help'

    switch (cmd){
        case 'today': 
            require('./cmds/today')(args)
            break
        case 'help':
            require('./cmds/help')(args)
            break
        case 'version':
            require('./cmds/version')(args)
            break
        default:
            console.error(`Command "${cmd}" is not valid.`)
            break
    }
}