// Datos de estudiantes
const estudiantes = [
    { nombre: "Ana", calificaciones: [85, 92, 78] },
    { nombre: "Luis", calificaciones: [90, 88, 95] },
    { nombre: "María", calificaciones: [76, 82, 89] },
    { nombre: "Pedro", calificaciones: [95, 87, 91] }
];

// 1. Calcular promedios usando map y reduce
const conPromedios = estudiantes.map(estudiante => ({
    ...estudiante, // spread operator
    promedio: estudiante.calificaciones.reduce((suma, nota) => suma + nota, 0) / estudiante.calificaciones.length
}));

// 2. Filtrar estudiantes aprobados (promedio >= 80)
const aprobados = conPromedios.filter(estudiante => estudiante.promedio >= 80);

// 3. Encontrar el mejor estudiante
const mejorEstudiante = conPromedios.find(estudiante =>
    estudiante.promedio === Math.max(...conPromedios.map(e => e.promedio))
);

// 4. Verificar si todos aprobaron
const todosAprobaron = conPromedios.every(estudiante => estudiante.promedio >= 70);

// 5. Verificar si hay algún estudiante excelente (promedio >= 90)
const hayExcelencia = conPromedios.some(estudiante => estudiante.promedio >= 90);

// 6. Destructuring para obtener nombres
const [primero, segundo, ...otrosEstudiantes] = aprobados.map(e => e.nombre);

console.log("Aprobados:", aprobados);
console.log("Mejor estudiante:", mejorEstudiante);
console.log("Todos aprobaron:", todosAprobaron);
console.log("Hay excelencia:", hayExcelencia);
console.log("Primeros dos aprobados:", primero, segundo);