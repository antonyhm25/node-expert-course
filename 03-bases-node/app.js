const { createMultiplicationFile } = require('./helpers/multiplication');
const argv = require('./config/yargs');

createMultiplicationFile(argv.b, argv.l)
    .then(fileName => console.log(fileName, 'creado'))
    .catch(err => console.log(err));
