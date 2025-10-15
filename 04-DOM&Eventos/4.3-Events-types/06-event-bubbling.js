// HTML:
// <div id="abuelo">
//   <div id="padre">
//     <button id="hijo">Click aquí</button>
//   </div>
// </div>

const abuelo = document.querySelector('#abuelo');
const padre = document.querySelector('#padre');
const hijo = document.querySelector('#hijo');

// Por defecto: fase de bubbling (de hijo a padre)
abuelo.addEventListener('click', () => {
    console.log('3. Abuelo clickeado (bubbling)');
});

padre.addEventListener('click', () => {
    console.log('2. Padre clickeado (bubbling)');
});

hijo.addEventListener('click', () => {
    console.log('1. Hijo clickeado (bubbling)');
});

// Al hacer click en el botón hijo, verás:
// 1. Hijo clickeado (bubbling)
// 2. Padre clickeado (bubbling)
// 3. Abuelo clickeado (bubbling)