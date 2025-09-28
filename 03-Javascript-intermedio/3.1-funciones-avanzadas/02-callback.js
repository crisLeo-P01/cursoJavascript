// Función que recibe un callback
function procesar(datos, callback) {
    console.log("Procesando datos...");
    const resultado = datos.map(x => x * 2);
    callback(resultado);
}

// Usando el callback
procesar([1, 2, 3, 4], (resultado) => {
    console.log("Resultado:", resultado); // [2, 4, 6, 8]
});

// Callbacks en métodos de array
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((num, index) => {
    console.log(`Posición ${index}: ${num}`);
});

// Callback con setTimeout
console.log("Inicio");
setTimeout(() => {
    console.log("Ejecutado después de 2 segundos");
}, 2000);
console.log("Fin");