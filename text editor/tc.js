function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const resultElement = document.getElementById("result");

    if (isNaN(inputTemperature)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    let convertedTemperature;

    if (inputUnit === "celsius") {
        convertedTemperature = (inputTemperature * 9/5) + 32;
        resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °F`;
    } else {
        convertedTemperature = (inputTemperature - 32) * 5/9;
        resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °C`;
    }
}
