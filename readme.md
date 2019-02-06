# Get the weather forecast from your CLI!
## Instructions:
1. Fork and clone this repo
2. `npm install`
3. Go to [Dark Sky API](https://darksky.net/dev) to get a free API key (1000 free uses)
4. Once you have your API key either:
    - 4a. Go to the weather utils and place your key [here](https://github.com/Kyle-Ski/CLI-Weather-Jazz/blob/b74e203ed240c5eb41aaf5df543f67245cebc7da/utils/weather.js#L6) and [here](https://github.com/Kyle-Ski/CLI-Weather-Jazz/blob/b74e203ed240c5eb41aaf5df543f67245cebc7da/utils/weatherTomorrow.js#L7) where you see `process.env.DARK_SKY_APIKEY`
    - 4b. Create a [`.env`](https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7) file to safely use your API key and use `process.env.DARK_SKY_APIKEY=<YOUR API KEY>` in the file
5. Run `npm link` in the root of the file directory to symlink the binary file to the system path
6. Use `outdoors [command] <option> <city name>` to run the script
    - See [help](https://github.com/Kyle-Ski/CLI-Weather-Jazz/blob/master/cmds/help.js)  or use `help` for more details