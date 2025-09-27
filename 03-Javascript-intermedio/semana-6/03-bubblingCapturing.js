const padre = document.getElementById('padre')
const hijo = document.getElementById('hijo')

// Bubbling (por defecto)
padre.addEventListener('click', () => {
    console.log('clic en el padre (bubbling)')
})

hijo.addEventListener('click', () => {
    console.log('clic en el hijo (bubbling)')
})

// Capturing (con true en el tercer parámetro)
padre.addEventListener('click', () => {
    console.log('clien en el padre (capturing)')
}, true)