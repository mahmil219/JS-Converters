// Angular Converter
document.getElementById("angular-converter").addEventListener("submit", function(event) {
    event.preventDefault();
    convertAngular();
  });
  
  function convertAngular() {
    const fromUnit = document.getElementById("from-angular-unit").value;
    const toUnit = document.getElementById("to-angular-unit").value;
    const value = document.getElementById("input-angular-value").value;
  
    // Convert the value to a common unit (radians)
    let newValue = value;
    if (fromUnit === "deg") {
      newValue = value * Math.PI / 180;
    } else if (fromUnit === "grad") {
      newValue = value * Math.PI / 200;
    }
  
    // Convert the value to the desired unit
    if (toUnit === "deg") {
      newValue = newValue * 180 / Math.PI;
    } else if (toUnit === "grad") {
      newValue = newValue * 200 / Math.PI;
    }
  
    // Display the result
    document.getElementById("angular-result").innerHTML = `${value} ${fromUnit} = ${newValue.toFixed(2)} ${toUnit}`;
  }
  