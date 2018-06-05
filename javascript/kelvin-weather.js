/*
 * 
Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.
Recently, Kelvin began publishing his weather forecasts on his website. However there's a problem: All of his forecasts describe the temperature in Kelvin.
With our knowledge of JavaScript, let's convert Kelvin to Celsius, then to Fahrenheit.
 * 
 */


const kelvin = 0;
let celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) +32;
fahrenheit = Math.floor(fahrenheit);
let newton = celsius * (33/100);

console.log(`The temerature is ${fahrenheit} degrees Fahrenheit`);

console.log(`The temerature is ${newton} degrees Newton`);