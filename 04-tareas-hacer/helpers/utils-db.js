const fs = require('fs');

const path = './db/data.json';

const saveToJson = (data) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data));
    } catch (err) {
        throw err
    }
}

const readToJson = () => {
    if (!fs.existsSync(path)) {
        return null;
    }

    const content = fs.readFileSync(path, { encoding: 'utf-8' });
    return JSON.parse(content);
}

module.exports = {
    saveToJson,
    readToJson
}