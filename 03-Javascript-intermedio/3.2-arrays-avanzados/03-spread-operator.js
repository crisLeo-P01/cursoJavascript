// Copiar código

const original = [1, 2, 3];
const copia = [...original];
console.log(copia); // [1, 2, 3]

// Agregar elementos
const extendido = [...original, 4, 5, 6];
console.log(extendido); // [1, 2, 3, 4, 5, 6]

// Agregar al inicio
const alInicio = [0, ...original];
console.log(alInicio); // [0, 1, 2, 3]

// Concatenar arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const combinado = [...array1, ...array2, ...array3];
console.log(combinado); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

/////////////////
// Pasar argumentos a funciones
const numeros = [5, 1, 9, 3, 7];

// Math.max necesita argumentos separados
console.log(Math.max(...numeros)); // 9
console.log(Math.min(...numeros)); // 1

// Función personalizada
function sumarTres(a, b, c) {
    return a + b + c;
}

const valores = [10, 20, 30];
console.log(sumarTres(...valores)); // 60

/////////////////
// Convertir string en array
const palabra = "JavaScript";
const letras = [...palabra];
console.log(letras); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]