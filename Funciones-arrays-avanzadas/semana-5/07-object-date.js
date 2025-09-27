const ahora = new Date();

console.log(ahora);

console.log(ahora.getDate()); // Día del mes
console.log(ahora.getMonth()); // Mes
console.log(ahora.getFullYear()); // Año
console.log(ahora.getHours()); // Hora
console.log(ahora.getMinutes()); // Minutos
console.log(ahora.getSeconds()); // Segundos
console.log(ahora.getMilliseconds()); // Milisegundos

// Crear una fecha específica
const fechaCumple = new Date(1986, 4, 15); // Año, mes (0-11), día
console.log(fechaCumple);

// Formatear fecha con template literals
const fechaBonita = `${ahora.getDate()}/${ahora.getMonth() + 1}/${ahora.getFullYear()}`;
console.log(fechaBonita)