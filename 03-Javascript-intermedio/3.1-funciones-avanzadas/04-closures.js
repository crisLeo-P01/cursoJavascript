/*
Un closure es cuando una función "recuerda"
variables de su ámbito exterior, incluso después
de que ese ámbito haya terminado.
*/

function crearContador() {
    let contador = 0; // Variable privada

    return function () {
        contador++; // Accede a la variable del ámbito exterior
        return contador;
    };
}

const contador1 = crearContador();
const contador2 = crearContador();

console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador2()); // 1 (independiente)
console.log(contador1()); // 3

// Closures con parámetros
function crearSaludador(prefijo) {
    return function (nombre) {
        return `${prefijo}, ${nombre}!`;
    };
}

const saludarFormal = crearSaludador("Buenos días");
const saludarInformal = crearSaludador("¡Hola");

console.log(saludarFormal("Sr. García")); // "Buenos días, Sr. García!"
console.log(saludarInformal("María"));    // "¡Hola, María!"