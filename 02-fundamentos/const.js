/**
 * la palabra reservada const crea un variable en un ambito local o global
 * se usa const para crear variables que no pueden reasignarse
 */
const nombre = 'Wolverine';

if (true) {
    nombre = 'Magneto'
}

console.log(nombre);