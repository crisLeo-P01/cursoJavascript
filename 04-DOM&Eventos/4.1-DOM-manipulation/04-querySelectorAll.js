// Todas las cards
const todasLasCards = document.querySelectorAll('.card');
console.log(todasLasCards); // NodeList(3) [div.card, div.card, div.card]

// Todos los botones
const botones = document.querySelectorAll('button');

// Selectores complejos
const linksExternos = document.querySelectorAll('a[target="_blank"]');
const inputsRequeridos = document.querySelectorAll('input[required]');

// NodeList ya tiene forEach
todasLasCards.forEach((card, index) => {
    console.log(`Card ${index + 1}:`, card.textContent);
});

// Convertir a array si necesitas otros métodos
const botonesArray = Array.from(botones);
const botonesActivos = botonesArray.filter(btn => !btn.disabled);

console.log(botonesArray);
console.log(botonesActivos);

