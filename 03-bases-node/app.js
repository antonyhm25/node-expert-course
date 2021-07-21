const fs = require('fs');

const mutiplication = (number) => {
    let output = '';

    for (let i = 1; i <= 10; i++) {
        output += `${number} x ${i} = ${number * i} \n`;
    }

    return output;
}

const base = 5

console.clear();
console.log('========================');
console.log(`   Tabla del: ${base}   `);
console.log('========================');

const output = mutiplication(base);

fs.writeFile(`tabla-${base}.txt`, output, (err) => {
    if (err) {
        return console.log('imposible guardar tabla de multiplicar.');
    }
    console.log('tabla de multiplicar guardada con éxito.');
});