const { createMultiplicationFile } = require('./helpers/multiplication');
const argv = require('yargs').argv

console.log(process.argv);
console.log(argv);

console.log(argv.base);

// createMultiplicationFile(base)
//     .then(fileName => console.log(fileName, 'creado'))
//     .catch(err => console.log(err));
