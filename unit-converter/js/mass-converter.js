const massConverterForm = document.querySelector('#mass-converter');
const massResult = document.querySelector('#mass-result');

massConverterForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const fromUnit = document.querySelector('#from-mass-unit').value;
  const toUnit = document.querySelector('#to-mass-unit').value;
  const inputMassValue = document.querySelector('#input-mass-value').value;

  let outputMassValue = '';
  if (fromUnit === 'g' && toUnit === 'kg') {
    outputMassValue = inputMassValue / 1000;
  } else if (fromUnit === 'g' && toUnit === 'g') {
    outputMassValue = inputMassValue;
  } else if (fromUnit === 'g' && toUnit === 'lb') {
    outputMassValue = inputMassValue * 0.00220462;
  } else if (fromUnit === 'g' && toUnit === 'oz') {
    outputMassValue = inputMassValue * 0.035274;
  } else if (fromUnit === 'kg' && toUnit === 'kg') {
    outputMassValue = inputMassValue;
  } else if (fromUnit === 'kg' && toUnit === 'lb') {
    outputMassValue = inputMassValue * 2.20462;
  } else if (fromUnit === 'kg' && toUnit === 'oz') {
    outputMassValue = inputMassValue * 35.274;
  } else if (fromUnit === 'lb' && toUnit === 'kg') {
    outputMassValue = inputMassValue / 2.20462;
  } else if (fromUnit === 'lb' && toUnit === 'lb') {
    outputMassValue = inputMassValue;
  } else if (fromUnit === 'lb' && toUnit === 'oz') {
    outputMassValue = inputMassValue * 16;
  } else if (fromUnit === 'oz' && toUnit === 'kg') {
    outputMassValue = inputMassValue / 35.274;
  } else if (fromUnit === 'oz' && toUnit === 'lb') {
    outputMassValue = inputMassValue / 16;
  } else if (fromUnit === 'oz' && toUnit === 'oz') {
    outputMassValue = inputMassValue;
  }  

  if (!isNaN(outputMassValue)) {
    massResult.innerHTML = `${inputMassValue} ${fromUnit} = ${Number(outputMassValue).toFixed(2)} ${toUnit}`;
  } else {
    massResult.innerHTML = `Invalid input. Please enter a valid number.`;
  }   
});
