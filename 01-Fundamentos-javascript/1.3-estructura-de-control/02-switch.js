// SINTAXIS SIMPLE
let dia = 'Viernes';

switch (dia) {
    case 'Lunes': console.log("Hoy es lunes."); break;
    case 'Martes': console.log("Hoy es martes."); break;
    case 'Miercoles': console.log("Hoy es miércoles."); break;
    case 'Jueves': console.log("Hoy es jueves."); break;
    case 'Viernes': console.log("Hoy es viernes."); break;
    case 'Sabado': console.log("Hoy es sábado."); break;
    case 'Domingo': console.log("Hoy es domingo."); break;
    default: console.log("Error al introducir el dia.");
}

let nombre = 'Cristian';

switch (nombre) {
    case "Cristian": console.log("Su apellido es Paiva"); break;
    case "Emiliano": console.log("Su apellido es Eggel"); break;
    case "Maria Elena": console.log("Su apellido es Lomazzi"); break;
    default: console.log(`El nombre ${nombre} no esta contemplado.`);
}

// SINTAXIS MÚLTIPLE
let num = 4;

switch (num) {
    case 1:
    case 3:
    case 5:
        console.log(`${num} es impar`); break;
    case 2:
    case 4:
        console.log(`${num} es par`); break;
    default: console.log('Numero no contemplado');
}