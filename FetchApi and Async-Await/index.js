// SELECTORS
const input = document.querySelector('#input');
const searchBtn = document.querySelector('#searchIcon');
const image = document.querySelector('#weatherImg');
const city = document.querySelector('#city');
const temp = document.querySelector('#temp');
const weatherType = document.querySelector('#weatherType');
const windSpeed = document.querySelector('#windSpeed span');
const feelsLike = document.querySelector('#feelsLike span');
const humidity = document.querySelector('#humidity span');
const airPressure = document.querySelector('#airPressure span');

// VARIABLES
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key = "77c49bccf20df0263f4939a2bc0ec27e";

// INPUT CITY EVENTLISTNER
input.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
        const value = input.value
        weather(value);
    }
})

// FUNCTION FOR FETCHING WEATHER DATA
async function weather(city) {
    try {
        const response = await fetch(`${apiURL}${city}&appid=${key}`);

        if (!response.ok) {
            return;
        }

        const data = await response.json()
        console.log(data);

        changeWeather(data);

    } catch (error) {
        console.log(`Data did not fatched --> ${error}`);

    }
}

// CHANGE WEATHER DISPLAY
function changeWeather(data) {
    image.src = `openweathermap/${data.weather[0].icon}.svg`
    city.textContent = data.name
    temp.textContent = `${Math.round(data.main.temp)}°`
    weatherType.textContent = data.weather[0].main
    windSpeed.textContent = `${data.wind.speed}Km/h`;
    feelsLike.textContent = `${data.main.feels_like}°`;
    humidity.textContent = `${data.main.humidity}`;
    airPressure.textContent = `${data.main.pressure} atm`
}