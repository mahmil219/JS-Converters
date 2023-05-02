const areaConverterForm = document.querySelector('#area-converter');
const areaResult = document.querySelector('#area-result');

areaConverterForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const fromUnit = document.querySelector('#from-area-unit').value;
  const toUnit = document.querySelector('#to-area-unit').value;
  const inputAreaValue = document.querySelector('#input-area-value').value;

  let outputAreaValue = '';

  if (fromUnit === 'sqm' && toUnit === 'sqm') {
    outputAreaValue = inputAreaValue;
  } else if (fromUnit === 'sqm' && toUnit === 'sqkm') {
    outputAreaValue = inputAreaValue / 1000000;
  } else if (fromUnit === 'sqkm' && toUnit === 'sqm') {
    outputAreaValue = inputAreaValue * 1000000;
  } else if (fromUnit === 'sqkm' && toUnit === 'sqkm') {
    outputAreaValue = inputAreaValue;
  }

  if (!isNaN(outputAreaValue)) {
    areaResult.innerHTML = `${inputAreaValue} ${fromUnit} = ${outputAreaValue} ${toUnit}`;
  } else {
    areaResult.innerHTML = `Invalid input. Please enter a valid number.`;
  }
});
