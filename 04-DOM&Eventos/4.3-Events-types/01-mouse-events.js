const elemento = document.querySelector('#elemento');

// Click
elemento.addEventListener('click', (e) => {
    console.log('Click simple');
});

// Doble click
elemento.addEventListener('dblclick', (e) => {
    console.log('Doble click');
});

// Mouse enter (al entrar)
elemento.addEventListener('mouseenter', (e) => {
    console.log('Mouse entró al elemento');
    elemento.style.backgroundColor = 'lightblue';
});

// Mouse leave (al salir)
elemento.addEventListener('mouseleave', (e) => {
    console.log('Mouse salió del elemento');
    elemento.style.backgroundColor = '';
});

// Mouse move (al mover dentro del elemento)
elemento.addEventListener('mousemove', (e) => {
    console.log(`Posición: X=${e.clientX}, Y=${e.clientY}`);
});

// Mouse down (al presionar botón)
elemento.addEventListener('mousedown', (e) => {
    console.log('Botón del mouse presionado');
});

// Mouse up (al soltar botón)
elemento.addEventListener('mouseup', (e) => {
    console.log('Botón del mouse soltado');
});

// Context menu (click derecho)
elemento.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Prevenir menú contextual default
    console.log('Click derecho');
});