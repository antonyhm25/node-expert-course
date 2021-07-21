const fs = require('fs');

const mutiplication = (number) => {
    let output = '';

    for (let i = 1; i <= 10; i++) {
        output += `${number} x ${i} = ${number * i} \n`;
    }

    return output;
}

const base = 8;

console.clear();
console.log('========================');
console.log(`   Tabla del: ${base}   `);
console.log('========================');

const output = mutiplication(base);

fs.writeFileSync(`tabla-${base}.txt`, output);
console.log(`tabla del ${base} creada.`);
