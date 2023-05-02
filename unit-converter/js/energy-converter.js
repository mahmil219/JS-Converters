// Energy Converter
const energyConverterForm = document.querySelector("#energy-converter");
const energyInputValue = document.querySelector("#input-energy-value");
const fromEnergyUnit = document.querySelector("#from-energy-unit");
const toEnergyUnit = document.querySelector("#to-energy-unit");
const energyResult = document.querySelector("#energy-result");

energyConverterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const fromUnit = fromEnergyUnit.value;
  const toUnit = toEnergyUnit.value;
  const inputEnergy = parseFloat(energyInputValue.value);
  
  if (fromUnit === "joule") {
    if (toUnit === "kilojoule") {
      const result = inputEnergy / 1000;
      energyResult.innerHTML = `${inputEnergy} J = ${result} kJ`;
    } else if (toUnit === "calorie") {
      const result = inputEnergy / 4.184;
      energyResult.innerHTML = `${inputEnergy} J = ${result} cal`;
    } else if (toUnit === "kilocalorie") {
      const result = inputEnergy / 4184;
      energyResult.innerHTML = `${inputEnergy} J = ${result} kcal`;
    } else {
      energyResult.innerHTML = "Please select a valid unit to convert to.";
    }
  } else if (fromUnit === "kilojoule") {
    if (toUnit === "joule") {
      const result = inputEnergy * 1000;
      energyResult.innerHTML = `${inputEnergy} kJ = ${result} J`;
    } else if (toUnit === "calorie") {
      const result = inputEnergy * 239.006;
      energyResult.innerHTML = `${inputEnergy} kJ = ${result} cal`;
    } else if (toUnit === "kilocalorie") {
      const result = inputEnergy / 4.184;
      energyResult.innerHTML = `${inputEnergy} kJ = ${result} kcal`;
    } else {
      energyResult.innerHTML = "Please select a valid unit to convert to.";
    }
  } else if (fromUnit === "calorie") {
    if (toUnit === "joule") {
      const result = inputEnergy * 4.184;
      energyResult.innerHTML = `${inputEnergy} cal = ${result} J`;
    } else if (toUnit === "kilojoule") {
      const result = inputEnergy / 239.006;
      energyResult.innerHTML = `${inputEnergy} cal = ${result} kJ`;
    } else if (toUnit === "kilocalorie") {
      const result = inputEnergy / 1000;
      energyResult.innerHTML = `${inputEnergy} cal = ${result} kcal`;
    } else {
      energyResult.innerHTML = "Please select a valid unit to convert to.";
    }
  } else if (fromUnit === "kilocalorie") {
    if (toUnit === "joule") {
      const result = inputEnergy * 4184;
      energyResult.innerHTML = `${inputEnergy} kcal = ${result} J`;
    } else if (toUnit === "kilojoule") {
      const result = inputEnergy * 4.184;
      energyResult.innerHTML = `${inputEnergy} kcal = ${result} kJ`;
    } else if (toUnit === "calorie") {
      const result = inputEnergy * 1000;
      energyResult.innerHTML = `${inputEnergy} kcal = ${result} cal`;
    } else {
      energyResult.innerHTML = "Please select a valid unit to convert to.";
    }
  }
});
   
