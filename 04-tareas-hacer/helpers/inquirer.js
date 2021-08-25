const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Crear una tarea`
            },
            {
                value: 2,
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: 3,
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: 4,
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: 5,
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: 6,
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`
            },
        ],
        prefix: ''
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('============================'.green);
    console.log('   Seleccione una opción'.white);
    console.log('============================\n'.green);

    const { opcion } = await inquirer.prompt(questions);

    return opcion
}

const pausa = async () => {
    console.log('\n');

    const { pause } = await inquirer.prompt([
       {
           type: 'input',
           name: 'pause',
           message: `Presione ${'Enter'.green} para continuar.`,
           prefix: ''
       }
    ]);

    return pause;
}

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'message',
            message,
            prefix: '-',

            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }

                return true;
            }
        }
    ];

    const { message: msg } = await inquirer.prompt(question);
    return msg;
}

const listadoTareasBorrar = async (tareas = []) => {
    console.log();

    const choices = tareas.map((e, i) => ({
        value: e.id,
        name:  `${((i + 1) + '.').green} ${e.description}`
    }))

    choices.unshift({
        value: 0,
        name: '0.'.green + ' Cancelar'
    })

    const { id } = await inquirer.prompt([
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices,
            prefix: 'x'
        }
    ]);

    return id;
}

const confirmarBorrar = async (message) => {
    const { respuesta } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'respuesta',
            message,
            prefix: ''
        }
    ]);

    return respuesta;
}


const mostrarListadoCheckList = async (tareas = []) => {
    console.log();

    const choices = tareas.map((e, i) => ({
        value: e.id,
        name:  e.description,
        checked: e.completedAt !== null
    }))

    const { ids } = await inquirer.prompt([
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices,
            prefix: ''
        }
    ]);

    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmarBorrar,
    mostrarListadoCheckList
}