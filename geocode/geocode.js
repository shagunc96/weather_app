const request = require("request");
const keys = require("../keys");


var geocodeAddress = function(address, callback){
	var add = encodeURIComponent(address);
	request({
		url: "https://maps.googleapis.com/maps/api/geocode/json?address="+add+"&key="+keys.googlegeocode,
		json: true
	}, 
	function(error, response, body){
		if(error){
			callback("Couldn't connect to Google servers.");
		}
		else if(body.status === "ZERO_RESULTS"){
			callback("Unable to find address.");
		}
		else if(body.status === "OK"){
			callback(undefined, {
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			});	
		}
	});
}

module.exports.geocodeAddress = geocodeAddress;
