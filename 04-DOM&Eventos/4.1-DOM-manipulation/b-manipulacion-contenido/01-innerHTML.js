const contenedor = document.querySelector("#contenido");
const containProductos = document.querySelector(".productos");

// Leer contenido HTML
console.log(contenedor.innerHTML);

// Establecer nuevo contenido HTML
contenedor.innerHTML = "<h2>Nuevo Título</h2><p>Nuevo párrafo</p>";

// Agregar contenido (no reemplazar)
contenedor.innerHTML += '<div class="nuevo">Contenido adicional</div>';

// Crear contenido dinámico
const productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
];

const listaHTML = productos
    .map(
        (producto) =>
            `<div class="producto">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
    </div>`
    )
    .join("");

containProductos.innerHTML = listaHTML;
