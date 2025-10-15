const elemento = document.querySelector('#elemento');

// Tercer parámetro: opciones
elemento.addEventListener('click', manejarClick, {
    once: true,      // Se ejecuta solo una vez y luego se remueve
    capture: true,   // Usa fase de capturing en lugar de bubbling
    passive: true    // Indica que nunca llamará preventDefault()
});

// Ejemplo de 'once'
const btnSuscribir = document.querySelector('#suscribir');
btnSuscribir.addEventListener('click', () => {
    console.log('¡Suscrito! Este mensaje solo aparece una vez');
}, { once: true });