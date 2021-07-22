const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar.'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Imprime la tabla en la consola.'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser númerico.';
        }

        return true;
    })
    .argv;

    module.exports = argv;