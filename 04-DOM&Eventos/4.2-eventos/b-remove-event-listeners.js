const boton = document.querySelector('#boton');

// Función nombrada
function saludar() {
    console.log('¡Hola!');
}

// Agregar listener
boton.addEventListener('click', saludar);

// Remover listener (debe ser la misma función)
boton.removeEventListener('click', saludar);

// ❌ Esto NO funciona (son funciones diferentes)
boton.addEventListener('click', () => console.log('hola'));
boton.removeEventListener('click', () => console.log('hola'));