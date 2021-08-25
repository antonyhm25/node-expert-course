const Tarea = require('./tarea');

class Tareas {
    constructor() {
        this.items = {};
    }

    borrarTarea(id = '') {
        if (this.items[id]) {
            delete this.items[id];
        }
    }

    arrayToItems(data) {
        data.forEach(e => this.items[e.id] = e);
    }

    crearTarea(description = '') {
        const tarea = new Tarea(description);
        this.items[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log();

        this.itemsToArray.forEach((e, i) => {
            const { description, completedAt } = e;
            const index = `${i + 1}.`.green;

            const status = completedAt
                ? 'Completado'.green
                : 'Pendiente'.red;

            console.log(`${index} ${description} :: ${status}`);
        });
    }

    listartPendientesCompletadas(done = true) {
        console.log();

        let counter = 0;
        this.itemsToArray.forEach(e => {
            const { description, completedAt } = e;

            if (done) {
                if (completedAt !== null) {
                    counter += 1;
                    console.log(`${(counter + '.').green} ${description} :: ${completedAt.green}`);
                }
            } else {
               if (completedAt === null) {
                counter += 1;
                console.log(`${(counter + '.').green} ${description} :: ${'Pendiente'.red}`);
               }
            }
        });
    }

    toggleCompletadas(ids = []) {
        this.itemsToArray.forEach(e => {
            const id = ids.findIndex(i => i === e.id)
            if (id > -1) {
                e.completedAt = e.completedAt ? e.completedAt : new Date().toISOString()
            } else {
                e.completedAt = null
            }
        })
    }

    get itemsToArray() {
        const itemsArray = [];

        Object.keys(this.items)
            .forEach(key => itemsArray.push(this.items[key]));

        // for (let key in this.items) {
        //    itemsArray.push(this.items[key]);
        // }

        return itemsArray;
    }
}

module.exports = Tareas