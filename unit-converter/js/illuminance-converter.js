// Illuminance Converter
document.getElementById("illuminance-converter").addEventListener("submit", function(event) {
    event.preventDefault();
    convertIlluminance();
  });
  
  function convertIlluminance() {
    const fromUnit = document.getElementById("from-illuminance-unit").value;
    const toUnit = document.getElementById("to-illuminance-unit").value;
    const value = document.getElementById("input-illuminance-value").value;
  
    // Convert the value to a common unit (lux)
    let newValue = value;
    if (fromUnit === "foot-candle") {
      newValue *= 10.764;
    }
  
    // Convert the value to the desired unit
    if (toUnit === "foot-candle") {
      newValue /= 10.764;
    }
  
    // Display the result
    document.getElementById("illuminance-result").innerHTML = `${value} ${fromUnit} = ${newValue.toFixed(2)} ${toUnit}`;
  }
  