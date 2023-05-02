// Frequency Converter
document.getElementById("frequency-converter").addEventListener("submit", function(event) {
    event.preventDefault();
    convertFrequency();
  });
  
  function convertFrequency() {
    const fromUnit = document.getElementById("from-frequency-unit").value;
    const toUnit = document.getElementById("to-frequency-unit").value;
    const value = document.getElementById("input-frequency-value").value;
  
    // Convert the value to a common unit (Hz)
    let newValue = value;
    if (fromUnit === "khz") {
      newValue *= 1000;
    } else if (fromUnit === "mhz") {
      newValue *= 1000000;
    } else if (fromUnit === "ghz") {
      newValue *= 1000000000;
    }
  
    // Convert the value to the desired unit
    if (toUnit === "khz") {
      newValue /= 1000;
    } else if (toUnit === "mhz") {
      newValue /= 1000000;
    } else if (toUnit === "ghz") {
      newValue /= 1000000000;
    }
  
    // Display the result
    document.getElementById("frequency-result").innerHTML = `${value} ${fromUnit} = ${newValue.toFixed(2)} ${toUnit}`;
  }
  