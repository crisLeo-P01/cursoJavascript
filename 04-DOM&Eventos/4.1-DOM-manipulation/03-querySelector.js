// Por clase
let parrafo = document.querySelector('.parrafo')

// Por ID
let primerCard = document.querySelector('#lorem')

// Por etiqueta
let primerP = document.querySelector('p')

// Selectores complejos
const botonPrimario = document.querySelector('a.primary');
const linkExterno = document.querySelector('a[target="_blank"]');
const primerLiDeUl = document.querySelector('ul li:first-child');

console.log(botonPrimario.textContent)
console.log(linkExterno.textContent)
console.log(primerLiDeUl.textContent);


// Selectores descendientes
const spanEnDiv = document.querySelector('div.container span.highlight');
console.log(spanEnDiv);




