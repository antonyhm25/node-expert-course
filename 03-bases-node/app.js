const { createMultiplicationFile } = require('./helpers/multiplication');

console.clear();

const [,, arg3 = 'base=1'] = process.argv;
const [, base = 1] = arg3.split('=');

createMultiplicationFile(base)
    .then(fileName => console.log(fileName, 'creado'))
    .catch(err => console.log(err));
