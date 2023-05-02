const powerConverterForm = document.getElementById('power-converter');
const fromPowerUnit = document.getElementById('from-power-unit');
const toPowerUnit = document.getElementById('to-power-unit');
const inputPowerValue = document.getElementById('input-power-value');
const powerResult = document.getElementById('power-result');

powerConverterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const from = fromPowerUnit.value;
  const to = toPowerUnit.value;
  const value = inputPowerValue.value;
  
  let convertedValue;
  
  // Convert the value to watts first
  switch(from) {
    case 'kilowatts':
      convertedValue = value * 1000;
      break;
    case 'megawatts':
      convertedValue = value * 1000000;
      break;
    case 'horsepower':
      convertedValue = value * 745.7;
      break;
    default:
      convertedValue = value;
      break;
  }
  
  // Convert from watts to the desired unit
  switch(to) {
    case 'kilowatts':
      convertedValue /= 1000;
      break;
    case 'megawatts':
      convertedValue /= 1000000;
      break;
    case 'horsepower':
      convertedValue /= 745.7;
      break;
    default:
      break;
  }
  
  powerResult.innerHTML = `${value} ${from} = ${convertedValue.toFixed(2)} ${to}`;
});
