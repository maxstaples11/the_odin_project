const ftoc = function(tempFahr) {
    celsius = (tempFahr - 32) * (5/9);
    roundedCels = Math.round(celsius *10)/10;
    return roundedCels; 
}

const ctof = function(tempCels) {
    fahrenheit = (tempCels * 9 / 5) + 32;
    roundedFahr = Math.round(fahrenheit* 10)/10;
    return roundedFahr;
}

module.exports = {
  ftoc,
  ctof
}
