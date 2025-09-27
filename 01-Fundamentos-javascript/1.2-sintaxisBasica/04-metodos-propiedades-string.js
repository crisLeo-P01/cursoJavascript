let nombre = "  Alejandro Pérez  ";

console.log(nombre.length);       // 19 (cuenta espacios)

console.log(nombre.trim().length);// 15 (sin espacios)

console.log(nombre.toUpperCase());// "ALEJANDRO PÉREZ"

console.log(nombre.toLowerCase());// "alejandro pérez"

console.log(nombre.includes("Pérez")); // true
console.log(nombre.indexOf("P"));      // 12
console.log(nombre.slice(2, 9));       // Alejand