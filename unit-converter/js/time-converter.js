// Get the form and result elements
const timeConverterForm = document.getElementById('time-converter');
const timeResultElement = document.getElementById('time-result');

// Add a submit event listener to the form
timeConverterForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the from and to units and the input value
  const fromUnit = document.getElementById('from-time-unit').value;
  const toUnit = document.getElementById('to-time-unit').value;
  const inputValue = parseFloat(document.getElementById('input-time-value').value);
  
  // Convert the input value to seconds
  let seconds;
  switch (fromUnit) {
    case 's':
      seconds = inputValue;
      break;
    case 'm':
      seconds = inputValue * 60;
      break;
    case 'h':
      seconds = inputValue * 60 * 60;
      break;
  }
  
  // Convert the seconds to the desired unit
  let outputValue;
  switch (toUnit) {
    case 's':
      outputValue = seconds;
      break;
    case 'm':
      outputValue = seconds / 60;
      break;
    case 'h':
      outputValue = seconds / (60 * 60);
      break;
  }
  
  // Display the converted value
  timeResultElement.innerHTML = `${inputValue} ${fromUnit} = ${outputValue.toFixed(2)} ${toUnit}`;
});
