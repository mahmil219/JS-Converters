const tempConverterForm = document.querySelector("#temp-converter");
const fromTempUnitSelect = document.querySelector("#from-temp-unit");
const toTempUnitSelect = document.querySelector("#to-temp-unit");
const inputTempValue = document.querySelector("#input-temp-value");
const tempConvertButton = document.querySelector("#temp-convert-button");
const tempResultDiv = document.querySelector("#temp-result");

tempConverterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fromTempUnit = fromTempUnitSelect.value;
  const toTempUnit = toTempUnitSelect.value;
  const inputTemp = Number(inputTempValue.value);

  if (!inputTemp || isNaN(inputTemp)) {
    tempResultDiv.textContent = "Please enter a valid temperature value";
    return;
  }

  let outputTempValue;

  if (fromTempUnit === "c" && toTempUnit === "f") {
    outputTempValue = (inputTemp * 9/5) + 32;
  } else if (fromTempUnit === "c" && toTempUnit === "k") {
    outputTempValue = inputTemp + 273.15;
  } else if (fromTempUnit === "f" && toTempUnit === "c") {
    outputTempValue = (inputTemp - 32) * 5/9;
  } else if (fromTempUnit === "f" && toTempUnit === "k") {
    outputTempValue = (inputTemp + 459.67) * 5/9;
  } else if (fromTempUnit === "k" && toTempUnit === "c") {
    outputTempValue = inputTemp - 273.15;
  } else if (fromTempUnit === "k" && toTempUnit === "f") {
    outputTempValue = inputTemp * 9/5 - 459.67;
  } else {
    tempResultDiv.textContent = "Please select different temperature units to convert";
    return;
  }

  tempResultDiv.textContent = `${inputTemp} ${fromTempUnit.toUpperCase()} = ${outputTempValue.toFixed(2)} ${toTempUnit.toUpperCase()}`;
});
