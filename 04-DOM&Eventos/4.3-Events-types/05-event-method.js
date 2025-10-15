// preventDefault() - Prevenir comportamiento por defecto
const link = document.querySelector('#mi-link');
link.addEventListener('click', (e) => {
    e.preventDefault(); // No navega al href
    console.log('Link clickeado pero navegación prevenida');
});

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // No envía el formulario
    console.log('Envío prevenido, validar primero');
});

// stopPropagation() - Detener propagación del evento
const padre = document.querySelector('#padre');
const hijo = document.querySelector('#hijo');

padre.addEventListener('click', () => {
    console.log('Click en padre');
});

hijo.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que llegue al padre
    console.log('Click en hijo (no se propaga)');
});

// stopImmediatePropagation() - Detiene todos los listeners
const elemento = document.querySelector('#elemento');

elemento.addEventListener('click', (e) => {
    console.log('Primer listener');
    e.stopImmediatePropagation(); // Detiene todo
});

elemento.addEventListener('click', () => {
    console.log('Este listener NO se ejecutará');
});