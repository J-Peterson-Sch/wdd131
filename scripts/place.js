const temp = 20;
const windSpeed = 5;
const windChillElement = document.querySelector("#wind-chill");


function calculateWindChill(temp, windSpeed) {
    const windChill = 13.12 + (0.6215 * temp) - (11.37 * windSpeed**0.16) + (0.3965 * temp * windSpeed**0.16);
    return Math.round(windChill);
}   

if (temp !== "" & windSpeed !=="") {
    const windChill = calculateWindChill(temp,windSpeed);
    windChillElement.innerHTML = `${windChill}&#176;C`;
}