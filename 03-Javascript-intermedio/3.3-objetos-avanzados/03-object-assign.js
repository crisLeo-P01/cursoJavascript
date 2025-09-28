// Copia y combina objetos
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };
const objeto3 = { e: 5, f: 6 };

// Combinar objetos
const combinado = Object.assign({}, objeto1, objeto2, objeto3);
console.log(combinado); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// Copia superficial
const original = { nombre: "Ana", edad: 25 };
const copia = Object.assign({}, original);
copia.edad = 30;
console.log(original.edad); // 25 (no se modifica)

///////////////////////
// Spread operator con objetos (mas moderno)
const persona = { nombre: "Luis", edad: 30 };
const trabajo = { empresa: "TechCorp", puesto: "Developer" };

// Combinar con spread
const empleado = { ...persona, ...trabajo };
console.log(empleado); // { nombre: "Luis", edad: 30, empresa: "TechCorp", puesto: "Developer" }

// Agregar/modificar propiedades
const personaActualizada = {
    ...persona,
    edad: 31, // modifica
    ciudad: "Madrid" // agrega
};
console.log(personaActualizada); // { nombre: "Luis", edad: 31, ciudad: "Madrid" }