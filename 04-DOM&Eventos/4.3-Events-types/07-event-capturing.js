// Fase de capturing (de padre a hijo)
abuelo.addEventListener('click', () => {
    console.log('1. Abuelo clickeado (capturing)');
}, true); // true = capturing

padre.addEventListener('click', () => {
    console.log('2. Padre clickeado (capturing)');
}, true);

hijo.addEventListener('click', () => {
    console.log('3. Hijo clickeado (capturing)');
}, true);

// Al hacer click en el botón hijo, verás:
// 1. Abuelo clickeado (capturing)
// 2. Padre clickeado (capturing)
// 3. Hijo clickeado (capturing)