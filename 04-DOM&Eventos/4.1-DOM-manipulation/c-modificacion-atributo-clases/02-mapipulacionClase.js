const elemento = document.querySelector("#mi-elemento");

// Agregar clases
elemento.classList.add("nueva-clase");
elemento.classList.add("clase1", "clase2", "clase3"); // Múltiples clases

// Eliminar clases
elemento.classList.remove("clase-vieja");
elemento.classList.remove("clase1", "clase2"); // Múltiples clases

// Alternar clase (toggle)
elemento.classList.toggle("activo"); // Agrega si no existe, elimina si existe

// Verificar si tiene una clase
if (elemento.classList.contains("activo")) {
    console.log("El elemento está activo");
}

// Reemplazar clase
elemento.classList.replace("clase-vieja", "clase-nueva");

// Obtener todas las clases
console.log(elemento.classList); // DOMTokenList
console.log(elemento.className); // String con todas las clases
