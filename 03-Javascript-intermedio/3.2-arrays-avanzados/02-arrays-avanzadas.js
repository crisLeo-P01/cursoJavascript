const numeros = [56, 32, 65, 3, 305, 21, 18, 9, 43];

// Métodos de arrays
console.log(numeros.find(n => n > 50)) // Devuelve el primer elemento que cumpla con la condición
console.log(numeros.findIndex(n => n < 45)) // Devuelve el índice del primer elemento que cumpla la condición
console.log(numeros.some(n => n < 0)) // Devuelve true si ALGÚN elemento cumple la condición
console.log(numeros.every(n => n > 4)) // Devuelve true si TODOS cumple la condición
console.log(numeros.sort((a, b) => a - b)) // Ordena los elementos (por defecto alfabéticamente)