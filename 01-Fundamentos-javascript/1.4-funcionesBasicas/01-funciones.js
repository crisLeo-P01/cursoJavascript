// FUNCIÓN BÁSICA

function saludar() {
    console.log("hola, buenas tardes")
}

saludar()

// FUNCIÓN CON PARÁMETROS
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(3, 5)
console.log(resultado)

// FUNCIÓN CON VALORES POR DEFECTO
function bienvenida(nombre = "invitado") {
    console.log("Hola " + nombre)
}

bienvenida()
bienvenida('cristian')

// FUNCIONES CON VARIABLES(EXPRESIONES)
const multiplicar = function (x, y) {
    return x * y
}

console.log(multiplicar(2, 8))

// SCOPE & HOISTING
// Scope: el alcance de una variable.
let variableGlobal = "Soy una variable global"

function mostrar() {
    let variableLocal = "Soy una variable local"
    console.log(variableGlobal)
    console.log(variableLocal)
}

mostrar()
console.log(variableLocal) // ❌ Error porque la variable es local dentro de la función

// Hoisting: las funciones declaradas se “elevan” y pueden usarse antes de declararse.

saludo('cristian')

function saludo(nombre) {
    console.log("Hola, buenas tardes, ", nombre)
}

// Funcion flecha
const sumarFlecha = (a, b) => {
    return a + b;
}

sumarFlecha(3, 5);
console.log(sumarFlecha(3, 5))
