/**
 * la palabra reservada let crea un variable en un ambito global o local
 * uso estandar en la actualidad preferible const
 */
let nombre = 'Wolverine';

if (true) {
    /**
     * variable nombre2 su alcance encerrado en la condición if
     */
    let nombre2 = 'Magneto';

    console.log(nombre2);

    // sobreescribiendo variable global nombre en if
    nombre = 'Ciclope';
}

console.log(nombre);