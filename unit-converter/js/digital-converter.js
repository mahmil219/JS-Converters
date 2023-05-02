// Select the form element
const sizeConverterForm = document.querySelector("#digital-size-converter");

// Select the input fields
const fromUnitField = document.querySelector("#from-size-unit");
const toUnitField = document.querySelector("#to-size-unit");
const sizeValueField = document.querySelector("#input-size-value");

// Select the result element
const sizeResult = document.querySelector("#size-result");

// Listen for form submission
sizeConverterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the selected units and value
  const fromUnit = fromUnitField.value;
  const toUnit = toUnitField.value;
  const sizeValue = sizeValueField.value;

  // Perform the conversion
  const convertedValue = convertSize(fromUnit, toUnit, sizeValue);

  // Update the result element
  sizeResult.innerHTML = `${sizeValue} ${fromUnit} = ${convertedValue} ${toUnit}`;
});

// Function to convert between different size units
function convertSize(fromUnit, toUnit, sizeValue) {
  // Convert all units to bytes
  const unitFactors = {
    B: 1,
    KB: 1024,
    MB: 1024 ** 2,
    GB: 1024 ** 3,
    TB: 1024 ** 4,
  };
  const bytesValue = sizeValue * unitFactors[fromUnit];

  // Convert bytes to the desired unit
  const convertedValue = bytesValue / unitFactors[toUnit];

  // Round the result to two decimal places
  return convertedValue.toFixed(2);
}
