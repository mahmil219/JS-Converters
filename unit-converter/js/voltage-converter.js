const voltageConverterForm = document.getElementById("voltage-converter");
const fromVoltageUnit = document.getElementById("from-voltage-unit");
const toVoltageUnit = document.getElementById("to-voltage-unit");
const inputVoltageValue = document.getElementById("input-voltage-value");
const voltageConvertButton = document.getElementById("voltage-convert-button");
const voltageResult = document.getElementById("voltage-result");

function convertVoltage() {
  const fromUnit = fromVoltageUnit.value;
  const toUnit = toVoltageUnit.value;
  const inputValue = inputVoltageValue.value;

  // Convert the input value to volts
  let volts;
  switch (fromUnit) {
    case "mV":
      volts = inputValue / 1000;
      break;
    case "V":
      volts = inputValue;
      break;
    case "kV":
      volts = inputValue * 1000;
      break;
  }

  // Convert volts to the desired output unit
  let outputValue;
  switch (toUnit) {
    case "mV":
      outputValue = volts * 1000;
      break;
    case "V":
      outputValue = volts;
      break;
    case "kV":
      outputValue = volts / 1000;
      break;
  }

  // Display the result
  voltageResult.textContent = `${inputValue} ${fromUnit} = ${outputValue} ${toUnit}`;
}

voltageConverterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  convertVoltage();
});

voltageConvertButton.addEventListener("click", convertVoltage);
