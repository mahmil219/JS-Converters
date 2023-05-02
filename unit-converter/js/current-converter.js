const currentConverterForm = document.querySelector('#current-converter');
const currentConverterFrom = document.querySelector('#from-current-unit');
const currentConverterTo = document.querySelector('#to-current-unit');
const currentConverterInput = document.querySelector('#input-current-value');
const currentConverterResult = document.querySelector('#current-result');

currentConverterForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let fromUnit = currentConverterFrom.value;
  let toUnit = currentConverterTo.value;
  let inputValue = parseFloat(currentConverterInput.value);
  let result;

  if (fromUnit === 'a' && toUnit === 'ma') {
    result = inputValue * 1000;
  } else if (fromUnit === 'a' && toUnit === 'ua') {
    result = inputValue * 1000000;
  } else if (fromUnit === 'ma' && toUnit === 'a') {
    result = inputValue / 1000;
  } else if (fromUnit === 'ma' && toUnit === 'ua') {
    result = inputValue * 1000;
  } else if (fromUnit === 'ua' && toUnit === 'a') {
    result = inputValue / 1000000;
  } else if (fromUnit === 'ua' && toUnit === 'ma') {
    result = inputValue / 1000;
  } else {
    result = inputValue;
  }

  currentConverterResult.innerHTML = inputValue + ' ' + fromUnit + ' = ' + result + ' ' + toUnit;
}); 