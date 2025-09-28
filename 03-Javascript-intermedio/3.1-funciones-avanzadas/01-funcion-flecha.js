// Función tradicional
function sumar(a, b) {
    return a + b;
}

// Función flecha
const sumar = (a, b) => {
    return a + b;
};

// Versión más corta (return implícito)
const sumar = (a, b) => a + b;

// Variaciones de sintaxis

// Sin parámetros
const saludar = () => "¡Hola!";

// Un parámetro (sin paréntesis)
const cuadrado = x => x * x;

// Múltiples parámetros
const multiplicar = (x, y) => x * y;

// Cuerpo de función complejo
const procesar = (datos) => {
    const resultado = datos.map(x => x * 2);
    return resultado.filter(x => x > 10);
};

// Retornar objeto (entre paréntesis)
const crearPersona = (nombre, edad) => ({ nombre, edad });