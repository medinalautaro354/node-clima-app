const axios = require('axios');
const base = 'https://api.openweathermap.org/data/2.5/weather';
const appKey = 'f70932272a9ed23fc6e8bd81a4d92f86';
const unit = 'metric';
const getWeather = async (latitude, longitude) =>{

    const response = await axios.get(`${base}?lat=${latitude}&lon=${longitude}&appid=${appKey}&units=${unit}`);

    const temperature = response.data.main.temp;

    return {
        temperature
    }
}

module.exports = {
    getWeather
}