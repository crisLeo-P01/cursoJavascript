let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

let combinado = [...arr1, ...arr2];
console.log(combinado)

let persona1 = { nombre: 'Ana', edad: 21 }
let persona2 = { ...persona1, ciudad: 'Mendoza' }

console.log(persona1)
console.log(persona2)