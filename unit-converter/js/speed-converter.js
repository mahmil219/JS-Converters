// Define the speed conversion factors
const speedFactors = {
    'm/s': 1,
    'km/h': 3.6,
    'mph': 2.23694,
    'ft/s': 3.28084
  };
  
  // Get the form and input elements
  const form = document.getElementById('speed-converter');
  const input = document.getElementById('input-speed-value');
  const fromUnit = document.getElementById('from-speed-unit');
  const toUnit = document.getElementById('to-speed-unit');
  const result = document.getElementById('speed-result');
  
  // Add a submit event listener to the form
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting
  
    // Get the selected units and input value
    const from = fromUnit.value;
    const to = toUnit.value;
    const value = input.value;
  
    // Convert the input value to the base unit (m/s)
    const baseValue = value * speedFactors[from];
  
    // Convert the base unit value to the output unit
    const outputValue = baseValue / speedFactors[to];
  
    // Display the result
    result.innerHTML = `${value} ${from} = ${outputValue.toFixed(2)} ${to}`;
  });
  