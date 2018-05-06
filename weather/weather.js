const request = require("request");
const keys = require("../keys");

var getWeather = function(lat, long, callback){
	request({
		url: "https://api.darksky.net/forecast/"+keys.darksky+"/"+lat+","+long,
		json: true
	},
	function(error, response, body){
		if(!error && response.statusCode === 200)
		{
			callback(undefined,{
				temp: body.currently.temperature,
				apparentTemp: body.currently.apparentTemperature
			});
		}
	
		else{
			callback("Unable to fetch the weather");
		}
	});

}

module.exports.getWeather = getWeather;
