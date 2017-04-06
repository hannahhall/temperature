// Get a reference to the button element in the DOM
var button = document.getElementById("button");
var tempInput = document.getElementById("tempInput");
var outputDiv = document.getElementById("output");

function toCelsius (input) {
	var output= (input-32)/1.8;
	outputDiv.innerHTML = output + "&degC";
	stylezzz(output, 32, 0);
}

function toFahrenheit (input) {
	var output= input*1.8+32;
	outputDiv.innerHTML = output + "&degF";
	stylezzz(output, 90, 32)
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
  if (document.getElementById("fah").checked === true) {
  	toFahrenheit(tempInput.value);
  } else if (document.getElementById("celsius").checked === true) {
  	toCelsius(tempInput.value);
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

// Add an event handler to the input field that checks if the user pressed the
// enter key, and if that happens, perform the conversion.
tempInput.addEventListener('keypress', function(e) {
	if (e.charCode === 13) {
		determineConverter(e);
	}
})

// If the temperature is greater than 90F/32C the color of the converted
// temperature should be red.
// If the temperature is less than 32F/0C the color of the converted
// temperature should be blue.
function stylezzz (temp, hot, cold) {
	if (temp >= hot) {
		outputDiv.style.color = 'red';
	} else if (temp <= cold) {
		outputDiv.style.color = 'blue';
	} else {
		outputDiv.style.color = 'green'
	}
}
