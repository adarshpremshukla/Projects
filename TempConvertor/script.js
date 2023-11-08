function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const conversionType = document.getElementById("conversionType").value;

    if (!temperatureInput || isNaN(temperatureInput)) {
        alert("Please enter a valid temperature.");
        return;
    }

    const temperature = parseFloat(temperatureInput);

    let convertedTemperature, unit;

    switch (conversionType) {
        case "celsius":
            convertedTemperature = (temperature - 32) * (5 / 9);
            unit = "°C";
            break;
        case "fahrenheit":
            convertedTemperature = temperature * (9 / 5) + 32;
            unit = "°F";
            break;
        case "kelvin":
            convertedTemperature = temperature + 273.15;
            unit = "K";
            break;
        default:
            alert("Invalid conversion type.");
            return;
    }

    document.getElementById("convertedTemperature").textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit}`;
}
