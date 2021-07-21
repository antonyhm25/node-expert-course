/**
 * la palabra reservada var crea un variable en un ambito global
 * var en la actualidad ha sido reemplazada por let o const
 */
var nombre = 'Wolverine';

if (true) {
    var nombre = 'Magneto'
}

console.log(nombre);