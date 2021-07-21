/**
 * La sintaxis de desestructuración es una expresión de JavaScript
 * que permite desempacar valores de arreglos o propiedades
 * de objetos en distintas variables
 */

const superman = {
    name: 'Henry',
    lastName: 'Cavill',
    power: "Vuela",
    getName() {
        return `${this.name} ${this.lastName} ${this.power}`;
    }
}

// obtiene varlores de las variables sin desestructuración
// const name = superman.name;
// const lastName = superman.lastName;
// const power = superman.power;

// obtiene los valores con desestructuración
// const { name, lastName, power } = superman;

// console.log(name, lastName, power);

// desestructuración en funciones
function printHero({ name, lastName, power }) {
    console.log(name, lastName, power);
}

// printHero(superman);

// Desestructuración de arreglos
const heros = ['Superman', 'Ironman', 'Batman', 'Mujer Maravilla'];

// La coma indica que se ignora el elemento basodo en su posicion
const [, ironMan, , woman] = heros;

console.log(ironMan, woman);