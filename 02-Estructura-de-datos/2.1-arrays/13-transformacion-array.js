let num = [1, 3, 56, 575, 12, 32, 65];

// El map recorre todos los elementos del array y devuelve un nuevo array
let numDobles = num.map(function (num) {
    return num * 2
})

console.log(numDobles)

// El filter recorre todos los elementos del array y devuelve un nuevo array
let pares = num.filter(function (num) {
    return num % 2 === 0
})

console.log(pares)