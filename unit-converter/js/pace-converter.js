const paceConverterForm = document.querySelector('#pace-converter');
const inputPaceValue = document.querySelector('#input-pace-value');
const fromPaceUnit = document.querySelector('#from-pace-unit');
const toPaceUnit = document.querySelector('#to-pace-unit');
const paceResult = document.querySelector('#pace-result');

// Conversion factors for different pace units
const conversionFactors = {
  'min/mi': 26.8224,
  'min/km': 16.6667,
  's/m': 1.0,
  's/ft': 0.3048
};

paceConverterForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputValue = Number(inputPaceValue.value);
  const fromUnit = fromPaceUnit.value;
  const toUnit = toPaceUnit.value;
  const convertedPace = convertPace(inputValue, fromUnit, toUnit);
  paceResult.innerHTML = `${inputValue} ${fromUnit} = ${convertedPace} ${toUnit}`;
});

function convertPace(value, fromUnit, toUnit) {
  // Calculate pace in seconds per distance unit
  const paceInSeconds = conversionFactors[fromUnit] / value;
  // Convert pace to desired unit
  const convertedPace = conversionFactors[toUnit] / paceInSeconds;
  // Round to two decimal places
  return convertedPace.toFixed(2);
}
