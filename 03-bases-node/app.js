const { createMultiplicationFile } = require('./helpers/multiplication');
const argv = require('./config/yargs');

require('colors')

createMultiplicationFile(argv.b, argv.l)
    .then(fileName => console.log(fileName.bgGreen, 'creado'))
    .catch(err => console.log(err));
