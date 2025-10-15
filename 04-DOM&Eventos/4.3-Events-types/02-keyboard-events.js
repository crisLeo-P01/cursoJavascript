const input = document.querySelector('#mi-input');

// Keydown - cuando se presiona una tecla
input.addEventListener('keydown', (e) => {
    console.log(`Tecla presionada: ${e.key}`);
    console.log(`Código: ${e.code}`);
});

// Keyup - cuando se suelta una tecla
input.addEventListener('keyup', (e) => {
    console.log(`Tecla soltada: ${e.key}`);
});

// Keypress - cuando se presiona una tecla de carácter (DEPRECATED)
// Usar keydown en su lugar

// Detectar teclas específicas
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        console.log('Enter presionado');
    }

    if (e.key === 'Escape') {
        console.log('Escape presionado');
    }

    // Detectar combinaciones
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault(); // Prevenir guardar del navegador
        console.log('Ctrl + S presionado');
    }

    if (e.shiftKey && e.key === 'A') {
        console.log('Shift + A presionado');
    }
});