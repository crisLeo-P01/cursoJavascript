// Declaración de una función
function saludar(nombre) {
    return `Hola ${nombre}`
}

// Expresión de función (guardada en una variable)
const despedir = function (nombre) {
    return `Adios ${nombre}`
}

console.log(saludar('Cristian'))
console.log(despedir('Cristian'))

// Callback (función que se pasa como argumento a otra función)
function procesarUsuario(nombre, callback) {
    console.log(`Procesando a  ${nombre} ...`)
    callback(nombre)
}

function enviarCorreo(nombre) {
    console.log(`Correo enviado a ${nombre}`)
}

procesarUsuario('Paula', enviarCorreo)

// Funciones que devuelven funciones
function crearMultiplicador(x) {
    return function (y) {
        return x * y
    }
}

const duplicar = crearMultiplicador(2);
console.log(duplicar(5))