const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmarBorrar,
    mostrarListadoCheckList
} = require('./helpers/inquirer');

const { saveToJson, readToJson } = require('./helpers/utils-db');

const Tareas = require('./models/tareas');

console.clear();

const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    const db = readToJson();
    if (db) {
        tareas.arrayToItems(db);
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                const question = await leerInput('Descripción:');
                tareas.crearTarea(question);
            break;

            case 2:
                tareas.listadoCompleto();
            break;

            case 3:
                tareas.listartPendientesCompletadas();
            break;

            case 4:
                tareas.listartPendientesCompletadas(false);
            break;

            case 5:
                const ids = await mostrarListadoCheckList(tareas.itemsToArray);
                tareas.toggleCompletadas(ids);
            break;

            case 6:
                const id = await listadoTareasBorrar(tareas.itemsToArray)
                if (id !== 0) {
                    const respuesta = await confirmarBorrar('¿Está seguro?');
                    if (respuesta) {
                        tareas.borrarTarea(id)
                        console.log('Tarea(s) eliminada(s)');
                    }
                }
            break;
        }

        saveToJson(tareas.itemsToArray);

        await pausa();
    } while(opt !== 0);
}

main();