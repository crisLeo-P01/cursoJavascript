// FOREACH - ejecuta función para cada elemento

const colores = ["rojo", "verde", "azul"];

// Imprimir cada color
colores.forEach((color, index) => {
    console.log(`${index}: ${color}`);
});

// Modificar elementos del DOM (ejemplo conceptual)
const elementos = document.querySelectorAll('.item');
elementos.forEach(elemento => {
    elemento.style.color = 'blue';
});

///////////////
// FIND() - encuentra el primer elemento que cumpla condición
const usuarios = [
    { id: 1, nombre: "Ana", activo: true },
    { id: 2, nombre: "Luis", activo: false },
    { id: 3, nombre: "María", activo: true }
];

// Encontrar usuario por ID
const usuario = usuarios.find(user => user.id === 2);
console.log(usuario); // { id: 2, nombre: "Luis", activo: false }

// Encontrar primer usuario activo
const usuarioActivo = usuarios.find(user => user.activo);
console.log(usuarioActivo); // { id: 1, nombre: "Ana", activo: true }

// Si no encuentra, devuelve undefined
const inexistente = usuarios.find(user => user.id === 5);
console.log(inexistente); // undefined

///////////////
// FINDINDEX() - encuentra el índice del primer elemento
const numeros = [10, 20, 30, 40, 50];

// Encontrar índice del número 30
const indice = numeros.findIndex(num => num === 30);
console.log(indice); // 2

// Encontrar índice del primer número mayor a 25
const indiceGrande = numeros.findIndex(num => num > 25);
console.log(indiceGrande); // 2

// Si no encuentra, devuelve -1
const noEncontrado = numeros.findIndex(num => num > 100);
console.log(noEncontrado); // -1

///////////////
// SOME() - verifica si al menos uno cumple condición
const edades = [16, 18, 20, 15];

// ¿Hay alguien mayor de edad?
const hayMayorEdad = edades.some(edad => edad >= 18);
console.log(hayMayorEdad); // true

// ¿Hay productos baratos?
const hayBaratos = productos.some(producto => producto.precio < 30);
console.log(hayBaratos); // true

// ¿Hay palabras con más de 10 caracteres?
const palabras = ["hola", "mundo", "JavaScript"];
const hayLargas = palabras.some(palabra => palabra.length > 10);
console.log(hayLargas); // false

///////////////
// EVERY() - verifica si todos cumplen condición
const numeros2 = [2, 4, 6, 8, 10];

// ¿Todos son pares?
const todosPares = numeros2.every(num => num % 2 === 0);
console.log(todosPares); // true

// ¿Todos los usuarios están activos?
const todosActivos = usuarios.every(user => user.activo);
console.log(todosActivos); // false

// ¿Todas las calificaciones son aprobatorias?
const calificaciones = [85, 92, 78, 88, 95];
const todasAprobadas = calificaciones.every(nota => nota >= 70);
console.log(todasAprobadas); // true

///////////////
// INCLUDES() - verifica si contiene elemento
const frutas = ["manzana", "pera", "uva", "naranja"];

console.log(frutas.includes("pera"));     // true
console.log(frutas.includes("banana"));   // false

// Con números
const numeros3 = [1, 2, 3, 4, 5];
console.log(numeros3.includes(3));  // true
console.log(numeros3.includes(6));  // false

// Sensible a mayúsculas
const nombres = ["Ana", "Luis", "María"];
console.log(nombres.includes("ana"));  // false
console.log(nombres.includes("Ana"));  // true