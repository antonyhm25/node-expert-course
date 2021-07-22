const fs = require('fs');

require('colors');

const createMultiplicationFile = async (base = 1, list = false, stop = 10) => {
    let output = '';
    let outConsole = ''

    try {
        for (let i = 1; i <= stop; i++) {
            outConsole += `${base}  ${'x'.blue}  ${i} ${'='.green} ${base * i} \n`;
            output += `${base}  x  ${i} = ${base * i} \n`;
        }

        if (list) {
            console.log('========================'.red);
            console.log(`     Tabla del: ${base}`.magenta);
            console.log('========================'.red);
            console.log(outConsole);
        }

        const fileName = `tabla-${base}.txt`;
        fs.writeFileSync(`./output/${fileName}`, output);

        return fileName;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    createMultiplicationFile
}