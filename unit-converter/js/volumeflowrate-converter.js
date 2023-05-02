// Volume Flow Rate Converter
document.getElementById("volume-flow-rate-converter").addEventListener("submit", function(event) {
    event.preventDefault();
    convertVolumeFlowRate();
  });
  
  function convertVolumeFlowRate() {
    const fromUnit = document.getElementById("from-volume-flow-rate-unit").value;
    const toUnit = document.getElementById("to-volume-flow-rate-unit").value;
    const value = document.getElementById("input-volume-flow-rate-value").value;
  
    // Convert the value to a common unit (cubic meters per hour)
    let newValue = value;
    if (fromUnit === "liters-per-second") {
      newValue *= 3.6;
    } else if (fromUnit === "gallons-per-minute") {
      newValue *= 0.0630902;
    }
  
    // Convert the value to the desired unit
    if (toUnit === "liters-per-second") {
      newValue /= 3.6;
    } else if (toUnit === "gallons-per-minute") {
      newValue /= 0.0630902;
    }
  
    // Display the result
    document.getElementById("volume-flow-rate-result").innerHTML = `${value} ${fromUnit} = ${newValue.toFixed(2)} ${toUnit}`;
  }
  