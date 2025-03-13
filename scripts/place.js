const temp = 10;
const windSpeed = 5;
const windChillElement = document.querySelector("#wind-chill");

function calculateWindChill(temp, windSpeed) {
    return Math.round(13.12 + (0.6215 * temp) - (11.37 * windSpeed**0.16) + (0.3965 * temp * windSpeed**0.16));
}   

if (temp <= 10 & windSpeed > 4.8) {
    const windChill = calculateWindChill(temp,windSpeed);
    windChillElement.innerHTML = `${windChill}&#176;C`;
}else{
    windChillElement.innerHTML = `NA`;
}