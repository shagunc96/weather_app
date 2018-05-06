# weather_app
A NodeJs console application that prints the temperature at a given time of an address.

To use,
 > Clone or download the repository.
 
 > Add a new file called keys.js in the home directory. This will have the following structure:
 <pre>
  var keys = {
    darksky = "Your Darksky api key",
    googlegeocode : "Your Google Geocode api key"
  }
  module.exports = keys;
 </pre>
 
 
 >Run the program using <code>node app.js</code>
