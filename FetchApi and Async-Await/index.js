// SELECTORS
const input = document.querySelector('#input');
const searchBtn = document.querySelector('#searchIcon');
const image = document.querySelector('#weatherImg');
const city = document.querySelector('#city');
const temp = document.querySelector('#temp span');
const weatherType = document.querySelector('#weatherType');

// VARIABLES
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key = "77c49bccf20df0263f4939a2bc0ec27e";

async function weather(city) {
    const response = await fetch(`${apiURL}${city}&appid=${key}`);
    const data = await response.json()
    // console.log(response);
    // console.log(data);
    return data;
}

input.addEventListener('keydown', async (e) => {
    let data;
    if (e.key === 'Enter') {
        const value = input.value
        data = await weather(value);
        changeWeather(data);
    }
})

function changeWeather(data) {
    image.src = `openweathermap/${data.weather[0].icon}.svg`
    city.textContent = data.name
    temp.textContent = Math.round(data.main.temp)
    weatherType.textContent = data.weather[0].main
}