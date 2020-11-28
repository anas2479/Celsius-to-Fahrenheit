

var fahrenheit_input = document.getElementById('fInput');
var celsius_input = document.getElementById('cInput');



//var celsius_to_fahrenheit = (celsius_input.value * 9/5) + 32;
//var fahrenheit_to_celsius = (fahrenheit_input - 32) * 5/9;

function calculate_celsius(){
    fahrenheit_input.value = (celsius_input.value * 9/5) + 32;
}