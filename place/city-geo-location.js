const axios = require('axios');
const apiKeyCityGeo = 'e52e01a355msh0db087da5cacb67p10c525jsna21b5d52896d';
const base = 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php';

const getPlaceLatitudeLongitude = async (adr) => {
    const encodeUrl = encodeURI(adr);

    const instance = axios.create({
        baseURL: `${base}?location=${encodeUrl}`,
        timeout: 1000,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': apiKeyCityGeo
        }
    });

    const response = await instance.get();

    if (response.data.Results.langht === 0) {
        throw new Error(`No hay resultados para ${adr}`);
    }

    const data = response.data.Results[0];
    const address = data.name;
    const latitude = data.lat;
    const longitude = data.lon;

    return {
        address,
        latitude,
        longitude
    }
}

module.exports = {
    getPlaceLatitudeLongitude
}

