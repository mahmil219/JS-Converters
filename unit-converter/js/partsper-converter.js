const partsperConverterForm = document.querySelector("#partsper-converter");
const partsperConvertButton = document.querySelector("#partsper-convert-button");
const partsperResult = document.querySelector("#partsper-result");

partsperConverterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const fromUnit = document.querySelector("#from-partsper-unit").value;
  const toUnit = document.querySelector("#to-partsper-unit").value;
  const inputValue = document.querySelector("#input-partsper-value").value;
  const result = convertPartsper(fromUnit, toUnit, inputValue);
  partsperResult.innerHTML = `${inputValue} ${fromUnit} = ${result} ${toUnit}`;
});

function convertPartsper(fromUnit, toUnit, inputValue) {
  const ppmValue = parseFloat(inputValue);
  let resultValue;
  switch (fromUnit) {
    case "ppm":
      resultValue = ppmValue / ppmConversionFactor(toUnit);
      break;
    case "ppb":
      resultValue = ppmValue / ppmConversionFactor("ppb") * ppmConversionFactor(toUnit);
      break;
    case "ppt":
      resultValue = ppmValue / ppmConversionFactor("ppt") * ppmConversionFactor(toUnit);
      break;
    case "ppq":
      resultValue = ppmValue / ppmConversionFactor("ppq") * ppmConversionFactor(toUnit);
      break;
  }
  return resultValue.toFixed(15);
}

function ppmConversionFactor(toUnit) {
  switch (toUnit) {
    case "ppm":
      return 1;
    case "ppb":
      return 1000;
    case "ppt":
      return 1000000;
    case "ppq":
      return 999999999.9999999;
  }
}
