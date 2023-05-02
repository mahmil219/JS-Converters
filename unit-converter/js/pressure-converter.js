const pressureConverterForm = document.getElementById('pressure-converter');
const fromPressureUnit = document.getElementById('from-pressure-unit');
const toPressureUnit = document.getElementById('to-pressure-unit');
const inputPressureValue = document.getElementById('input-pressure-value');
const pressureConvertButton = document.getElementById('pressure-convert-button');
const pressureResult = document.getElementById('pressure-result');

pressureConverterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let fromUnit = fromPressureUnit.value;
  let toUnit = toPressureUnit.value;
  let inputValue = inputPressureValue.value;

  if (fromUnit === toUnit) {
    pressureResult.innerHTML = "Please select different units to convert.";
    return;
  }

  let fromFactor = getPressureFactor(fromUnit);
  let toFactor = getPressureFactor(toUnit);

  let result = (inputValue * fromFactor) / toFactor;

  pressureResult.innerHTML = `${inputValue} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
});

function getPressureFactor(unit) {
  switch (unit) {
    case 'pa':
      return 1;
    case 'kpa':
      return 1000;
    case 'mpa':
      return 1000000;
    case 'bar':
      return 100000;
    case 'psi':
      return 6895;
    default:
      return 1;
  }
}
