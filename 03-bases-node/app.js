const { createMultiplicationFile } = require('./helpers/multiplication');

console.clear();

const base = 4;

createMultiplicationFile(base)
    .then(fileName => console.log(fileName, 'creado'))
    .catch(err => console.log(err));
