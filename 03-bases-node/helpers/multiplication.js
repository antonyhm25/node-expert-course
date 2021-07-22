const fs = require('fs');

require('colors');

const createMultiplicationFile = async (base = 1, list = false) => {
    let output = '';

    try {
        for (let i = 1; i <= 10; i++) {
            output += `${base}  ${'x'.blue}  ${i} ${'='.green} ${base * i} \n`;
        }

        if (list) {
            console.log('========================'.red);
            console.log(`     Tabla del: ${base}`.magenta);
            console.log('========================'.red);
            console.log(output);
        }

        const fileName = `tabla-${base}.txt`;
        fs.writeFileSync(fileName, output);

        return fileName;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    createMultiplicationFile
}