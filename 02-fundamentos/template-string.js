const nombre = 'Superman';
const real = 'Henrry Calvi';

const normal = nombre + ' ' + real;
const template = `${nombre} ${real}`;

// expresiones en template string
const expressions = `2 * 1 es = ${ 2 * 1}`;

console.log(normal);
console.log(template);
console.log(expressions);

// multilineas en template string
const html = `
<html>
    <head>
        <title>Tempalte Strning</title>
    </head>
    <body>
        <h1>Ejemplo de template string multilinea</h1>
        <p>escriba el contenido aquí</p>
    </body>
</html>
`;

console.log(html);