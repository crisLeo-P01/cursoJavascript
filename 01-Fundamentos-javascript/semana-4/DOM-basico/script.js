// ACCEDIENDO A ELEMENTOS

let titulo = document.getElementById('titulo');
let parrafo = document.getElementsByClassName('parrafo');
let boton = document.querySelector('.boton');
let parrafoSection = document.querySelectorAll('.parrafo-section');

console.log(titulo);
console.log(parrafo)
console.log(boton)
console.log(parrafoSection)

// MODIFICANDO ELEMENTOS

titulo.textContent = 'Estudiando el DOM'
titulo.style.color = 'red';
titulo.setAttribute('data-info', 'ejemplo')

// CREAR Y AGREGAR ELEMENTOS

const lista = document.getElementById('lista')

let elementos = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR']

elementos.forEach((elemento) => {
    const item = document.createElement('li');
    item.textContent = elemento;
    lista.appendChild(item)
})

const primerElemento = document.querySelector('#lista li');
primerElemento.remove();

boton.addEventListener('click', () => {
    alert('Hola, tocaste el boton y soy un alert')
})