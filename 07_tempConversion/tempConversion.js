const convertToCelsius = function(n) {
  if (typeof(n) != 'number'){
    return "ERROR";
  }

  let result = (n -32) * (5/9);

  let roundedResult = Math.round(result * 10) / 10;

  return roundedResult;

};

const convertToFahrenheit = function(n) {
  if (typeof(n) != 'number'){
    return "ERROR";
  }

  let result = (n * (9/5)) + 32;

  let roundedResult = Math.round(result * 10) / 10;

  return roundedResult;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
