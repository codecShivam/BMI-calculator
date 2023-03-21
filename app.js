function calculateBMI() {
	// Get user input values
	let weight = parseFloat(document.getElementById("weight").value);
	let height = parseFloat(document.getElementById("height").value);
	
	// Calculate BMI
	let bmi = weight / ((height/100) * (height/100));
	
	// Round BMI to 2 decimal places
	bmi = bmi.toFixed(2);
	
	// Display BMI result
	document.getElementById("result").innerHTML = bmi;
}
