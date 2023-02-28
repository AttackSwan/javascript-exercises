const convertToCelsius = function(temperature) {
  let celcius = (temperature - 32) * (5/9);
  celcius = Math.round(celcius * 10)/10;
  return celcius;

  //can be compounded to:
  //return Math.round((temperature - 32)* (5/9) * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  let fahrenheit = temperature * (9/5) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;

  //can be compounded to:
  //return Math.round((temperature * (9/5) + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};