const yargs     = require("yargs"),
      geocode   = require("./geocode/geocode.js"),
      weather   = require("./weather/weather.js");

const argv = yargs.options({
	a:{
		demand: true,
		alias: "address",
		describe: "Address to fetch weather for.",
		string : true
	}
})
.help().alias("help", "h").argv;

geocode.geocodeAddress(argv.address, function(errorMessage, results){
	if(errorMessage){
		console.log(errorMessage);
	}
	else{
		console.log(`The weather in ${results.address} - `);
		weather.getWeather(results.latitude, results.longitude, function(errMessage, weatherResult){
		if(errMessage){
			console.log(errMessage);
		}
		else{
			console.log(`The temperature is ${weatherResult.temp}°F, and it feels like ${weatherResult.apparentTemp}°F.`);
		}
		});
	}
});




