const imagen = document.querySelector("#mi-imagen");
const link = document.querySelector("#mi-link");

// Obtener atributos
console.log(imagen.getAttribute("src"));
console.log(link.getAttribute("href"));

// Establecer atributos
imagen.setAttribute("src", "nueva-imagen.jpg");
imagen.setAttribute("alt", "Nueva descripción");
link.setAttribute("href", "https://nuevaurl.com");
link.setAttribute("target", "_blank");

// Verificar si existe un atributo
if (imagen.hasAttribute("data-id")) {
    console.log("Tiene data-id:", imagen.getAttribute("data-id"));
}

// Eliminar atributos
imagen.removeAttribute("data-old");

// Atributos booleanos
const checkbox = document.querySelector("#mi-checkbox");
checkbox.setAttribute("checked", ""); // Marcar
checkbox.removeAttribute("checked"); // Desmarcar

// Propiedades directas (más común para atributos estándar)
imagen.src = "imagen-directa.jpg";
checkbox.checked = true;
link.href = "https://ejemplo.com";
