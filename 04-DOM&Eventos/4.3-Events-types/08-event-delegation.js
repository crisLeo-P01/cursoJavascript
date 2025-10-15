// ❌ Forma ineficiente: agregar listener a cada elemento
const botones = document.querySelectorAll('.boton');
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        console.log('Botón clickeado');
    });
});

// ✅ Forma eficiente: Event Delegation
const contenedor = document.querySelector('#contenedor-botones');

contenedor.addEventListener('click', (e) => {
    // Verificar si el elemento clickeado es un botón
    if (e.target.classList.contains('boton')) {
        console.log('Botón clickeado:', e.target.textContent);
    }
});