const formulario = document.querySelector('#mi-formulario');
const input = document.querySelector('#input');
const select = document.querySelector('#select');
const checkbox = document.querySelector('#checkbox');

// Submit - envío de formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir recarga de página
    console.log('Formulario enviado');

    // Obtener datos del formulario
    const formData = new FormData(formulario);
    console.log(Object.fromEntries(formData));
});

// Input - cada cambio en tiempo real
input.addEventListener('input', (e) => {
    console.log('Valor actual:', e.target.value);
});

// Change - cuando el valor cambia y pierde el foco
input.addEventListener('change', (e) => {
    console.log('Valor final:', e.target.value);
});

// Focus - cuando el elemento recibe foco
input.addEventListener('focus', (e) => {
    console.log('Input enfocado');
    e.target.style.borderColor = 'blue';
});

// Blur - cuando el elemento pierde foco
input.addEventListener('blur', (e) => {
    console.log('Input desenfocado');
    e.target.style.borderColor = '';
});

// Select - para <select>
select.addEventListener('change', (e) => {
    console.log('Opción seleccionada:', e.target.value);
});

// Checkbox/Radio
checkbox.addEventListener('change', (e) => {
    console.log('Checkbox marcado:', e.target.checked);
});