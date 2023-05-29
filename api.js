// Conexion api
const api = {
    key: 'a105a6fa6d60ff5d5ab2d0170aea9d5a',
    url: 'https://api.openweathermap.org/data/2.5/weather'
}

const date = document.getElementById('date');
const temperature = document.getElementById('temperature');
const weather = document.getElementById('weather');
const range = document.getElementById('range-temperature');

async function search(query) {
    try {
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
        const data = await response.json();
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        data.innerHTML = (new Date()).toLocaleDateString();
        temperature.innerHTML = `${toCelsius(data.main.temp)}c`;
        weather.innerHTML = data.weather[0].description;
        range.innerHTML = `${toCelsius(data.main.temp_min)}c / ${toCelsius(data.main.temp_max)}c`;
    } catch (err) {
        console.log(err);
        alert('Hubo un error');
    }
}

function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}

document.addEventListener("DOMContentLoaded", search('Salta'));