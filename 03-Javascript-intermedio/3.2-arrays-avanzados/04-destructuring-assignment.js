const colores = ["rojo", "verde", "azul", "amarillo"];

// Extraer elementos
const [primero, segundo] = colores;
console.log(primero); // "rojo"
console.log(segundo); // "verde"

// Saltar elementos
const [, , tercero] = colores;
console.log(tercero); // "azul"

// Con valores por defecto
const [a, b, c, d, e = "morado"] = colores;
console.log(e); // "morado"

///////////////
// Rest operator en destructuring
const numeros = [1, 2, 3, 4, 5, 6, 7];

// Separar primer elemento del resto
const [primero1, ...resto] = numeros;
console.log(primero1); // 1
console.log(resto);   // [2, 3, 4, 5, 6, 7]

// Separar primeros dos del resto
const [uno, dos, ...restantes] = numeros;
console.log(uno);       // 1
console.log(dos);       // 2
console.log(restantes); // [3, 4, 5, 6, 7]

///////////////
// Destructuring de funciones
function procesarDatos([primero, segundo, ...resto]) {
    console.log("Primer dato:", primero);
    console.log("Segundo dato:", segundo);
    console.log("Datos restantes:", resto);
}

procesarDatos([1, 2, 3, 4, 5]);
// Primer dato: 1
// Segundo dato: 2
// Datos restantes: [3, 4, 5]

// Retornar múltiples valores
function obtenerEstadisticas(numeros) {
    const suma = numeros.reduce((a, b) => a + b, 0);
    const promedio = suma / numeros.length;
    const max = Math.max(...numeros);
    const min = Math.min(...numeros);

    return [suma, promedio, max, min];
}

const datos = [1, 2, 3, 4, 5];
const [suma, promedio, maximo, minimo] = obtenerEstadisticas(datos);