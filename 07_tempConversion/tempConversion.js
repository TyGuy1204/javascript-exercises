const convertToCelsius = function(temp) {
  if((((temp -32)*5)/9) % 1 !== 0){
    return parseFloat((((temp -32)*5)/9).toFixed(1));
  }
  else{
    return parseFloat(((temp -32)*5)/9);
  }
  
};

const convertToFahrenheit = function(temp) {
  if((((temp * 9)/5)+32) % 1 !== 0){
    return parseFloat((((temp * 9)/5)+32).toFixed(1));
  }
  else{
    return parseFloat(((temp * 9)/5)+32);
  }
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
