const btn = document.getElementById("btn");
const input = document.querySelector('input');

btn.addEventListener('click', () => {
    console.log('Hiciste clic')
})

input.addEventListener('input', (e) => {
    console.log('Valor actual', e.target.value)
})

input.addEventListener('keydown', (e) => {
    console.log(`Tecla presionada ${e.key}`)
})