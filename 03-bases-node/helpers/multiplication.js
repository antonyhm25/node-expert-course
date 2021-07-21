const fs = require('fs');

const createMultiplicationFile = async (base = 1) => {
    let output = '';

    try {
        console.log('========================');
        console.log('    Tabla del:', base);
        console.log('========================');

        for (let i = 1; i <= 10; i++) {
            output += `${base} x ${i} = ${base * i} \n`;
        }

        console.log(output);

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