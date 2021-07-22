const { createMultiplicationFile } = require('./helpers/multiplication');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        demandOption: true
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser númerico.';
        }

        return true;
    })
    .argv;

console.log(argv);

createMultiplicationFile(argv.b, argv.l)
    .then(fileName => console.log(fileName, 'creado'))
    .catch(err => console.log(err));
