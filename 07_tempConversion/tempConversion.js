const convertToCelsius = function(number) {
  number = (number - 32) * 5/9;
  return Math.round(number * 10) / 10;
};

const convertToFahrenheit = function(number) {
  number = (number * 9/5) + 32;
  return Math.round(number * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
