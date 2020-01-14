const place = require('./place/city-geo-location');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async (address) => {

    try {
        const coords = await place.getPlaceLatitudeLongitude(address);

        const climate = await weather.getWeather(coords.latitude, coords.longitude);

        return `El clima de ${coords.address} es de ${climate.temperature}.`;
    } catch (error) {
        return `No se pudo deteminar el clima de ${address}`
    }

}

getInfo(argv.address)
    .then(console.log)
    .catch(console.log);


