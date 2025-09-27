// Funcion flecha en una sola linea con return implicito. 
const sumarFlecha = (a, b) => a + b;

console.log(sumarFlecha(3, 5))

// Función flecha con llaves y return explicito.
const multiplicarFlecha = (a, b) => {
    return a * b
}

console.log(multiplicarFlecha(3, 5))

// Función flecha con un solo parametro.
const cuadradoFlecha = a => a * a;

console.log(cuadradoFlecha(3))

// Función flecha con un solo parametro y return implicito.
const cuboFlecha = a => a * a * a;
console.log(cuboFlecha(3))

// Con varias líneas necesitamos llaves y return explicito.
const saludar = nombre => {
    const saludo = `Hola ${nombre}`
    return saludo
}

console.log(saludar('Cristian'))