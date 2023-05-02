// Reactive Energy Converter
const reactiveEnergyConverterForm = document.querySelector("#reactive-energy-converter");
const reactiveEnergyInputValue = document.querySelector("#input-reactive-energy-value");
const fromReactiveEnergyUnit = document.querySelector("#from-reactive-energy-unit");
const toReactiveEnergyUnit = document.querySelector("#to-reactive-energy-unit");
const reactiveEnergyResult = document.querySelector("#reactive-energy-result");

reactiveEnergyConverterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const fromUnit = fromReactiveEnergyUnit.value;
  const toUnit = toReactiveEnergyUnit.value;
  const inputReactiveEnergy = parseFloat(reactiveEnergyInputValue.value);
  
  if (fromUnit === "var") {
    if (toUnit === "kvar") {
      const result = inputReactiveEnergy / 1000;
      reactiveEnergyResult.innerHTML = `${inputReactiveEnergy} var = ${result} kvar`;
    } else if (toUnit === "mvar") {
      const result = inputReactiveEnergy / 1000000;
      reactiveEnergyResult.innerHTML = `${inputReactiveEnergy} var = ${result} mvar`;
    } else if (toUnit === "gvar") {
      const result = inputReactiveEnergy / 1000000000;
      reactiveEnergyResult.innerHTML = `${inputReactiveEnergy} var = ${result} gvar`;
    } else {
      reactiveEnergyResult.innerHTML = "Please select a valid unit to convert to.";
    }
  } else if (fromUnit === "kvar") {
    if (toUnit === "var") {
      const result = inputReactiveEnergy * 1000;
      reactiveEnergyResult.innerHTML = `${inputReactiveEnergy} kvar = ${result} var`;
    } else if (toUnit === "mvar") {
      const result = inputReactiveEnergy / 1000;
      reactiveEnergyResult.innerHTML = `${inputReactiveEnergy} kvar = ${result} mvar`;
    } else if (toUnit === "gvar") {
      const result = inputReactiveEnergy / 1000000;
      reactiveEnergyResult.innerHTML = `${inputReactiveEnergy} kvar = ${result} gvar`;
    } else {
      reactiveEnergyResult.innerHTML = "Please select a valid unit to convert to.";
    }
  } else if (fromUnit === "mvar") {
    if (toUnit === "var") {
      const result = inputReactiveEnergy * 1000000;
      reactiveEnergyResult.innerHTML = `${inputReactiveEnergy} mvar = ${result} var`;
    } else if (toUnit === "kvar") {
      const result = inputReactiveEnergy * 1000;
      reactiveEnergyResult.innerHTML = `${inputReactiveEnergy} mvar = ${result} kvar`;
    } else if (toUnit === "gvar") {
      const result = inputReactiveEnergy / 1000;
      reactiveEnergyResult.innerHTML = `${inputReactiveEnergy} mvar = ${result} gvar`;
    } else {
      reactiveEnergyResult.innerHTML = "Please select a valid unit to convert to.";
    }
} else if (fromUnit === "gvar") {
    if (toUnit === "var") {
      const result = inputReactiveEnergy * 1000000000;
      reactiveEnergyResult.innerHTML = `${inputReactiveEnergy} gvar = ${result} var`;
    } else if (toUnit === "kvar") {
      const result = inputReactiveEnergy * 1000000;
      reactiveEnergyResult.innerHTML = `${inputReactiveEnergy} gvar = ${result} kvar`;
    } else if (toUnit === "mvar") {
      const result = inputReactiveEnergy * 1000;
      reactiveEnergyResult.innerHTML = `${inputReactiveEnergy} gvar = ${result} mvar`;
    } else {
      reactiveEnergyResult.innerHTML = "Please select a valid unit to convert to.";
    }
  } else {
    reactiveEnergyResult.innerHTML = "Please select a valid unit to convert from.";
  }
});