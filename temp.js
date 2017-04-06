function toCelsius (input) {
	var output= (input-32)/1.8;
	document.getElementById("conv").innerHTML = output + "&degC";
}


function toFahrenheit (input) {
	var output= input*1.8+32;
	document.getElementById("conv").innerHTML = output + "&degF";
}

// Get a reference to the button element in the DOM
var button = document.getElementById("button");
iv
// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  // console.log("event", clickEvent);
  if (document.getElementById("fah").checked === true) {
  	toFahrenheit(document.getElementById("tempInput").value);
  } else if (document.getElementById("celsius").checked === true) {
  	toCelsius(document.getElementById("tempInput").value);
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

