function aplicarOperacion(numeros, operacion) {
    return numeros.map(operacion);
}

const numeros = [1, 2, 3, 4, 5];

// Diferentes operaciones
const cuadrados = aplicarOperacion(numeros, x => x * x);
const dobles = aplicarOperacion(numeros, x => x * 2);
const cubos = aplicarOperacion(numeros, x => x * x * x);

console.log(cuadrados); // [1, 4, 9, 16, 25]
console.log(dobles);    // [2, 4, 6, 8, 10]

// Funciones que devuelven otras funciones
function crearMultiplicador(factor) {
    return function (numero) {
        return numero * factor;
    };
}

const multiplicarPor2 = crearMultiplicador(2);
const multiplicarPor5 = crearMultiplicador(5);

console.log(multiplicarPor2(10)); // 20
console.log(multiplicarPor5(4));  // 20

// Con arrow functions
const crearSumador = (incremento) => (numero) => numero + incremento;
const sumar10 = crearSumador(10);
console.log(sumar10(5)); // 15