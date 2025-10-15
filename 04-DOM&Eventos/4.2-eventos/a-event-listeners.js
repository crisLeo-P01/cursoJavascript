// Seleccionar elemento
const boton = document.querySelector('#mi-boton');

// Agregar event listener
boton.addEventListener('click', function () {
    console.log('¡Botón clickeado!');
});

// Con arrow function
boton.addEventListener('click', () => {
    console.log('¡Botón clickeado con arrow function!');
});

// Con función nombrada (recomendado para remover después)
function manejarClick() {
    console.log('¡Click manejado!');
}

boton.addEventListener('click', manejarClick);