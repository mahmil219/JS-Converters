// Get the length converter form and add a submit event listener
const lengthConverter = document.getElementById ("length-converter");
lengthConverter.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the user input values
  const inputValue = parseFloat(document.getElementById("input-length-value").value);
  const fromUnit = document.getElementById("from-length-unit").value;
  const toUnit = document.getElementById("to-length-unit").value;

  // Calculate the conversion factor
  let conversionFactor;
  switch (fromUnit) {
    case "cm":
      switch (toUnit) {
        case "cm":
          conversionFactor = 1;
          break;
        case "in":
          conversionFactor = 0.393701;
          break;
        case "m":
          conversionFactor = 0.01;
          break;
        case "ft":
          conversionFactor = 0.0328084;
          break;
      }
      break;
    case "in":
      switch (toUnit) {
        case "cm":
          conversionFactor = 2.54;
          break;
        case "in":
          conversionFactor = 1;
          break;
        case "m":
          conversionFactor = 0.0254;
          break;
        case "ft":
          conversionFactor = 0.0833333;
          break;
      }
      break;
    case "m":
      switch (toUnit) {
        case "cm":
          conversionFactor = 100;
          break;
        case "in":
          conversionFactor = 39.3701;
          break;
        case "m":
          conversionFactor = 1;
          break;
        case "ft":
          conversionFactor = 3.28084;
          break;
      }
      break;
    case "ft":
      switch (toUnit) {
        case "cm":
          conversionFactor = 30.48;
          break;
        case "in":
          conversionFactor = 12;
          break;
        case "m":
          conversionFactor = 0.3048;
          break;
        case "ft":
          conversionFactor = 1;
          break;
      }
      break;
  }

  // Calculate the converted value
  const convertedValue = inputValue * conversionFactor;

  // Display the result
  const lengthResult = document.getElementById("length-result");
  lengthResult.textContent = convertedValue.toFixed(2) + " " + toUnit;
});
