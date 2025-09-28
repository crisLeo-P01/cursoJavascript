let frutas = ['manzana', 'pera', 'kiwi', 'frutilla']

console.log(frutas)
console.log(frutas[0])
console.log(frutas[2])

frutas.push('Arandanos', 'Banana') // Agrega uno o varios elementos al final del array
console.log(frutas)

frutas.unshift('Uva', 'Frutilla')
console.log(frutas) // Agrega uno o varios elementos al principio del array

frutas.pop()
console.log(frutas) // Quita un elemento al final del array

frutas.shift()
console.log(frutas) // Quita un elemento al principio del array

console.log(frutas.length) // Cantidad de elementos

console.log(frutas.indexOf('pera')) // Posición de un elemento

console.log(frutas.includes('kiwi')) // Devuelve un true si existe, y sino devuelve un false