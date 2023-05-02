// Selecting the form element and adding an event listener for submission
const volumeConverter = document.getElementById('volume-converter');

volumeConverter.addEventListener('submit', function(e) {
  e.preventDefault(); // Preventing the default form submission behavior

  // Selecting the input fields and getting their values
  const inputVolumeValue = parseFloat(document.getElementById('input-volume-value').value);
  const fromVolumeUnit = document.getElementById('from-volume-unit').value;
  const toVolumeUnit = document.getElementById('to-volume-unit').value;

  // Converting the input volume value to mL (the base unit for volume)
  let mLValue;

  switch (fromVolumeUnit) {
    case 'ml':
      mLValue = inputVolumeValue;
      break;
    case 'l':
      mLValue = inputVolumeValue * 1000;
      break;
    case 'fl-oz':
      mLValue = inputVolumeValue * 29.5735;
      break;
    case 'gal':
      mLValue = inputVolumeValue * 3785.41;
      break;
    default:
      mLValue = inputVolumeValue;
  }

  // Converting the mL value to the output volume unit
  let outputVolumeValue;

  switch (toVolumeUnit) {
    case 'ml':
      outputVolumeValue = mLValue;
      break;
    case 'l':
      outputVolumeValue = mLValue / 1000;
      break;
    case 'fl-oz':
      outputVolumeValue = mLValue / 29.5735;
      break;
    case 'gal':
      outputVolumeValue = mLValue / 3785.41;
      break;
    default:
      outputVolumeValue = mLValue;
  }

  // Displaying the converted volume value
  const volumeResult = document.getElementById('volume-result');
  volumeResult.innerHTML = `${inputVolumeValue} ${fromVolumeUnit} = ${outputVolumeValue.toFixed(2)} ${toVolumeUnit}`;
});
