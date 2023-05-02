const apparentPowerConverterForm = document.getElementById('apparent-power-converter');
const inputApparentPowerValue = document.getElementById('input-apparent-power-value');
const fromApparentPowerUnit = document.getElementById('from-apparent-power-unit');
const toApparentPowerUnit = document.getElementById('to-apparent-power-unit');
const apparentPowerResult = document.getElementById('apparent-power-result');

apparentPowerConverterForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const fromUnit = fromApparentPowerUnit.value;
  const toUnit = toApparentPowerUnit.value;
  const value = Number(inputApparentPowerValue.value);
  
  if (isNaN(value)) {
    apparentPowerResult.textContent = 'Please enter a valid number.';
    return;
  }
  
  const VA_CONVERSIONS = {
    'VA': 1,
    'kVA': 0.001,
    'MVA': 0.000001
  };
  
  const fromUnitValue = VA_CONVERSIONS[fromUnit];
  const toUnitValue = VA_CONVERSIONS[toUnit];
  
  const result = value * fromUnitValue / toUnitValue;
  
  apparentPowerResult.textContent = `${value} ${fromUnit} = ${result} ${toUnit}`;
});
