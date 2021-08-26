const fs = require('fs');
const axios = require('axios');
const { runInThisContext } = require('vm');

class Busquedas {
  constructor() {
    this.path = './db/database.json';

    this.historial = this.readFromJson();
  }

  get paramsMapbox() {
    return {
      'access_token': process.env.MAPBOX_TOKEN,
      'limit': 5,
      'language': 'es'
    }
  }

  get paramsOpenWeather() {
    return {
      'appid': process.env.OPEN_WEATHER_TOKEN,
      'units': 'metric',
      'lang': 'es'
    }
  }

  get historialCapitalizado() {
    return this.historial.map(e => {
      return e
        .split(' ')
        .map(e => e[0].toUpperCase() + e.substr(1))
        .join(' ');
    })
  }

  async ciudad(lugar = '') {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapbox
      });

      const { data: { features } } = await instance.get();

      return features.map(e => ({
        id: e.id,
        name: e.place_name,
        lng: e.center[0],
        lat: e.center[1],
      }));

    } catch (err) {
      return [];
    }
  }

  async climaLugar({ lat, lng: lon }) {
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: {
          ...this.paramsOpenWeather,
          lat,
          lon
        }
      });

      const {
        data: {
          weather,
          main: { temp, temp_min: min, temp_max: max  }
        }
      } = await instance.get();

      return {
        description: weather[0].description,
        max,
        min,
        temp
      }
    } catch (error) {
      console.log(error);
    }
  }

  agregarHistorial(lugar = '') {
    if (!this.historial.includes(lugar.toLowerCase())) {
      this.historial.unshift(lugar.toLowerCase());

      this.historial = this.historial.splice(0, 5)
      this.saveToJson();
    }
  }

  saveToJson() {
    const payload = {
      historial: this.historial
    };

    fs.writeFileSync(this.path, JSON.stringify(payload));
  }

  readFromJson() {
    if (fs.existsSync(this.path)) {
      const { historial } = JSON.parse(fs.readFileSync(this.path, {
        encoding: 'utf-8'
      }));

      return historial;
    }

    return [];
  }
}

module.exports = Busquedas