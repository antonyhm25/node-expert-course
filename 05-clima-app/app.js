require('dotenv').config();

const {
  inquirerMenu,
  pausa,
  leerInput,
  listarLugares
} = require('./helpers/inquirer');

const Busquedas = require('./models/busquedas');

const main = async () => {
  let option = 0;
  const busqueda = new Busquedas();

  do {
    option = await inquirerMenu();

    switch(option) {
      case 1:
        // TODO: Mostrar datos del clima
        const query = await leerInput('Ciudad: ');
        const places = await busqueda.ciudad(query);

        const idPlace = await listarLugares(places);

        const place = places.find(e => e.id == idPlace);
        if (place) {
          busqueda.agregarHistorial(place.name)

          const clima = await busqueda.climaLugar(place)

          console.clear();
          console.log('\nInformación de la ciudad\n'.green);
          console.log('Ciudad:', place.name.green);
          console.log('Lat:', place.lat);
          console.log('Lng:', place.lng);
          console.log('Temperatura:', clima.temp);
          console.log('Mínima:', clima.min);
          console.log('Máxima:', clima.max);
          console.log('Como está el clima:', clima.description.green);
        }
      break;

      case 2:
        busqueda.historialCapitalizado.forEach((e, i) => {
          const index = `${i + 1}.`.green
          console.log(`${index} ${e}`);
        });
      break;
    }

    if (option !== 0) await pausa();

  } while(option !== 0);
}

main();