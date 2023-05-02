// Define conversion factors
const CONVERSION_FACTORS_REACTIVE_POWER = {
    var: {
      var: 1,
      mvar: 1000,
      kvar: 0.001
    },
    mvar: {
      var: 0.001,
      mvar: 1,
      kvar: 0.000001
    },
    kvar: {
      var: 1000,
      mvar: 1000000,
      kvar: 1
    }
  };
  
  // Get form elements
  const reactivePowerForm = document.querySelector('#reactive-power-converter');
  const reactivePowerValue = document.querySelector('#input-reactive-power-value');
  const fromReactivePowerUnit = document.querySelector('#from-reactive-power-unit');
  const toReactivePowerUnit = document.querySelector('#to-reactive-power-unit');
  const reactivePowerResult = document.querySelector('#reactive-power-result');
  
  // Listen to form submission
  reactivePowerForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get conversion units and value
    const fromUnit = fromReactivePowerUnit.value;
    const toUnit = toReactivePowerUnit.value;
    const value = parseFloat(reactivePowerValue.value);
  
    // Perform conversion
    const convertedValue = value * CONVERSION_FACTORS_REACTIVE_POWER[fromUnit][toUnit];
  
    // Display result
    reactivePowerResult.innerHTML = `${value} ${fromUnit} = ${convertedValue} ${toUnit}`;
  });
  