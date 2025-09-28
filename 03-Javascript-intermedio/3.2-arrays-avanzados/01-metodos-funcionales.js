// MAP - transforma cada elemento ///////////////////////////////////

const numeros = [1, 2, 3, 4, 5];

// Multiplicar por 2
const dobles = numeros.map(num => num * 2);
console.log(dobles); // [2, 4, 6, 8, 10]

// Trabajar con objetos
const productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 }
];

const nombres = productos.map(producto => producto.nombre);
console.log(nombres); // ["Laptop", "Mouse", "Teclado"]

// Aplicar descuento
const conDescuento = productos.map(producto => ({
    ...producto,
    precioDescuento: producto.precio * 0.9
}));

///////////////
// FILTER - filtra elementos que complan condición //////////////////
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Números pares
const pares = numeros2.filter(num => num % 2 === 0);
console.log(pares); // [2, 4, 6, 8, 10]

// Productos caros
const productosCaros = productos.filter(producto => producto.precio > 30);
console.log(productosCaros); // [Laptop, Teclado]

// Palabras largas
const palabras = ["hola", "JavaScript", "programación", "web"];
const palabrasLargas = palabras.filter(palabra => palabra.length > 5);
console.log(palabrasLargas); // ["JavaScript", "programación"]

///////////////
// REDUCE - reduce array a un solo valor ////////////////////////////
const numeros3 = [1, 2, 3, 4, 5];

// Suma total
const suma = numeros3.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma); // 15

// Encontrar el mayor
const mayor = numeros3.reduce((max, num) => num > max ? num : max, 0);
console.log(mayor); // 5

// Contar ocurrencias
const frutas = ["manzana", "pera", "manzana", "uva", "pera", "manzana"];
const conteo = frutas.reduce((acc, fruta) => {
    acc[fruta] = (acc[fruta] || 0) + 1;
    return acc;
}, {});
console.log(conteo); // { manzana: 3, pera: 2, uva: 1 }

// Precio total de productos
const total = productos.reduce((suma, producto) => suma + producto.precio, 0);
console.log(total); // 1075