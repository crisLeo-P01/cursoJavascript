const estudiante = {
    nombre: 'Carlos',
    edad: 20,
    notaFinal: 8.5,
    materias: ['HTML', 'CSS', 'Javascript'],
    direccion: {
        calle: 'Gran Vía',
        numero: 123
    }
}

// Notación de punto
console.log(estudiante.nombre);
console.log(estudiante.edad);
console.log(estudiante.direccion.calle);

// Notación con corchetes
console.log(estudiante['nombre']);
console.log(estudiante['edad']);
console.log(estudiante['direccion']['calle'] + ' ' + estudiante['direccion']['numero']);

